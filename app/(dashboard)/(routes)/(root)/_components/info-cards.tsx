import { IconBadge } from "@/components/icon-badge"
import { LucideIcon } from "lucide-react";


interface InfoCardsProps{
    variant?: "default" | "success";
    label: string;
    Icon: LucideIcon;
    courses: string;
}

export const InfoCards = ({
    variant,
    Icon: icon,
    label,
    courses
}: InfoCardsProps) => {
    return(
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <IconBadge 
            variant={variant}
            icon={icon}
            />
            <div>
                <p className="font-medium">
                    {label}
                </p>
                <p className="text-gray-500 text-sm">
                    {courses}
                </p>
            </div>
        </div>
    )
}