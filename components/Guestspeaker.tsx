import React from 'react'

const Guestspeaker = () => {
  return (
    <div className='flex flex-col justify-center items-center p-8 bg-black min-h-screen'>
     <div className='flex flex-col'> 
        <div className='flex flex-col justify-center'>
            <p className=' text-limee  text-center text-[50px] md:text-[80px] lg:text-[100px] font-bold'>Guest Speaker</p>
        
        </div>
        <div className='flex flex-col rounded-full justify-center items-center'>
            <img className='rounded-full  border-4 border-limee border-opacity-90' src="/assets/Guest.jpeg" alt="" width={250} />
        </div>
        <div>
            <p className='text-white  text-center text-[30px] md:text-[60px] lg:text-[80px]  font-bold'>AFNAN ABDUL VASAY</p>
        </div>
        <div className=''>
            <p className='text-limee text-center text-[20px] md:text-[40px] lg:text-[60px] font-light'>GITHUB CAMPUS EXPERT</p>
        </div>
    </div>
    </div>
  )
}

export default Guestspeaker
