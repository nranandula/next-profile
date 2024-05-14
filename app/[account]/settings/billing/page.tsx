import Link from "next/link"
import { BillingAction } from "../actions/BillingActions"

export default function Billing({params}:{params: { account: string }} ) {
    // const isValidCreditCard = (number:string)=> {
    //     var sum = 0;
    //     var doubleUp = false;
    //     for (var i = number.length - 1; i >= 0; i--) {
    //       var digit = +number.charAt(i);
    //       if (doubleUp) {
    //         digit *= 2;
    //         if (digit > 9) digit -= 9;
    //       }
    //       sum += digit;
    //       doubleUp = !doubleUp;
    //     }
    //     return sum % 10 === 0;
    //   }
    return (
        <div className="flex flex-col gap-4 bd-card-deprecated p-4 max-w-md mb-2">
            <div className="flex flex-row items-center">
                <Link href={`/${params.account}/settings`} className="overflow-hidden w-6 h-6">
                    <img className="object-cover" src="/back-icon.png" alt="Profile Picture" />
                </Link>
                <h2 className="flex-1 text-center font-bold text-[24px] text-bgYellow">Billing Information</h2>
            </div>
            <form className="flex flex-col gap-4" action={BillingAction}>
                <input type="text" id="userName" name="userName" value={params.account} hidden />
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