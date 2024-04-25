'use client';

import { useChat } from 'ai/react';
import Image from 'next/image'

import { Button } from "flowbite-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main>

      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">

            <div>
              {m.role === 'user' ? (

                <div>
                  <Image className="my-4 w-8 h-8 rounded-full" width="512" height="512" src="/AI-Logo.png" alt="AI image"></Image>
                  <div className="flex flex-col w-full max-w-[2048px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{m.role}</span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{m.name}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">

                      {m.content}

                    </p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> User Delivered</span>
                  </div>
                </div>

              ) : (

                <div>
                  <div className='flex justify-end'>
                  <Image className="my-4 w-8 h-8 rounded-full" width="512" height="512" src="/AI-Logo.png" alt="AI image"></Image>
                  </div>
                  <div className="flex flex-col w-full max-w-[2048px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-lg rounded-br-lg dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{m.role}</span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{m.name}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">

                      {m.content}

                    </p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> AI Delivered</span>
                  </div>
                </div>

              )}

            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        <form onSubmit={handleSubmit}>
          <textarea
            className="reltive bottom mt-20 text-gray-800 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="What do you need help with?"
            onChange={handleInputChange}
            spellCheck={true}
            rows={4}
          />
          <div className='flex justify-center'>
            <Button type='submit' gradientMonochrome="cyan">Sent</Button>
          </div>
        </form>
        
      </div>
    </main>
  );
}