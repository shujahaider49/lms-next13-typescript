"use client"

import { cn } from "@/lib/utils"
import { Lock, PlayCircle } from "lucide-react"
import { useRouter } from "next/navigation"


export const CourseSidebarItem = () => {
    const router = useRouter();
    const Icon = [
        {
            icon: <PlayCircle />,
            label: "Introduction"
        },
        {
            icon: <Lock />,
            label: "Getting Started"
        },
        {
            icon: <Lock />,
            label: "Wrapping Up"
        },
        {
            icon: <Lock />,
            label: "Outro"
        },
    ]
    const onClick = () => {
        router.push('/courses/chapters')
    }
    return (
        <button
        onClick={onClick}
        className={cn(
            "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6"
        )}
        >
            <div>
                {Icon.map((symbol) => (
                    <div key={symbol.label} className="flex items-center gap-x-2 py-4 transition-all hover:text-slate-600 hover:bg-slate-300/20">
                        <p>{symbol.icon}</p>
                        <p>{symbol.label}</p>
                    </div>
                ))}
            </div>
        </button>
    )
}