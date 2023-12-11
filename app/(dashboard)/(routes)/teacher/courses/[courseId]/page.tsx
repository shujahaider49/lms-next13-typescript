import { IconBadge } from '@/components/icon-badge';
import { auth } from '@clerk/nextjs'
import { CircleDollarSign, File, LayoutDashboard, ListIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'
import { TitleForm } from './_components/title-form';
import { DescriptionForm } from './_components/description-form';
import { ImageForm } from './_components/image-form';
import { CategoryForm } from './_components/category-form';
import { PriceForm } from './_components/price-form';
import { AttachmentForm } from './_components/attachment-form';
import { ChapterForm } from './_components/chapters-form';
import Banner from '@/components/banner';
import ChapterActions from './_components/chapter-actions';

const CourseIdPage = () => {
    const {userId} = auth();

    if(!userId){
        return redirect("/")
    }
  return (
    <>
    <Banner 
    variant="warning"
    label='This Chapter is unpublished. it will not be visible in the course'
    />
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-y-2'>
            <h1 className='text-2xl font-medium'>
                Course Setup
            </h1>
            <span className='text-sm text-slate-700'>
                Complete all fields (1/5)
            </span>
        </div>
        <ChapterActions />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 '>
        <div>
            <div className='flex items-center gap-x-2'>
                <IconBadge icon={LayoutDashboard} />
                <h2>
                    Customize your course
                </h2>
            </div>
            <TitleForm 
            // initialData={userId}
            courseId=""
            />
            <DescriptionForm 
            // initialData={userId}
            courseId=""
            />
            <ImageForm 
            // initialData={userId}
            courseId=""
            />
            <CategoryForm 
            // initialData={userId}
            courseId=""
            // options={}
            />
        </div>
        <div className='space-y-6'>
          <div>
            <div className='flex item-center gap-x-2'>
              <IconBadge icon={ListIcon} />
              <h2 className='text-xl'>
                Course Chapter
              </h2>
            </div>
            <div>
            <ChapterForm 
            // initialData={userId}
            courseId=""
            />
            </div>
          </div>
          <div>
            <div className='flex item-center gap-x-2'>
              <IconBadge icon={CircleDollarSign} />
              <h2 className='text-xl'>
              Sell your course
              </h2>
            </div>
            <PriceForm 
            // initialData={course}
            courseId=""
            />
          </div>
          <div>
          <div className='flex item-center gap-x-2'>
              <IconBadge icon={File} />
              <h2 className='text-xl'>
              Resources & Attachments
              </h2>
            </div>
            <AttachmentForm 
            // initialData={userId}
            courseId=""
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CourseIdPage
