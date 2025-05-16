import React, { Dispatch, SetStateAction } from 'react'
import canvasImg from "../assets/canvas-img.png"
import { Button } from '../components/ui/button'
import logo from "../assets/etxl-logo.png"
import { FaLock, FaStar } from 'react-icons/fa6'
import { CiServer } from 'react-icons/ci'
import { BsDatabaseFill } from 'react-icons/bs'
import { VscServerEnvironment } from "react-icons/vsc";
import { LuLogs } from 'react-icons/lu'
import { RiCalendarScheduleLine } from 'react-icons/ri'
import { MdInsertChartOutlined } from 'react-icons/md'



const LandingPage = ({setIsShowingLogin, setIsShowingSignup}: {setIsShowingLogin: Dispatch<SetStateAction<boolean>>, setIsShowingSignup: Dispatch<SetStateAction<boolean>>}) => {

  return (
    <div className='flex flex-col justify-end items-center  bg-gradient-to-b from-gray-50 to-cyan-100/50'>
        
        <div className="flex flex-col  gap-16 justify-center items-center h-[80vh] pb-10">
          <div className="flex flex-col gap-5 items-center justify-center">
              <p className='text-5xl font-bold w-3/5 text-center'>Build REST APIs Faster. Smarter. Without the Hassle.</p>
              <img src={logo} alt="logo" className='w-10' />
              <p className='text-sm text-gray-500 text-center font-semibold w-2/5'>Design, test, and deploy APIs in minutes — all from one intuitive interface. Whether you're building for internal tools or public endpoints, our platform handles the complexity so you can focus on what matters: shipping.</p>
              <div className="flex items-center gap-2">
                <Button onClick={() => setIsShowingSignup(true)}>Get started</Button>
                <Button variant={"outline"} className=''>Learn more</Button>
              </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto rounded-sm p-1 bg-gray-200 shadow-sm shadow-gray-500">
            <img src={canvasImg} alt="canvas-img" className="rounded-sm" />
        </div>

        <div className=" h-screen w-full">
          <div className='h-screen container mx-auto flex flex-col items-center gap-5 pt-20 '>
            <div className="flex items-center bg-cyan-200 px-2 py-1 rounded-md gap-2">
              <FaStar className='text-yellow-500' />

              <p className=" font-semibold  text-cyan-800">Features</p>

            </div>
            <p className="text-4xl font-bold">All-in-one backend API for your application</p>
            <p className='text-sm text-gray-500 w-1/2 text-center'>Skip the setup and start building. Handle routes, data, and logic in one place—no extra tools or boilerplate needed</p>
            <div className="grid grid-cols-3 mt-20 w-full gap-10 px-20">
              <div className="col-span-1 flex flex-col gap-2 h-48 w-full rounded-md p-5">
                <CiServer className='text-2xl' />
                <p className="text-gray-800 font-semibold text-xl">Servers</p>
                <p className='text-gray-500'>Create and manage servers with automatic integration and deployment on demand</p>
              </div>
              <div className="col-span-1 flex flex-col gap-2 h-48 w-full rounded-md p-5">
                <BsDatabaseFill className='text-2xl' />
                <p className="text-gray-800 font-semibold text-xl">Data</p>
                <p className='text-gray-500'>Create a database schema using a drag-and-drop tool and connect it to your servers</p>
              </div>
              <div className="col-span-1 flex flex-col gap-2 h-48 w-full rounded-md p-5">
                <FaLock className='text-2xl' />
                <p className="text-gray-800 font-semibold text-xl">Authentication</p>
                <p className='text-gray-500'>Add user authentication and role-based access control to any endpoint or route group</p>
              </div>
              <div className="col-span-1 flex flex-col gap-2 h-48 w-full rounded-md p-5">
                <LuLogs className='text-2xl' />
                <p className="text-gray-800 font-semibold text-xl">Logs</p>
                <p className='text-gray-500'>Monitor incoming requests, view detailed logs and get alerted when something goes wrong</p>
              </div>
              <div className="col-span-1 flex flex-col gap-2 h-48 w-full rounded-md p-5">
                <VscServerEnvironment className='text-2xl' />
                <p className="text-gray-800 font-semibold text-xl">Environments</p>
                <p className='text-gray-500'>Create environments to test new deployments before updating your production server</p>
              </div>
              <div className="col-span-1 flex flex-col gap-2 h-48 w-full rounded-md p-5">
                <MdInsertChartOutlined className='text-2xl' />
                <p className="text-gray-800 font-semibold text-xl">Reports</p>
                <p className='text-gray-500'>Turn raw data into actionable insights with customizable reports with pre-built charts and graphs</p>
              </div>

            </div>
          </div>

        </div>
    </div>
  )
}

export default LandingPage
