import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4-1106-preview',
    stream: true,
    messages,
    temperature: 1,
    max_tokens: 4095,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}


// openai-service.ts
import axios from 'axios';

const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/images/generations';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Store your API key in an environment variable

export const generateImageWithDALLE = async (prompt: string) => {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not found. Please set your API key in the environment variables.');
  }

  try {
    const response = await axios.post(
      OPENAI_API_ENDPOINT,
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error generating image with DALL·E:', error);
    throw error;
  }
};
