import React from 'react'
import { TileType } from '../types/tile';
import { CiServer } from 'react-icons/ci';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { BiSitemap } from 'react-icons/bi';
import { TiFlowSwitch } from 'react-icons/ti';
import { GrConnect } from 'react-icons/gr';
import { FaReplyAll } from 'react-icons/fa6';
import TileIconComponent from './TileIconComponent';

const ObjectTile = ({type}: {type: TileType}) => {
    return (
    <div className='w-full min-w-28 h-28 bg-gray-800 flex flex-col text-gray-400 justify-center items-center rounded-sm gap-4 shadow-sm shadow-pink-950'>
        <TileIconComponent type={type} /> 
        <p className=''>{type}</p> 
    </div>
    );
}

export default ObjectTile
