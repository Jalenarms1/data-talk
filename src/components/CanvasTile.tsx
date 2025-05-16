import React from 'react'
import { Datasource, Datasources } from '../types/sources';
import { SiDatabricks, SiPurescript } from 'react-icons/si';
import { TbNetwork } from 'react-icons/tb';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { BsUpload } from 'react-icons/bs';
import { BiSitemap } from 'react-icons/bi';
import { Destination, Destinations } from '../types/destinations';
import { TCanvasTile, Tile, TileType } from '../types/tile';
import { CiServer } from 'react-icons/ci';
import TileIconComponent from './TileIconComponent';

const CanvasTile = ({tile, isChild}: {tile: Tile, isChild: boolean}) => {
  let iconComponent;
  let sourceName; 
  let isSource;
  let isDestination;

  switch (tile.type) {
    case TileType.Server:
        iconComponent = <CiServer className="text-3xl text-gray-400" />; 
        sourceName = "Webhook"
        break;

    case TileType.Action:
        iconComponent = <PiMicrosoftExcelLogoFill className="text-3xl text-gray-400" />;
        sourceName = "File"
        break;
    default:
      iconComponent = <BiSitemap className="text-3xl text-gray-400" />;
      sourceName = 'Unknown Source'; 
      break;
  }

  return (
    <div className={`w-full min-w-28 h-28  ${!isChild ? "bg-gray-800 shadow-pink-500 text-gray-400" : "bg-gray-300 text-gray-900 shadow-cyan-900"} flex flex-col justify-center items-center rounded-sm gap-4 shadow-sm `}>
      <TileIconComponent type={tile.type} /> 
      <p className=''>{tile.label}</p> 
    </div>
  );
}


export default CanvasTile
