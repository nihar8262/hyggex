import React from 'react'

export const Options = () => {
  return (
    <div className='flex justify-center gap-10 mt-24 '>
        <div>
        <button className='font-bold text-[#06286E] '>Study</button>
        <div className='bg-[#06286E] h-[1px] mt-[4px]'></div>
        </div>
        <button className='text-slate-500'>Quiz</button>
        <button className='text-slate-500'>Test</button>
        <button className='text-slate-500'>Game</button>
        <button className='text-slate-500'>Others</button>
    </div>
  )
}
