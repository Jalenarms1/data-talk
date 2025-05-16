import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRotateLeft } from 'react-icons/fa6'
import ObjectsPanel from '../components/ObjectsPanel'
import { AiOutlineEllipsis } from 'react-icons/ai'
import DataTile from '../components/DataTile'
import DestinationTile from '../components/DestinationTile'
import { Destination, Destinations } from '../types/destinations'
import { Datasource, Datasources } from '../types/sources'
import DatasourceTile from '../components/DatasourceTile'
import ConnectionLine from '../components/ConnectionLine'
import TileBuilder from '../components/TileBuilder'
import CanvasTile from '../components/CanvasTile'
import { Coordinate, TCanvasTile, Tile, TileType } from '../types/tile'

const testDestinations: Destination[] = [
    {id: crypto.randomUUID(), label: "Users.xlsx", screenOffsetX: 200, screenOffsetY: 55, type: Destinations.Database, sources: ["id1"]},
    {id: crypto.randomUUID(), label: "Userfavorites.xlsx", screenOffsetX: 275, screenOffsetY: -200, type: Destinations["File"], sources: ["id2"]},

]

const testDatasources: Datasource[] = [
    {id: "id2", label: "User Favorites", screenOffsetX: 0, screenOffsetY: -100, type: Datasources["Database"]},
    {id: "id1", label: "Users", screenOffsetX: 50, screenOffsetY: -400, type: Datasources["API"]},

]

const testTiles: Tile[] = [
    {id: "24", label: "App Name", type: TileType.Server, createdAt: Date.now(), childTiles: [
        {id: "2424", label: "App Db", type: TileType.Database, createdAt: Date.now(), childTiles: []},
        {id: "2425", label: "Users", type: TileType.Controller, createdAt: Date.now(), childTiles: []}
    ]}
]


interface CanvasState {
    isDragging: boolean,
    dragStart: Coordinate,
    scale: number,
    posOffset: Coordinate,
    selectedTile: Tile | null,
    mainTile: Tile | null
}

const Canvas = () => {
    const screenRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLDivElement>(null)
    const [screenSize, setScreenSize] = useState({width: 0, height: 0})

    const [canvasState, setCanvasState] = useState<CanvasState>({
        isDragging: false,
        dragStart: {
            x: 0,
            y: 0
        },
        scale: 1,
        posOffset: {
            x: -5000,
            y: -5000
        },
        selectedTile: null,
        mainTile: testTiles[0]
    })
    const [ele, setEle] = useState({offsetX: 5000 + (screenRef.current ? screenRef.current.offsetWidth / 2 : 0), offsetY: 5000 + (screenRef.current ? screenRef.current.offsetHeight / 2 : 0)})
    const [destinations, setDestinations] = useState<Destination[]>(testDestinations)
    const [dataSources, setDataSources] = useState<Datasource[]>(testDatasources)
    const [tileCoordinates, setTileCoordinates] = useState<TCanvasTile>({
        [testTiles[0].id]: {x: 0, y: 0},
        "2424": {x: -200, y: -100},
        "2425": {x: 10, y: -200}
    })
    console.log(destinations);
    

    const handleMouseDown = (e: React.MouseEvent) => {
        setCanvasState(s => {
        s.isDragging = true
        s.dragStart.x = e.clientX
        s.dragStart.y = e.clientY
        return s
        })


    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!canvasState.isDragging) return;

        console.log("moving");

        const xDelta = e.clientX - canvasState.dragStart.x
        const yDelta = e.clientY - canvasState.dragStart.y

        console.log(canvasState.posOffset.x)
        console.log(canvasState.posOffset.y)
        console.log(canvasState.dragStart.x)
        console.log(canvasState.dragStart.y)

        canvasRef.current!.style.transform = `translate(${canvasState.posOffset.x}px, ${canvasState.posOffset.y}px) scale(${canvasState.scale})`

        setCanvasState(s => {
        s.posOffset.x += xDelta
        s.posOffset.y += yDelta
        s.dragStart.x = e.clientX
        s.dragStart.y = e.clientY
        return s
        })
        
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        setCanvasState(s => {
        s.isDragging = false
        return s
        })
    }

    useEffect(() => {
        if (screenRef.current) {
            setScreenSize({width: screenRef.current.offsetWidth, height: screenRef.current.offsetHeight})
        }
    }, [screenRef.current])

    return (
        <div ref={screenRef} className='w-full h-screen overflow-hidden bg-gradient-to-br from-white to-gray-300 relative'>
            <TileBuilder selectedTile={canvasState.selectedTile} close={() => setCanvasState((c) => {
                return {
                    ...c,
                    selectedTile: null
                }
            })} />
            <div className="flex fixed  z-50 gap-5 items-end overflow-hidden h-[92vh]">
                <ObjectsPanel mainTile={canvasState.mainTile} addDestination={(d: Destination) => {
                    console.log(d);
                    setDestinations((dst) => {
                        return [...dst, d]
                    })
                }} addDatasource={(d: Datasource) => {
                    console.log(d);
                    setDataSources((sources) => {
                        return [...sources, d]
                    })
                }} />

                <div className="flex flex-col pb-5">
                    <button onClick={() => setCanvasState(s => {
                        if (s.scale < 1) {
                            s.scale += 0.05
                            canvasRef.current!.style.transform = `translate(${canvasState.posOffset.x}px, ${canvasState.posOffset.y}px) scale(${canvasState.scale += 0.05})`

                        }

                        return s
                    })} className='border border-gray-700 bg-gray-800 rounded-t-md  text-white px-2 py-1 text-2xl cursor-pointer active:bg-gray-950'>+</button>
                    <button onClick={() => setCanvasState(s => {
                        if (s.scale > .5) {
                            s.scale -= 0.05

                            canvasRef.current!.style.transform = `translate(${canvasState.posOffset.x}px, ${canvasState.posOffset.y}px) scale(${canvasState.scale -= 0.05})`
                        }

                        return s
                    })} className='border border-gray-700 bg-gray-800   text-white px-2 py-1 text-2xl cursor-pointer active:bg-gray-950'>-</button>
                    <button onClick={() => setCanvasState(s => {
                        s.scale = 1
                        s.posOffset = {x: -5000, y: -5000}
                        s.dragStart = {x: 0, y:0}
                        canvasRef.current!.style.transform = `translate(-5000px, -5000px) scale(${1})`
                        return s
                    })} className='border border-gray-700 bg-gray-800  rounded-b-md text-white px-2 py-3 cursor-pointer active:bg-gray-950'>
                        <FaArrowRotateLeft className='text-sm' />

                    </button>
                
                </div>

            </div>

            <div className=" fixed right-10 top-20 bottom-5   z-50  flex flex-col items-end justify-between">
                <div className="flex items-center gap-2">
                    {/* <button className='cursor-pointer px-4 py-1 bg-gray-800 text-gray-300 active:opacity-60 rounded-sm border border-gray-800 shadow-sm shadow-gray-800'>Save</button> */}
                    <button className='cursor-pointer px-4 py-2 bg-gray-800  text-gray-300 active:opacity-60 rounded-sm border border-gray-800 shadow-sm shadow-gray-800'>
                        <AiOutlineEllipsis />

                    </button>
                </div>

               
            </div>
            <div 
                onDoubleClick={(e: React.MouseEvent) => setCanvasState({...canvasState, scale: canvasState.scale - 0.015})}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                ref={canvasRef} 
                className='cursor-grab overflow-hidden z-10 to-gray-600' 
                style={{
                width: "10000px",
                height: "10000px",
                transform: `translate(${canvasState.posOffset.x}px, ${canvasState.posOffset.y}px) scale(${canvasState.scale})`,
                backgroundImage: `radial-gradient(#4a5565 1px, transparent 1px)`,
                backgroundSize: `${30 / canvasState.scale}px ${30 / canvasState.scale}px`
                }}
            >
                {canvasState.mainTile && <div 
                    onMouseDown={(e: React.MouseEvent) => {
                        e.stopPropagation()
                    }}
                    onClick={() => {
                        setCanvasState(c => {
                            return {
                                ...c,
                                selectedTile: canvasState.mainTile
                            }
                        })
                    }}
                    className="z-50 absolute" style={{top: `${5000 + tileCoordinates[canvasState.mainTile.id].y + screenSize.height / 2}px`, left: `${5000 + tileCoordinates[canvasState.mainTile.id].x + screenSize.width / 2}px`}}>
                        <CanvasTile tile={canvasState.mainTile} isChild={false} />
                </div>}

                {canvasState.mainTile?.childTiles?.map(t => {
                    if (!tileCoordinates[t.id]) return null

                    return <div 
                    onClick={() => {
                        setCanvasState(c => {
                            return {
                                ...c,
                                selectedTile: t
                            }
                        })
                    }}
                    className="z-50 absolute" 
                    style={{top: `${5000 + tileCoordinates[t.id].y + screenSize.height / 2}px`, left: `${5000 + tileCoordinates[t.id].x + screenSize.width / 2}px`}}>
                        <CanvasTile tile={t} isChild={true}  />
                    </div>
                })}

                {canvasState.mainTile && <>
                    {canvasState.mainTile?.childTiles?.map(s => {
                        
                        if (!canvasState.mainTile || !tileCoordinates[s.id]) return null;

                        return <ConnectionLine 
                            x1={(5000 + tileCoordinates[canvasState.mainTile.id].x + screenSize.width / 2) + 66} 
                            y1={(5000 + tileCoordinates[canvasState.mainTile.id].y + screenSize.height / 2) + 66} 
                            x2={(5000 + tileCoordinates[s.id].x + screenSize.width / 2) + 66} 
                            y2={(5000 + tileCoordinates[s.id].y + screenSize.height / 2) + 66}
                        />
                    })}
                </>}

                
            </div>

        </div>
    )
}

export default Canvas
