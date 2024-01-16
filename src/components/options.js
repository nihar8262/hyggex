import React from 'react'

export const Options = () => {
  return (
    <div className='flex justify-center gap-10 mt-24 '>
        <div>
        <p className='font-bold text-[#06286E] '>Study</p>
        <div className='bg-[#06286E] h-[1px] mt-[4px]'></div>
        </div>
        <p className='text-slate-500'>Quiz</p>
        <p className='text-slate-500'>Test</p>
        <p className='text-slate-500'>Game</p>
        <p className='text-slate-500'>Others</p>
    </div>
  )
}
