import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  return (
    <div className="h-full">
        <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
            <CourseNavbar />
        </div>
        <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
            <CourseSidebar />
        </div>
        <main className="md:pl-80 pt-[80px] h-full">
        {children}
        </main>
    </div>
  );
};

export default CourseLayout;
