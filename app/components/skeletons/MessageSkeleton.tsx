export default function MessageSkeleton() {
    return (
        <>
            {
                [1,2].map((message, index:number, messages) => (
                    <div className="skeleton flex flex-col gap-y-1 pb-2" key={message}>
                        <div className="flex flex-row justify-between align-middle">
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold"></p>
                                <p className="text-[12px]"></p>
                            </div>
                            <p className="font-bold"></p>
                        </div>
                        <p className="three-line-ellipse"></p>
                        {index < messages.length - 1 && <hr className="border-gray-200 my-2" />}
                    </div>
                ))
            }
        </>
    )
}