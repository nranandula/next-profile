import Link from "next/link"

export default function AccountHeader() {
    const navLinks = [
        { linkLable: "Profile", linkUrl: "/account/profile" },
        { linkLable: "Engagement", linkUrl: "/account/engagement" },
        { linkLable: "Settings", linkUrl: "/account/settings" }
    ]
    return (
        <div className="flex flex-col pt-5 bg-white">
            <div className="flex flex-row w-full align-middle gap-x-8 mb-4 px-5">
                <div className="rounded-full w-24 h-24 overflow-hidden">
                    <img className="object-cover" src="/blank-profile-picture.png" alt="Profile Picture" />
                </div>
                <p className="flex-1 self-center font-bold">Narayan Reddy Anandula</p>
            </div>

            <ul className="conatainer flex flex-row gap-x-8 border-y-[1px] border-gray-200 px-5">
                {navLinks.map((navLink) => (
                    <li>
                        <Link className="py-4 block border-b-2 border-b-transparent hover:border-b-blue-200" href={navLink.linkUrl}>{navLink.linkLable}</Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}