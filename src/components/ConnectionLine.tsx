import React from 'react'

interface ConnectionLineProps {
  x1: number,
  y1: number,
  x2: number,
  y2: number
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({x1, y1, x2, y2}) => {
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI

  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${y1}px`,
    left: `${x1}px`,
    width: `${distance}px`,
    height: '3px', // Adjust line thickness as needed
    transformOrigin: '0 0', // Rotate around the start point
    transform: `rotate(${angle}deg)`,
    pointerEvents: 'none', // Optional: prevents the line from interfering with clicks on elements
  };

  return <div style={lineStyle} className='bg-gradient-to-l from-transparent to-pink-500'></div>;
}

export default ConnectionLine
