import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import React from 'react'
import { LuMinus } from 'react-icons/lu'
import { MdOutlineAdd } from 'react-icons/md'
import { PiWarningCircleLight } from 'react-icons/pi'
import { Button } from '../ui/button'

const ServerBuilder = () => {
  return (
    <div className="flex flex-col gap-10 w-96 ">
        <div className="flex flex-col gap-1">
            <p className='text-sm text-gray-500'>Root URL</p>
            <p className='w-full p-2 bg-gray-300 text-gray-500 rounded-sm text-sm'>http://app-name.localhost:4545</p>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <p className="text-sm text-gray-500">Allowed domains</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <PiWarningCircleLight className='text-lg text-red-500 ml-2 mr-2' />
                            </TooltipTrigger>
                            <TooltipContent className=' ml-36'>
                                <p className='text-red-500 rounded-sm w-40 text-xs bg-gray-100 text-center p-2 shadow-sm shadow-gray-300'>All domains are allowed to make requests to this server</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>


            <div className="flex items-center gap-2">
                <div className='text-sm p-2 bg-white shadow-sm shadow-gray-400 rounded-sm w-full relative'>
                <p>All</p>

                </div>
                <div className='px-2 flex items-center gap-2'>
                <LuMinus className='text-gray-500 text-base text-center' />
                <MdOutlineAdd className='text-lg text-gray-500' />

                </div>

            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-sm text-gray-500">Allowed headers</p>
                
            </div>

            <div className="flex items-center gap-2">
                <div className='text-sm p-2 bg-white shadow-sm shadow-gray-400 rounded-sm w-full relative'>
                <p>Content-Type</p>

                </div>
                <div className='px-2 flex items-center gap-2'>
                <LuMinus className='text-gray-500 text-base text-center' />
                <MdOutlineAdd className='text-lg text-gray-500' />

                </div>

            </div>
            <div className="flex items-center gap-2">
                <div className='text-sm p-2 bg-white shadow-sm shadow-gray-400 rounded-sm w-full relative'>
                <p>Authorization</p>

                </div>
                <div className='px-2 flex items-center gap-2'>
                <LuMinus className='text-gray-500 text-base text-center' />
                <MdOutlineAdd className='text-lg text-gray-500' />

                </div>

            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-sm text-gray-500">Allowed methods</p>
                
            </div>

            <div className="flex items-center gap-2">
                <div className='text-sm p-2 bg-white shadow-sm shadow-gray-400 rounded-sm w-full relative'>
                <p>GET</p>

                </div>
                <div className='px-2 flex items-center gap-2'>
                <LuMinus className='text-gray-500 text-base text-center' />
                <MdOutlineAdd className='text-lg text-gray-500' />

                </div>

            </div>
            <div className="flex items-center gap-2">
                <div className='text-sm p-2 bg-white shadow-sm shadow-gray-400 rounded-sm w-full relative'>
                <p>POST</p>

                </div>
                <div className='px-2 flex items-center gap-2'>
                <LuMinus className='text-gray-500 text-base text-center' />
                <MdOutlineAdd className='text-lg text-gray-500' />

                </div>

            </div>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-sm text-gray-500">Content type</p>
                
            </div>

            <div className="flex items-center gap-2">
                <div className='text-sm p-2 bg-white shadow-sm shadow-gray-400 rounded-sm w-full relative'>
                <p>application/json</p>

                </div>
                <div className='px-2 flex items-center gap-2'>
                <LuMinus className='text-gray-500 text-base text-center' />
                <MdOutlineAdd className='text-lg text-gray-500' />

                </div>

            </div>
        </div>
    </div>
  )
}

export default ServerBuilder
