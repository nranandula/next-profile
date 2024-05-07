import { NextResponse } from "next/server";

const messages = [
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User One",
        status: "unread",
        id:'1'
    },
    {
        description: "Lorem ipsum dolor sit amet. In minus corporis aut quasi doloremque et maiores ullam sed illo dignissimos et soluta consequatur et laboriosam tempora ex beatae omnis. Sed magni alias vel molestiae numquam qui quae eius aut minus aliquam!",
        date_posted: "05/01/2024",
        author: "User Two",
        status: "read",
        id:''
    }
]

export async function GET(){
    return NextResponse.json({
        messages
    })
}