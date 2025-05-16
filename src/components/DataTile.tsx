import React from 'react'
import { BiSitemap } from 'react-icons/bi'

const DataTile = () => {
  return (
    <div className='w-full min-w-28 h-28 bg-gray-900 flex flex-col justify-center items-center rounded-sm gap-4 shadow-sm shadow-red-900'>
        <BiSitemap className='text-3xl text-gray-400' />
        <p className='text-gray-400'>Destination</p>
    </div>
  )
}

export default DataTile
