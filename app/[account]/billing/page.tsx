import PaymentForm from "@/app/components/payment-form/PaymentForm";

export default function BillingPage() {
    const cardsOnFile = [
        {
            cardNumber: "****8888",
            exp: "10/25",
            cardType: "Visa",
            id:"visa1"
        },
        {
            cardNumber: "****9999",
            exp: "11/26",
            cardType: "Mastercard",
            id:"masterCard2"
        }
    ]
    return (
        <div className="mx-4 pb-5">
            <div className="flex flex-col sm:flex-row sm:gap-x-5 gap-y-5 bd-card max-w-md sm:max-w-3xl mx-auto bd-card-with-border px-3">
                <div className="flex flex-col gap-y-5 sm:flex-1">
                    <h2 className="font-bold text-[18px] pt-4">Premium Membership</h2>
                    <p>Please select a card below and click on Enroll button to subscribe to Premium Membership.</p>
                    <p>To add/use a different card, please provide the card information in the Add New Card section and click on Add and Enroll button </p>
                    <div className="flex flex-col gap-y-5 px-5 sm:px-0">
                        {cardsOnFile.map((card)=>(
                            <div key={card.id} className="bd-card border-gray-400 border-[1px] p-2">
                                <CardInfoField cardInfo={card}/>
                            </div>
                        ))}
                        <button className="primaryBtn">Enroll</button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 border-gray-400 border-t-[1px] py-5 mt-4 sm:flex-1 sm:border-none sm:mt-0">
                    <h2 className="font-bold text-[18px]">Add New Payment</h2>
                    <PaymentForm buttonLabel="Add and Enroll"/>
                </div>
            </div>
        </div>
    )
}

interface CardInfoFieldProps {
    cardNumber:string,
    exp:string,
    cardType:string,
    id:string
}
const CardInfoField = ({ cardInfo}: {cardInfo:CardInfoFieldProps}) => {
    const {cardNumber, exp, cardType, id} = {...cardInfo};
    return (
        <div className="flex flex-row gap-y-0 gap-x-4 items-center pb-2">
            <input type="radio" name="creditCard" value={id} id={id} />
            <label className=" text-gray-500 text-[16px]" htmlFor={id}>
                <span className="block pb-2">Card Number:<span className="text-black pl-1">{cardNumber}</span></span>
                <span className="pr-6">Card Type:<span className="text-black pl-1">{cardType}</span></span>
                <span className="pr-4">Exp:<span className="text-black pl-1">{exp}</span></span>
            </label>
        </div>
    )
}