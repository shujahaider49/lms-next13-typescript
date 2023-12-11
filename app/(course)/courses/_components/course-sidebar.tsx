"use client"

import { CourseSidebarItem } from "./course-sidebar-item"

export const CourseSidebar = () => {
    return(
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
            <div className="p-8 flex flex-col border-b">
                <h1 className="font-semibold">
                    Advance Web Development
                </h1>
            </div>
            <div className="flex flex-col w-full">
                <CourseSidebarItem />
            </div>
        </div>
    )
}