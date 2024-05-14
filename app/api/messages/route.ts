import { NextResponse } from "next/server";

const messages = [
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User One",
        rating: 5,
        id: '1'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User Two",
        rating: 4,
        id: '2'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User One",
        rating: 5,
        id: '3'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User Two",
        rating: 4,
        id: '4'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User One",
        rating: 5,
        id: '5'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User Two",
        rating: 4,
        id: '6'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User One",
        rating: 5,
        id: '7'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User Two",
        rating: 4,
        id: '8'
    }
]

export async function GET(request:Request, context:any){
    const reqURL = new URL(request.url);
    const limit = reqURL.searchParams.get("limit");
    const responseMessages = (limit)? messages.slice(0,4):messages;
    return NextResponse.json({
        messages:responseMessages
    })
}