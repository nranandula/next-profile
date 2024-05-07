import AccountHeader from "./header/AccountHeader";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AccountHeader/>
            <section className="px-5">
                {children}
            </section>
        </div>
    );
}