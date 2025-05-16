import React, { Dispatch, SetStateAction } from 'react'
import logo from "../assets/etxl-logo.png"
import { GoGear } from 'react-icons/go'
import { useUser } from '../context/userContext'
import { Button } from './ui/button'


const Navbar = ({setIsShowingLogin, setIsShowingSignup}: {setIsShowingLogin: Dispatch<SetStateAction<boolean>>, setIsShowingSignup: Dispatch<SetStateAction<boolean>>}) => {
    const {currUser} = useUser()

  return (
    <div className="w-full bg-gradient-to-r flex gap-2   items-center justify-between from-white to-slate-200 border-b border-gray-300 z-[99] pl-5">

        <div className="flex items-center gap-2 mx-8">
            <img src={logo} alt="" className='w-10 right-0 z-0' />
            <div className="flex flex-col ">
                <p className=" text-gray-900 font-extralight text-xl font-title">RESTStop</p>
                {/* <p className='text-gray-500 text-sm font-app'>Automated Pipeline Builder</p> */}
            
            </div>
            {/* <button className='text-gray-100 cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md active:bg-gray-800'>Logout</button> */}
        </div>
        <div className="flex flex-col mx-8 p-3">
          {currUser ? <div className="flex gap- items-center justify-between border-t border-gray-800  rounded-b-md">
            <div className="flex items-center gap-2 ">
                <div className='w-12 h-12 rounded-full bg-gray-400'></div>
                <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-900">
                        Jalenarms1
                    </p>
                    <p className="text-gray-600 text-xs">
                        jalenarms@outlook.com
                    </p>
                </div>

            </div>
  
            <GoGear className='text-gray-400 text-lg m-2' />
    
            </div> : 
            <div className='flex items-center gap-2'>
                <Button onClick={() => setIsShowingLogin(true)} variant={"ghost"}>Log in</Button>
                <Button onClick={() => setIsShowingSignup(true)} variant={"default"}>Get started</Button>
            </div>}
        </div>

    </div>
  )
}

export default Navbar
