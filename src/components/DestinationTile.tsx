import React from 'react'
import { SiDatabricks, SiPurescript } from 'react-icons/si'
import { Destination, Destinations } from '../types/destinations'
import { BiSitemap } from 'react-icons/bi';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { TbNetwork } from 'react-icons/tb';

const DestinationTile = ({destination}: {destination: Destinations}) => {
    let iconComponent;    
  
    switch (destination) {
      case Destinations.Database:
        iconComponent = <SiDatabricks className="text-3xl text-gray-400" />;
        break;
  
      case Destinations.Webhook:
        iconComponent = <TbNetwork className="text-3xl text-gray-400" />; 
        break;
  
      case Destinations.File:
        iconComponent = <PiMicrosoftExcelLogoFill className="text-3xl text-gray-400" />;
        break;
  
      case Destinations.Script:
        iconComponent = <SiPurescript className="text-3xl text-gray-400" />;
        break;
  
      default:
        iconComponent = <BiSitemap className="text-3xl text-gray-400" />;
        break;
    }
  
    return (
      <div className='w-full min-w-28 h-28 bg-gray-950 flex flex-col justify-center items-center rounded-sm gap-4 shadow-sm shadow-pink-950'>
        {iconComponent} 
        <p className='text-gray-400'>{destination}</p> 
      </div>
    );
}

export default DestinationTile
