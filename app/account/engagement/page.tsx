import Link from "next/link";
import Messages from "./components/messages/Messages";
import Reviews from "./components/reviews/Reviews";

export default async function Engagement() {
    return (
        <div className="flex flex-col gap-y-5 mb-2 max-w-screen-xl mx-auto">

            {/* <div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">Reviews</h3>
                    <Link href={"#"} className="primaryBtn-small">view all</Link>
                </div>
                <div className="flex flex-col">
                    <Reviews />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">Bookmarks</h3>
                    <Link href={"#"} className="primaryBtn-small">view all</Link>
                </div>
                <div className="flex flex-col">
                    <Reviews />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">Messages</h3>
                    <Link href={"#"} className="primaryBtn-small">view all</Link>
                </div>
                <div className="flex flex-col">
                    <Reviews />
                </div>
            </div>
            <div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">Notifications</h3>
                    <Link href={"#"} className="primaryBtn-small">view all</Link>
                </div>
                <div className="flex flex-col">
                    <Reviews />
                </div>
            </div> */}


            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-6 p-4">
                <div className="flex flex-col gap-y-5 engagement-card-md mx-auto border-0">
                    <div className="flex flex-row items-center justify-between p-5">
                        <h3 className="text-[24px] font-bold">Reviews</h3>
                        <Link href={"#"} className="primaryBtn-small">view all</Link>
                    </div>
                    <div className="flex flex-col px-5">
                        <Messages />
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 engagement-card-md mx-auto border-0">
                    <div className="flex flex-row items-center justify-between p-5">
                        <h3 className="text-[24px] font-bold">Bookmarks</h3>
                        <Link href={"#"} className="primaryBtn-small">view all</Link>
                    </div>
                    <div className="flex flex-col px-5">
                        <Messages />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-5 p-4">
                <div className="flex flex-col gap-y-5 engagement-card-md mx-auto">
                    <div className="flex flex-row items-center justify-between p-5">
                        <h3 className="text-[24px] font-bold">Messages</h3>
                        <Link href={"#"} className="primaryBtn-small">view all</Link>
                    </div>
                    <div className="flex flex-col px-5">
                        <Messages />
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 engagement-card-md mx-auto">
                    <div className="flex flex-row items-center justify-between p-5">
                        <h3 className="text-[24px] font-bold">Notifications</h3>
                        <Link href={"#"} className="primaryBtn-small">view all</Link>
                    </div>
                    <div className="flex flex-col px-5">
                        <Messages />
                    </div>
                </div>
            </div>
        </div>
    )
}
