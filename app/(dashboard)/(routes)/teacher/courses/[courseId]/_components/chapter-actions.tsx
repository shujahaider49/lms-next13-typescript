"use client"

import ConfirmModal from "@/components/modals/confirm-modal"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const ChapterActions = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const onDelete = async () => {
        try{
            setIsLoading(true)
            toast.success("Chapter Deleted")
            router.refresh();
            router.push('/teacher/courses/coureId')
        }catch{
            toast.error('something went wrong')
        }finally{
            setIsLoading(false)
        }
    }
  return (
    <div className="flex items-center gap-x-2">
      <Button variant="outline" size="sm">
        Publish
      </Button>
      <ConfirmModal onConfirm={onDelete} >
      <Button size='sm'>
        <Trash className="h-4 w-4" />
      </Button>
      </ConfirmModal>
    </div>
  )
}

export default ChapterActions
