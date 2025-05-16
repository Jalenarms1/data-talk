import React from 'react'
import { TileType } from '../types/tile';
import { CiServer } from 'react-icons/ci';
import { TiFlowSwitch } from 'react-icons/ti';
import { GrConnect } from 'react-icons/gr';
import { FaReplyAll } from 'react-icons/fa6';
import { BiSitemap } from 'react-icons/bi';
import { RiStackFill } from 'react-icons/ri';

const TileIconComponent = ({type}: {type: TileType}) => {
    // let iconComp;
    switch (type) {
        case TileType.Server:
            return <CiServer className="text-3xl " />; 
            
        case TileType.Action:
            return <TiFlowSwitch className="text-3xl " />;
            
        case TileType.Middleware:
            return <GrConnect className="text-3xl " />;
            
        case TileType.Response:
            return <FaReplyAll className="text-3xl " />;
            
        case TileType.Database:
            return <RiStackFill className="text-3xl " />
            
        case TileType.Controller:
            return <BiSitemap className="text-3xl " />;
            
        default:
            console.log("not found", type);
            
            return <BiSitemap className="text-3xl " />;
            
            
    }

}

export default TileIconComponent
