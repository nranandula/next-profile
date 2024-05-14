import Link from "next/link"
export default function ProfileView({userName}:{userName:string}){
    const bioText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi facere veritatis reiciendis ullam in laborum aperiam quibusdam pariatur ipsam. Quidem corporis iste delectus repellendus, fugiat quisquam. Ea nihil pariatur atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi facere veritatis reiciendis ullam in laborum aperiam quibusdam pariatur ipsam. Quidem corporis iste delectus repellendus, fugiat quisquam. Ea nihil pariatur atque."
    return (
        <div className="flex flex-col gap-y-5 bd-card max-w-md md:max-w-2xl mx-auto bd-card-with-border px-3">
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-row gap-x-4 justify-center pt-5">
                        <div className="w-24 h-24 overflow-hidden rounded-full">
                            <img className="object-cover" src="/blank-profile-picture.png" alt="Profile Picture" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <h2 className="text-center font-bold text-[24px] pr-2">Personal Details</h2>
                        <Link href={`/${userName}/profile?edit=true`} className="w-6 h-6 overflow-hidden">
                        <img className="object-cover" src="/Edit-icon.png" alt="Profile Picture" />
                        </Link>
                    </div>
                        <div className="flex flex-col gap-y-6 pb-5 px-5">
                            <ProfileInfoField fieldId="fullName" fieldLabel="Full Name:" fieldValue="Narayan Anandula" />
                            <ProfileInfoField fieldId="email" fieldLabel="Email:" fieldValue="test@testmail.com" />
                            <ProfileInfoField fieldId="city" fieldLabel="City:" fieldValue="Bakersfield" />
                            <ProfileInfoField fieldId="state" fieldLabel="State:" fieldValue="California" />
                            <ProfileInfoField fieldId="membership" fieldLabel="Membership:" fieldValue="Premium" />
                            <ProfileInfoField fieldId="userType" fieldLabel="User Type:" fieldValue="Staff" />
                            <ProfileInfoField fieldId="aboutMe" fieldLabel="About me:" fieldValue={bioText} />
                        </div>
                </div>
            </div>
    )
}
interface ProfileInfoFieldProps {
    fieldLabel: string
    fieldValue: string
    fieldId: string
}
const ProfileInfoField = ({ fieldLabel, fieldValue, fieldId }: ProfileInfoFieldProps) => {
    return (
        <div className="flex flex-col gap-y-0">
            <label className=" text-gray-500 text-[16px]" htmlFor={fieldId}>{fieldLabel}</label>
            <p id={fieldId} className="text-[16px] text-black flex-1">{fieldValue}</p>
        </div>
    )
}