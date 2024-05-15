'use client'

import ToggleButton from "@/app/components/toggle-button/ToggleButton"
import { useRouter } from "next/navigation";

export default function UserSettings({ params }: { params: { account: string } }) {
    const router = useRouter();
    const logoutHandler = async () => {
        await fetch("http://localhost:3000/api/logout")
        router.push('/login')
    }
    return (
        <div className="mx-4 pb-5">
            <div className="flex flex-col gap-y-5 bd-card max-w-md mx-auto bd-card-with-border px-3 pb-5">
                <div className="flex flex-row gap-x-5 py-3">
                    <label htmlFor="countries" className="text-sm font-medium text-gray-900">Switch Account: </label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                        <option selected>Choose an Account</option>
                        <option value="ACC1">Account 1</option>
                        <option value="ACC2">Account 2</option>
                    </select>
                </div>
                <div>
                    <h2 className="font-bold text-[18px] py-3">Permissions</h2>
                    <div className="flex flex-col gap-y-5 px-4">
                        <ToggleButton label="Stictly Necessory Cookies" checked={true} disabled={true} />
                        <ToggleButton label="Share Information with other Blossend apps" />
                        <ToggleButton label="Share Information with third party apps" />
                    </div>
                </div>
                <button className="primaryBtn mt-4" onClick={()=>logoutHandler()}>Logout</button>
            </div>
        </div>
    )
}