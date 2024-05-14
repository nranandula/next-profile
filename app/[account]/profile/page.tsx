import ProfileEdit from "@/app/components/profile/profile-edit/ProfileEdit"
import ProfileView from "@/app/components/profile/profile-view/ProfileView"
import Link from "next/link"

export default function Profile({searchParams, params}:{searchParams: { edit: string }, params: { account: string }}) {
    
    return (
        <div className="mx-4 pb-5">
            {
                searchParams.edit?<ProfileEdit userName={params.account}/>:<ProfileView userName={params.account}/>
            }
        </div>
    )
}