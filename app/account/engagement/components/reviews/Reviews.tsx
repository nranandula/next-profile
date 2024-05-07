interface Review {
    description: string
    date_posted: string
    author: string
    rating: number
    id: string
}


export default async function Reviews(){
    const response = await fetch("http://localhost:3000/api/reviews");
    const data = await response.json();
    const reviews = data.userReviews
    return (
        <>
            {
                reviews.map((review: Review, index:number) => (
                    <div className="flex flex-col gap-y-1 pb-2" key={review.id}>
                        <div className="flex flex-row justify-between align-middle">
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">{review.author}</p>
                                <p className="text-[12px]">{review.date_posted}</p>
                            </div>
                            <p className="font-bold">{review.rating}/5</p>
                        </div>
                        <p>{review.description}</p>
                        {index < reviews.length - 1 && <hr className="border-gray-200 my-2" />}
                    </div>
                ))
            }
        </>
    )
}