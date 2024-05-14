import Link from "next/link"

export default function ProfileEdit({userName}:{userName:string}) {
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
                </div>
                <form className="flex flex-col gap-y-6 pb-5 px-5">
                    <ProfileInfoEditField fieldId="fullName" fieldLabel="Full Name:" fieldValue="Narayan Anandula" />
                    <ProfileInfoEditField fieldId="email" fieldLabel="Email:" fieldValue="test@testmail.com" />
                    <ProfileInfoEditField fieldId="city" fieldLabel="City:" fieldValue="Bakersfield" />
                    <ProfileInfoEditField fieldId="state" fieldLabel="State:" fieldValue="California" />
                    <div className="flex flex-col gap-y-0">
                        <label className=" text-gray-500 text-[16px]" htmlFor="aboutMe">About Me:</label>
                        <textarea id="aboutMe" name="aboutMe" rows={6} required defaultValue={bioText}></textarea>
                    </div>
                    <div className="flex flex-row justify-center">
                    <button type="submit" className="primaryBtn flex-1">Save</button>
                    <Link className="primaryBtn ml-5 flex-1" href={`/${userName}/profile`}>Discard</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
interface ProfileInfoEditFieldProps {
    fieldLabel: string
    fieldValue: string
    fieldId: string
}
const ProfileInfoEditField = ({ fieldLabel, fieldValue, fieldId }: ProfileInfoEditFieldProps) => {
    return (
        <div className="flex flex-col gap-y-0">
            <label className=" text-gray-500 text-[16px]" htmlFor={fieldId}>{fieldLabel}</label>
            <input type="text" id={fieldId} name={fieldId} required />
        </div>
    )
}