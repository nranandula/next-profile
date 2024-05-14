import AccountHeader from "../components/header/AccountHeader";

export default function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { account: string } 
}>) {
    return (
        <div>
            <AccountHeader userName={params.account}/>
            <section className="pt-5">
                {children}
            </section>
        </div>
    );
}