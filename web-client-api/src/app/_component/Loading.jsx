import React from 'react'

function Loading() {
  return (
    <div className='flex flex-col fixed mt-50'>
      <div className="flex row-1 loader inset-0 justify-center relative">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
      <div className="row-2 mt-7 text-rose-600 text-2xl font-bold relative" style={{ textShadow: "0 0 6px hsl(347, 77%, 50%)" }}>Loading ...</div>
    </div>
  )
}

export default Loading