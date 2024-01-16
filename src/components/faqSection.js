import React from 'react'
import { FaChevronDown} from "react-icons/fa";

export const FaqSection = () => {
  return (
    <div className='flex flex-col ml-[124px] mt-[135px]'>
        <div>
            <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]'>FAQ</h1>
        </div>
        <div className='w-[850px]'>
            <div className=' mt-16 flex border-[#217EEC] items-center justify-between border-2 p-4 rounded-lg'>
            <p >Can education flashcards be used for all age groups?</p>
            <FaChevronDown color='grey'/>
            </div>
            <div className='mt-16 flex border-[#217EEC] items-center justify-between border-2 p-4 rounded-lg'>
            <p>How do education flashcards work?</p>
            <FaChevronDown color='grey'/>
            </div>
            <div className='mt-16 mb-20 flex border-[#217EEC] items-center justify-between border-2 p-4 rounded-lg'>
            <p>Can education flashcards be used for test preparation?</p>
            <FaChevronDown color='grey'/>
            </div>

            

        </div>
    </div>
  )
}
