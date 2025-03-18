import React from 'react'
import Image from './Image'

const Search = () => {
  return (
    <div className='bg-inputGray flex py-2 px-4 items-center gap-4 rounded-full'>
         <Image path="icons/explore.svg" alt="search" width={16} height={16}/>
         <input type="text" placeholder='Search' className='outline-none bg-transparent placeholder:text-textGray'/>
    </div>
  )
}

export default Search