import React from 'react'
import { Categories } from './_components/categories'
import SearchInput from '@/components/search-input'
import CoursesList from '@/components/courses-list'

const SearchPage = () => {
  return (
    <>
    <div className='px-6 pt-6 md:hidden md:mb-0 block'>
      <SearchInput />
    </div>
    <div className="p-6">
      <Categories />
      <CoursesList />
    </div>
    </>
  )
}

export default SearchPage
