"use client"

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Pencil, PlusCircle, ImageIcon } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { FileUpload } from '@/components/file-upload'

interface AttachmentFormProps{
    initialData?:{
        attachment: string
    };
    courseId: string;
}

const formSchema = z.object({
    url: z.string().min(1),
})

export const AttachmentForm = ({initialData, courseId}: AttachmentFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const toggleEdit = () => setIsEditing((current) => !current)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            url: initialData?.attachment || ""
        } 
    })

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            toast.success('Course Updated')
            toggleEdit();
            router.refresh()
        }catch{
            toast.error('something went wrong')
        }
    }


    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Attachment
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a file
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
        {!initialData?.attachment && (
          <p className='text-sm mt-2 text-slate-500 italic'>
            No Attachments yet
          </p>
        )}
        </>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Add anything your student might need to complete the course.
          </div>
        </div>
      )}
    </div>
    )
}