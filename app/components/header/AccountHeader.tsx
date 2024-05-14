'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

interface AccountHeaderProps {
    userName: string
}

export default function AccountHeader({ userName }: AccountHeaderProps) {
    const navLinks = [
        { linkLable: "Profile", linkUrl: `/${userName}/profile` },
        { linkLable: "Engagement", linkUrl: `/${userName}/engagement` },
        { linkLable: "Settings", linkUrl: `/${userName}/settings` }
    ]
    const router = useRouter();
    const logoutHandler = async ()=>{
        await fetch("http://localhost:3000/api/logout")
        router.push('/login')
    }
    return (
        <div className="flex flex-col bg-white">
            <ul className="conatainer flex flex-row gap-x-8 border-y-[1px] border-gray-200 px-5">
                {navLinks.map((navLink) => (
                    <li>
                        <Link className="py-4 block border-b-2 border-b-transparent hover:border-b-blue-200" href={navLink.linkUrl}>{navLink.linkLable}</Link>
                    </li>
                ))
                }
            </ul>
            {/* <div className="flex flex-row w-full items-center gap-x-8 mb-4 px-5">
                <div className="rounded-full w-24 h-24 overflow-hidden">
                    <img className="object-cover" src="/blank-profile-picture.png" alt="Profile Picture" />
                </div>
                <div>
                    <p className="flex-1 font-bold">{userName}</p>
                    <button type="button" onClick={logoutHandler} className="primaryLink">
                        Logout
                    </button>
                </div>
            </div> */}
        </div>
    )
}