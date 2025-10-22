import React from 'react'
import Card from '../components/cards';

const about = () => {
  return (
    <div
      className='w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 pt-24 text-center text-white relative overflow-hidden'
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(160, 255, 143, 0.095) 0%, rgba(160, 255, 143, 0.032) 40%, transparent 70%),
          radial-gradient(circle at 80% 20%, rgba(160, 255, 143, 0.095) 0%, rgba(160, 255, 143, 0.032) 40%, transparent 70%),
          #000
        `,
      }}
    >
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-green-300 mb-6 sm:mb-8'>About</h1>     
      <p className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-neutral-300 max-w-3xl px-2'>
        Building the future of <span className='font-semibold text-green-300'>technology education</span> and <span className='font-semibold text-green-300'>innovation</span>
      </p>
      <div className='w-4/5 sm:w-3/4 md:w-1/2 h-1 rounded-full mb-6 sm:mb-8 bg-gradient-to-r from-green-300 to-orange-400'></div>
      <p className='text-lg sm:text-xl md:text-2xl italic mb-6 sm:mb-8 mt-4 w-full font-light max-w-4xl px-2'>
        "We believe technology should be <span className='text-green-300 font-semibold'>accessible</span>, <span className='text-green-300 font-semibold'>collaborative</span>, and <span className='text-green-300 font-semibold'>transformative.</span><br className="hidden sm:block" />
        <span className="block sm:inline"> </span>GeekRoom is where ambitious minds converge to shape tomorrow's innovations."
      </p>

      <button className="cursor-pointer mt-4 mb-6 sm:mb-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-950/80 to-green-950/20 px-4 sm:px-6 py-3 text-sm sm:text-base font-bold text-green-300 hover:from-green-950 transition-all">
      <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(160,255,143,0.7)]"></span>Join the Innovation
      </button>

      <span className='mb-6 sm:mb-8 text-sm sm:text-base text-gray-400'>Free workshops • Projects • Community</span>
      <div className='mt-20 sm:mt-32 md:mt-56 w-full flex justify-center mb-20 sm:mb-28 md:mb-36 px-2'>
        <Card />
      </div>
      
    </div>
  )
}

export default about