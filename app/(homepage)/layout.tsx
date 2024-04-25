
import HeaderPage from "@/components/header";
import FooterPage from "@/components/footer";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <HeaderPage />
            {children}
            <FooterPage />
        </section>
    )
}