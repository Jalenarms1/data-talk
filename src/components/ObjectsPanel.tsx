import React, { useState } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaArrowLeftLong, FaMagnifyingGlass } from 'react-icons/fa6'
import { GoFileZip, GoGear } from 'react-icons/go'
import { LuPanelLeftOpen, LuPanelRightOpen } from 'react-icons/lu'
import { MdOutlineAddBox } from 'react-icons/md'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import { SiDatabricks, SiPurescript } from 'react-icons/si'
import { TbNetwork } from 'react-icons/tb'
import { Datasource, Datasources } from '../types/sources'
import { Destination, Destinations } from '../types/destinations'
import { Tile, TILECHILDOPTIONS, TileType } from '../types/tile'
import ObjectTile from './ObjectTile'
import TileIconComponent from './TileIconComponent'
import { AiOutlineEllipsis } from 'react-icons/ai'

interface ObjectPanelProps {
    addDestination: (d: Destination) => void,
    addDatasource: (d: Datasource) => void,
    mainTile: Tile | null
}

const ObjectsPanel: React.FC<ObjectPanelProps> = ({addDestination, addDatasource, mainTile}) => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {

    }

  return (
    <div className={` h-full  bg-gradient-to-b from-white to-slate-300 z-50  border-r-2 border-gray-200 relative  flex flex-col justify-between gap-2 transition-all ${isOpen ? "w-96" : "w-32"}`}>
        <div className="flex flex-col p-5 gap-2 flex-1 mx-8">
            <div className={`flex items-center gap-2 text-gray-400 cursor-pointer ${isOpen ? "" : "justify-center"} `}>
                <FaArrowLeftLong />
                {isOpen && <p className="text-sm">My apps</p>}
            </div>
            {isOpen ? <div className="flex items-center justify-between">
                <p className='text-lg  font-light text-gray-900 font-title'>App Name</p>
                <LuPanelRightOpen onClick={() => setIsOpen(false)} className='text-gray-500 text-2xl active:text-gray-700' />

            </div> : (
                <div className="flex justify-center w-full">
                    <LuPanelLeftOpen onClick={() => setIsOpen(true)} className='text-gray-500 text-2xl active:text-gray-700' />

                </div>
                
            )}

            <div className='divider bg-slate-200'></div>
            {isOpen && <div className="flex bg-gray-200 p-1 px-2 items-center rounded-sm gap-2">
                <FaMagnifyingGlass className='text-gray-500' />
                <input type="text" className='w-full focus:outline-0 placeholder:text-sm placeholder:text-gray-500 text-gray-900 text-sm' placeholder='Search for an object or flow...' />
            </div>}

            <div className="flex flex-col h-[90vh] pb-80 overflow-auto">
                {/* {isOpen && <div className="flex flex-col mt-5 gap-2">
                    <p className="text-sm font-light text-gray-600 font-title">Destinations</p>
                    <div className="w-full grid grid-cols-2 gap-2">
                        {Object.values(Destinations).map((s) => (
                            <div onClick={() => addDestination({id: crypto.randomUUID(), screenOffsetX: 0, screenOffsetY: 0, type: s, label: "Unititled"})} className='cursor-pointer'>
                                <DestinationTile destination={s} />
                            
                            </div>
                        ))}
                    </div>
                </div>} */}
                {isOpen && <div className="flex flex-col">
                    <p className="text-sm font-light text-gray-800 font-title mt-5">Current</p>
                    <div className='flex items-center my-2 py-1 px-2 border border-gray-300 rounded-sm justify-between'>
                        <div className="flex items-center gap-2">
                            <TileIconComponent type={mainTile?.type ?? TileType.Server} />
                            <p className='text-sm'>{mainTile?.label}</p>
                        </div>
                        <AiOutlineEllipsis />
                    </div>

                </div>}

               {isOpen && <div className="flex flex-col mt-5 gap-2">
                    <p className="text-sm font-light text-gray-600 font-title">Objects</p>
                    <div className="w-full grid grid-cols-2 gap-2">
                        {/* {Object.values(Datasources).map((s) => (
                            <>
                                <div onClick={() => addDatasource({id: crypto.randomUUID(), screenOffsetX: 0, screenOffsetY: 0, type: s, label: "Unititled"})}>
                                    <DatasourceTile source={s} />

                                </div>
                            </>
                        ))} */}
                        {mainTile && TILECHILDOPTIONS[mainTile.type].map(opt => (
                            <div>
                                <ObjectTile type={opt}/>

                            </div>
                        ))}
                        {/* {Object.values(TileType).map((s) => (
                            <>
                                <div>
                                    <ObjectTile type={s}/>

                                </div>
                            </>
                        ))} */}
                    </div>
                </div>}

            </div>

        </div>

        {/* {isOpen ? <div className="flex gap-2 absolute bottom-0 w-full items-center justify-between border-t border-gray-800 pt-2 bg-gray-900 rounded-b-md">
            <div className="flex items-center gap-2 p-2">
                <div className='w-12 h-12 rounded-full bg-gray-400'></div>
                <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-300">
                        Jalenarms1
                    </p>
                    <p className="text-gray-600 text-xs">
                        jalenarms@outlook.com
                    </p>
                </div>

            </div>

            <GoGear className='text-gray-400 text-lg m-2' />
 
        </div> : (
            <div className="flex gap-2 absolute bottom-0 w-full items-center justify-center border-t border-gray-800 py-2 bg-gray-950 rounded-b-md">
                <div className='w-12 h-12 rounded-full bg-gray-400'></div>
            </div>
        )} */}
    </div>
  )
}

export default ObjectsPanel
