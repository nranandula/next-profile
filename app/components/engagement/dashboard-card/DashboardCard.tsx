'use client'

import { useRef } from "react"

export default function DashboardCard({messages}:{messages:Array<any>}) {
   
    const CARD_WIDTH = 240
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (scrollby:number)=>{
        containerRef.current?.scrollBy({ left: scrollby, behavior: "smooth" })
    }

    return (
        <div className="flex flex-row items-stretch gap-x-2">
            <button className="primaryBtn-small md:max-lg:block hidden" onClick={()=>handleScroll(CARD_WIDTH)}>{"<"}</button>
            {/* <div ref={containerRef} className="flex flex-1 flex-row gap-x-2 engagement-dashboard-card-container"> */}
            <div ref={containerRef} className="flex flex-col gap-y-3 sm:flex-1 sm:flex-row sm:gap-x-2 engagement-dashboard-card-container">
                {
                    messages.map((review, index: number) => (

                        <div className="flex flex-col gap-y-3 p-2 engagement-dashboard-card" key={review.id}>
                            <div className="flex flex-row justify-between align-middle">
                                <div className="flex flex-col gap-y-1">
                                    <p className="font-bold">{review.author}</p>
                                    <p className="text-[12px]">{review.date_posted}</p>
                                </div>
                                <p className="font-bold">{review.rating}/5</p>
                            </div>
                            <p className="two-line-ellipse">{review.description}</p>
                        </div>

                    ))
                }
            </div>
            <button className="primaryBtn-small md:max-lg:block hidden"onClick={()=>handleScroll(-CARD_WIDTH)}>{">"}</button>
        </div>
    )

}