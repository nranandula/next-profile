import Link from "next/link"

export default function UserSettings({params}: {params: { account: string } } ) {
    console.log("PARAMS", params)
    return (
        <div className="flex flex-col gap-y-5 px-2 settings-card  max-w-md">
            <div className="settings-card-header">
                Settings
            </div>
            <div className="flex flex-col gap-y-5 px-5 pb-5 gap-4">
               <Link href={`/${params.account}/settings/billing`} className="primaryBtn">Billing</Link>
               <Link href="#" className="primaryBtn">Subscriptions</Link>
               <Link href="#" className="primaryBtn">Change Password</Link>
               <Link href="#" className="primaryBtn">Permissions/Privacy</Link>
            </div>
        </div>
    )
}