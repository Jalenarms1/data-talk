import React, { useRef, useState } from 'react'



const App = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [canvasState, setCanvasState] = useState({
    isDraggin: false,
    dragStart: {
      x: 0,
      y: 0
    },
    scale: 1,
    posOffset: {
      x: -2500,
      y: -2500
    }
  })

  const handleMouseDown = (e: React.MouseEvent) => {
    setCanvasState(s => {
      s.isDraggin = true
      s.dragStart.x = e.clientX
      s.dragStart.y = e.clientY
      return s
    })


  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canvasState.isDraggin) return;

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
      s.isDraggin = false
      return s
    })
  }

  return (
    <div className='w-full min-h-screen overflow-hidden bg-radial from-black to-slate-950'>
      <div 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={canvasRef} 
        className='cursor-grab overflow-hidden' 
        style={{
          width: "5000px",
          height: "5000px",
          transform: `translate(${canvasState.posOffset.x}px, ${canvasState.posOffset.y}px) scale(${canvasState.scale})`,
          backgroundImage: `radial-gradient(#3f3f46 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      >

      </div>
    </div>
  )
}

export default App
