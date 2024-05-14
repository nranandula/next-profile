'use client'
import Link from "next/link";
import DashboardCard from "@/app/components/engagement/dashboard-card/DashboardCard";
import { useEffect, useState } from "react";

export default function Engagement() {
    const ALL = "All";
    const REVIEWS = "Reviews";
    const COMMENTS = "Comments";
    const BOOKMARKS = "Bookmarks";
    const MESSAGES = "Messages";
    const NOTIFICATIONS = "Notifications";

    const filterKeys = [ALL, REVIEWS, COMMENTS, BOOKMARKS, MESSAGES, NOTIFICATIONS];

    const [selectedFilter, setSelectedFilter] = useState<string>(ALL);
    const [messages, setMessages] = useState([])
    const handleFilterChange = (key:string)=>{
        setSelectedFilter(key);
    }
    
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`http://localhost:3000/api/messages?limit=2`);
            const data = await response.json();
            setMessages(data.messages)
        }
        fetchData().catch((err)=>console.log(err))
    },[])
    return (
        <div className="flex flex-col gap-y-5 mb-2 max-w-screen-xl mx-auto">

            <div className="flex flex-col gap-x-2 gap-y-2 bg-white p-4">
                <h1 className="text-[16px] font-bold">Filters:</h1>
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                    {filterKeys.map((filterKey:string) => (
                        <button 
                        onClick={()=>handleFilterChange(filterKey)}
                        key={filterKey} 
                        className={`engagement-dashboard-pill ${(filterKey == selectedFilter)&&'engagement-dashboard-pill-selected'}`}>{filterKey}</button>
                    ))}
                </div>
            </div>

            {(selectedFilter == ALL || selectedFilter == REVIEWS) && <div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">{REVIEWS}</h3>
                    <Link href={"#"} className="primaryLink">view all</Link>
                </div>
                <div className="flex flex-col">
                    <DashboardCard messages={messages}/>
                </div>
            </div>}

            {(selectedFilter == ALL || selectedFilter == COMMENTS) &&<div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">{COMMENTS}</h3>
                    <Link href={"#"} className="primaryLink">view all</Link>
                </div>
                <div className="flex flex-col">
                    <DashboardCard messages={messages}/>
                </div>
            </div>}

            {(selectedFilter == ALL || selectedFilter == BOOKMARKS) &&<div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">{BOOKMARKS}</h3>
                    <Link href={"#"} className="primaryLink">view all</Link>
                </div>
                <div className="flex flex-col">
                    <DashboardCard messages={messages}/>
                </div>
            </div>}

            {(selectedFilter == ALL || selectedFilter == MESSAGES) &&<div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">{MESSAGES}</h3>
                    <Link href={"#"} className="primaryLink">view all</Link>
                </div>
                <div className="flex flex-col">
                    <DashboardCard messages={messages}/>
                </div>
            </div>}

            {(selectedFilter == ALL || selectedFilter == NOTIFICATIONS) &&<div className="flex flex-col gap-y-2 bg-white p-4">
                <div className="flex flex-row items-center justify-between px-1">
                    <h3 className="text-[24px]">{NOTIFICATIONS}</h3>
                    <Link href={"#"} className="primaryLink">view all</Link>
                </div>
                <div className="flex flex-col">
                    <DashboardCard messages={messages}/>
                </div>
            </div>}
        </div>
    )
}
