"use client"

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { ComboboxDemo } from '@/components/ui/combobox'

interface CategoryFormProps{
    initialData?:{
        category: string
    };
    courseId: string;
    options?: {label: string, value: string}[];
}

const formSchema = z.object({
    categoryId: z.string().min(1)
})

export const CategoryForm = ({initialData, courseId, options}: CategoryFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const toggleEdit = () => setIsEditing((current) => !current)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryId: initialData?.category
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
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex item-center justify-between'>
                Course Category
                <Button onClick={toggleEdit} variant='ghost'>
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                    <>
                    <Pencil className='h-4 w-4 mr-2' />
                    Edit Category
                    </>
                    )}
                </Button>
            </div>
            {isEditing && (  
                <p className={cn(
                    !initialData?.category && "text-slate-500 italic"
                )}>
                    {initialData?.category || "No Category"}
                    {isSubmitting}
                </p>
            )}
            {isEditing && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-4'>
                        <FormField 
                        control={form.control}
                        name='categoryId'
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <ComboboxDemo
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className='flex item-center gap-x-2'>
                            <Button type='submit' disabled={!isValid || isSubmitting}>
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}