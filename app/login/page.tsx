import { LoginAction } from "./actions/LoginAction";

export default function Profile() {
    return(
        <div className="h-screen flex flex-row justify-center items-center">
        <div className="flex flex-col settings-card max-w-md p-4 flex-1">
            <form className="flex flex-col gap-4" action={LoginAction}>
                <input type="text" id="userName" name="userName" placeholder="User Name" required />

                <input type="password" id="password" name="password" placeholder="Password" required />

                <button type="submit" className="primaryBtn">Login</button>
            </form >
        </div>
        </div>
    )
}