'use client'

import { FormEvent } from "react"

export default function PaymentForm({ buttonLabel,onFormSubmit }: { buttonLabel: string, onFormSubmit?:(details:any)=>void }) {
    // TODO elegantly handle forms. Avoiding the use of actions on purpose.
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const form = e.currentTarget.elements;
        const ccDetails = {
            cardNumber: form.card.value.subString(0,4),
            exp:form.expiry.value,
            cardType:"Visa"
        }
        console.log("Card Details", ccDetails, form)
        if(onFormSubmit){
            onFormSubmit(ccDetails)
        }
    }
    return (
        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" id="name" name="name" placeholder="Name" />

            <input type="email" id="email" name="email" placeholder="Email" required />

            <textarea id="address" name="address" rows={4} placeholder="Address" required></textarea>

            <input type="text"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                maxLength={19}
                id="card" name="card" placeholder="Credit Card Number" required />

            <input type="text" id="expiry" name="expiry" placeholder="Expiry Date" required />

            <input type="text" 
            inputMode="numeric"
            pattern="[0-9\s]{3,4}"
            maxLength={4}  id="cvv" name="cvv" placeholder="CVV" required />

            <button type="submit" className="primaryBtn">{buttonLabel}</button>
        </form >
    )
}