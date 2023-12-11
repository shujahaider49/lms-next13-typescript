"use client"

import{
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode
} from 'react-icons/fc'
import { FaHandHoldingMedical } from "react-icons/fa6";




export const Categories = () => {
    const items = [
        {
            title: "Music",
            icon: <FcMusic />
        },
        {
            title: "Photography",
            icon: <FcOldTimeCamera />
        },
        {
            title: "Fitness",
            icon: <FcSportsMode />
        },
        {
            title: "Computer Science",
            icon: <FcMultipleDevices />
        },
        {
            title: "Filming",
            icon: <FcFilmReel />
        },
        {
            title: "Engineering",
            icon: <FcEngineering />
        },
        {
            title: "Accounting",
            icon: <FcSalesPerformance />
        },
        {
            title: "Medical",
            icon: <FaHandHoldingMedical />
        },
    ]
    return(
        <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
            {items.map((item) => (
                <div key={item.title} className=''>
                    <div className='flex justify-center items-center gap-x-1 py-2 px-3 text-sm border border-slate-200 rounded-full hover:border-sky-700 transition cursor-pointer truncate'>
                   <p className='text-2xl'>{item.icon}</p>
                    <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}