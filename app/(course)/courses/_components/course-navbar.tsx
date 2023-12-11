import { NavbarRoutes } from "@/components/navbar-routes"
import { CourseMobileSidebar } from "./course-mobile-sidebar"

export const CourseNavbar = () => {
    return(
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <CourseMobileSidebar />
            <NavbarRoutes />
        </div>
    )
}