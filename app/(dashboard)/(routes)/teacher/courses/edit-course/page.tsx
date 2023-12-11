import { IconBadge } from "@/components/icon-badge";
import { auth } from "@clerk/nextjs"
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChapterTitle } from "./_components/chapter-title-form";
import { ChapterDescription } from "./_components/chapter-description-form";
import { ChapterAccessForm } from "./_components/chapter-access-form";
import { ChapterVideo } from "./_components/chapter-video-form";
import ChapterActions from "../[courseId]/_components/chapter-actions";

const EditCourse = async({
    params
}: {
    params: {courseId: string, chapterId: string}
}) => {
    const {userId} = auth();

    if(!userId){
        return redirect('/')
    }
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="w-full">
            <Link 
            href="/teacher/courses/courseId"
            className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Chapter Creation
                    </h1>
                    <span className="text-sm text-slate-700">
                        Complete all fields 1/3
                    </span>
                </div>
                <ChapterActions />
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"> 
      <div className="space-y-4">
        <div>
            <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">
                    Customize your chapter
                </h2>
            </div>
            <ChapterTitle 
            // initialData={}
            courseId=""
            chapterId=""
            />
            <ChapterDescription 
            // initialData={chapter}
            courseId=""
            chapterId=""
            />
        </div>
        <div>
            <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">
                    Access Settings
                </h2>
            </div>
            <ChapterAccessForm 
            // initialData={chapter}
            courseId=""
            chapterId=""
            />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-2">
            <IconBadge icon={Video} />
            <h2 className="text-xl">
                Add a video
            </h2>
        </div>
        <ChapterVideo 
        // initialData={}
        courseId=""
        />
      </div>
      </div>
    </div>
  )
}

export default EditCourse
