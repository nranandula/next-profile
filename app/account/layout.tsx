import AccountHeader from "./components/header/AccountHeader";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AccountHeader/>
            <section className="pt-5">
                {children}
            </section>
        </div>
    );
}