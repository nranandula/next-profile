import Messages from "./components/messages/Messages";
import Reviews from "./components/reviews/Reviews";

export default async function Engagement() {
    return (
        <div className="flex flex-col gap-y-10 mb-2 max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-5">
                <div className="flex flex-col gap-y-5 bd-card">
                    <div className="bd-card-header pb-1">
                        Reviews
                    </div>
                    <div className="flex flex-col px-5">
                        <Reviews />
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 bd-card">
                    <div className="bd-card-header pb-1">
                        Bookmarks
                    </div>
                    <div className="flex flex-col px-5">
                        <Reviews />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-5">
                <div className="flex flex-col gap-y-5 bd-card">
                    <div className="bd-card-header pb-1">
                        Messages
                    </div>
                    <div className="flex flex-col px-5">
                        <Messages />
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 bd-card">
                    <div className="bd-card-header pb-1">
                        Notifications
                    </div>
                    <div className="flex flex-col px-5">
                        <Messages />
                    </div>
                </div>
            </div>
        </div>
    )
}
