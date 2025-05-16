import React from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { Tile, TileType } from '../types/tile'
import TileIconComponent from './TileIconComponent'
import ServerBuilder from './builders/ServerBuilder'

const TileBuilder = ({selectedTile, close}: {selectedTile: Tile | null, close: () => void}) => {
  let tileComponent;

  switch(selectedTile?.type) {
    case TileType.Server:
      tileComponent = <ServerBuilder />
      break;
    default:
      tileComponent = <p>None.</p>
  }

  
  return (
    <div className={`fixed right-0 ${selectedTile ? "w-[50vw]" : "w-0"}  h-[85vh] rounded-tl-md bottom-0 z-50 bg-gradient-to-b to-gray-300 from-gray-50 shadow-sm shadow-gray-600 transition-all`}>
        {selectedTile && <div className="w-full h-full relative px-16 p-8">
            <div 
            onClick={() => close()}
            className="absolute top-2 left-[-18px] bg-gray-900 px-1 py-6 rounded-tl-md rounded-bl-md rounded-tr-sm rounded-br-sm shadow-sm z-0 cursor-pointer">
                <IoChevronBack className='text-gray-400 text-md' />

            </div>
            <div className='flex flex-col gap-5'>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500 font-semibold">{selectedTile.type}</p>
                <div className="flex items-center gap-2 border-b border-gray-800 pb-1 text-gray-800">
                  <TileIconComponent type={selectedTile?.type} />
                  <p className='text-3xl font-bold'>{selectedTile.label}</p>

                </div>
                <div className="flex items-center gap-3 mt-5">
                  <button className='text-gray-800 font-medium cursor-pointer border-b pb-1 border-gray-300'>Configuration</button>
                  <button className='text-gray-500 active:text-gray-400 font-light cursor-pointer pb-1'>Security</button>
                  <button className='text-gray-500 active:text-gray-400 font-light cursor-pointer pb-1'>Settings</button>
                </div>

              </div>

              <div className="h-[65vh] w-full overflow-y-scroll pb-60">

                {/* <ServerBuilder /> */}
                {tileComponent}
              </div>
            </div>
        </div>}
        
        
    </div>
  )
}

export default TileBuilder
