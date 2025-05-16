import React from 'react'
import { Datasource, Datasources } from '../types/sources'
import { BiSitemap } from 'react-icons/bi';
import { SiDatabricks } from 'react-icons/si';
import { TbNetwork } from 'react-icons/tb';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { CgWebsite } from 'react-icons/cg';
import { BsUpload } from 'react-icons/bs';
import { Destinations } from '../types/destinations';

const DatasourceTile = ({source}: {source: Datasources}) => {
  let iconComponent;
  let sourceName = source.toString(); 

  switch (source) {
    case Datasources.Database:
      iconComponent = <SiDatabricks className="text-3xl text-gray-400" />;
      sourceName = 'Database'; 
      break;

    case Datasources.API:
      iconComponent = <TbNetwork className="text-3xl text-gray-400" />; 
      sourceName = 'API'; 
      break;

    case Datasources.Filepath:
      iconComponent = <PiMicrosoftExcelLogoFill className="text-3xl text-gray-400" />;
      sourceName = 'Filepath'; 
      break;

    case Datasources.Import:
      iconComponent = <BsUpload className="text-3xl text-gray-400" />;
      sourceName = 'Import';
      break;

    default:
      iconComponent = <BiSitemap className="text-3xl text-gray-400" />;
      sourceName = 'Unknown Source'; 
      break;
  }

  return (
    <div className='w-full min-w-28 h-28 bg-gray-800 flex flex-col justify-center items-center rounded-sm gap-4 shadow-sm shadow-cyan-900'>
      {iconComponent} 
      <p className='text-gray-400'>{source}</p> 
    </div>
  );
}

export default DatasourceTile
