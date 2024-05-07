interface Message {
    description: string
    date_posted: string
    author: string
    status: string
    id: string
}

export default async function Messages(){

    const response = await fetch("http://localhost:3000/api/messages");
    const data = await response.json();
    const messages = data.messages
    return (
        <>
            {
                messages.map((message: Message, index:number) => (
                    <div className="flex flex-col gap-y-1 pb-2" key={message.id}>
                        <div className="flex flex-row justify-between align-middle">
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">{message.author}</p>
                                <p className="text-[12px]">{message.date_posted}</p>
                            </div>
                            <p className="font-bold">{message.status}</p>
                        </div>
                        <p>{message.description}</p>
                        {index < messages.length - 1 && <hr className="border-gray-200 my-2" />}
                    </div>
                ))
            }
        </>
    )
}