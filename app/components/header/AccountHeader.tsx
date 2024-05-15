'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"

interface AccountHeaderProps {
    userName: string
}

export default function AccountHeader({ userName }: AccountHeaderProps) {
    const navLinks = [
        { linkLable: "Profile", linkUrl: `/${userName}/profile`, id:'profile' },
        { linkLable: "Engagement", linkUrl: `/${userName}/engagement`, id:'engagement'  },
        { linkLable: "Billing & Membership", linkUrl: `/${userName}/billing`, id:'billing'  },
        // { linkLable: "Privacy", linkUrl: `/${userName}/privacy`, id:'privacy'  },
        { linkLable: "Account", linkUrl: `/${userName}/settings`, id:'settings'  },
    ]
    const pathname = usePathname()
    
    const [isOpen, setIsOpen] = useState(false)

    const headerLabel = useMemo(()=>{
        const pathId = pathname? pathname.split('/')[2]:""
        if(pathId){
            const selectedLink = navLinks.find((link)=>link.id == pathId);
            return selectedLink?selectedLink.linkLable:""
        }
        return ""
    },[pathname])
    const menuIconClickHandler = () => {
        setIsOpen(!isOpen);
    }
    const navLinkHandler = ()=>{
        setIsOpen(false)
    }
    return (
        <div className="flex flex-col bg-white">
            <div className="sm:hidden p-4 flex flex-row items-center">
                <button className="w-8 h-8" onClick={() => menuIconClickHandler()}>
                    <img className="object-cover" src="/BurgerMenuIcon.png" alt="Menu Icon" />
                </button>
                    <h1 className="font-bold flex-1 text-center text-[24px]">{headerLabel}</h1>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
                <ul className="conatainer flex flex-col items-stretch sm:justify-center sm:flex-row gap-x-8 border-y-[1px] border-gray-200 px-5">
                    {navLinks.map((navLink) => (
                        <li className="border-b-[1px] sm:border-none  border-gray-200" key={navLink.id}>
                            <Link className={`py-4 block border-b-2 border-b-transparent hover:border-b-blue-200 text-center ${headerLabel == navLink.linkLable ? 'font-bold text-bdTeal':''}`} href={navLink.linkUrl} onClick={()=>navLinkHandler()}>{navLink.linkLable}</Link>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </div>
    )
}