export default function Profile() {
    return (
        <div className="flex flex-col gap-y-5 bd-card">
            <div className="bd-card-header">
                Profile
            </div>
            <div className="flex flex-col gap-y-5 px-5 pb-5">
                <ProfileInfoField fieldId="fname" fieldLabel="First Name" fieldValue="Narayan" />
                <ProfileInfoField fieldId="lname" fieldLabel="Last Name" fieldValue="Ananadula" />
                <ProfileInfoField fieldId="userName" fieldLabel="Username" fieldValue="nanandula" />
                <ProfileInfoField fieldId="email" fieldLabel="email" fieldValue="test@testmail.com" />
                <ProfileInfoField fieldId="userType" fieldLabel="User Type" fieldValue="Premium" />
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
        <div className="flex flex-row gap-x-2">
            <label className="font-bold w-24 flex-1 text-right" htmlFor={fieldId}>{fieldLabel}:</label>
            <p id={fieldId} className="flex-1">{fieldValue}</p>
        </div>
    )
}