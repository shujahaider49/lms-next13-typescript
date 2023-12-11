import CoursesList from "@/components/courses-list";
import { auth } from "@clerk/nextjs"
import { CheckCircle, Clock } from "lucide-react";
import { redirect } from "next/navigation";
import { InfoCards } from "./_components/info-cards";


export default function Dashboard() {
  const {userId} = auth();

  if(!userId){
    return redirect('/');
  }
  return (
    <>
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <InfoCards 
         Icon={Clock}
         label="In Progress"
         courses="0"
         />
         <InfoCards 
         Icon={CheckCircle}
         label="Completed"
         variant="success"
         courses="2"
         />
      </div>
      <CoursesList  />
    </div>
    </>
  )
}
