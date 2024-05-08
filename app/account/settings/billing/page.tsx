import Link from "next/link"
import { BillingAction } from "../actions/BillingActions"

export default function Billing() {
    return (
        <div className="flex flex-col gap-4 bd-card p-4 max-w-md mb-2">
            <div className="flex flex-row items-center">
                <Link href={"/account/settings"} className="overflow-hidden w-6 h-6">
                    <img className="object-cover" src="/back-icon.png" alt="Profile Picture" />
                </Link>
                <h2 className="flex-1 text-center font-bold text-[24px] text-bgYellow">Billing Information</h2>
            </div>
            <form className="flex flex-col gap-4" action={BillingAction}>
                <input type="text" id="name" name="name" placeholder="Name" required />

                <input type="email" id="email" name="email" placeholder="Email" required />

                <textarea id="address" name="address" rows={4} placeholder="Address" required></textarea>

                <input type="text" id="card" name="card" placeholder="Credit Card Number" required />

                <input type="text" id="expiry" name="expiry" placeholder="Expiry Date" required />

                <input type="text" id="cvv" name="cvv" placeholder="CVV" required />

                <button type="submit" className="primaryBtn">Add/Update Payment</button>
            </form >
        </div >
    )
}