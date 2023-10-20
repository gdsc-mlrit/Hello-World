import React from 'react'

const Speaker = () => {
  return (
    <div className='lg:hidden md:hidden w-full px-4 flex flex-col gap-8 py-4'>
        <div className="flex flex-col justify-center items-center p-8 py-24 relative   rounded-xl ">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden bg-[#b7b7b7] h-50 w-60' src="/assets/Dine.jpg" alt="" />
                <div className="w-96 h-14 p-4 text-slate-700 text-center  text-3xl font-bold font-['Google Sans']">Dinesh Nalam</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-slate-700 p-0 text-xl font-bold font-['Google Sans'] leading-10">Lead, GDSC MLRIT<br/></span>
                    <span className="text-slate-700  text-lg text- font-normal font-['Google Sans'] leading-relaxed">EY Scholarship Finalist<br/>
                        State Level Pitch Fest Winner</span>
                </div>
                <div className="flex absolute right-0 w-[48px] px-4 justify-center bg-white">
                    <p className="-rotate-90  text-slate-700  text-4xl opacity-60 font-bold font-['Google Sans']">STARTUPS</p>
                </div>
        </div>
        <div className="flex flex-col justify-center items-center p-8 py-24 relative  rounded-xl">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden bg-[#b7b7b7] h-50 w-60' src="/assets/Sherlock.jpg" alt="" />
                <div className="w-96 h-14 p-4 text-slate-700 text-center  text-3xl font-bold font-['Google Sans']">Sri Nikhil</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-slate-700 p-0 text-xl font-bold font-['Google Sans'] leading-10">Design Lead, GDSC MLRIT<br/></span>
                    <span className="text-slate-700 text-lg font-normal font-['Google Sans'] leading-relaxed">Most Valuable Student, HoneSt.<br/>
                    UI/UX Hyderabad Community</span>
                </div>
                <div className="flex absolute right-0 w-[48px] px-4 justify-center bg-white">
                    <p className="-rotate-90  text-slate-700  text-4xl opacity-60 font-bold font-['Google Sans']">DESIGN</p>
                </div>
        </div>
        <div className="flex flex-col justify-center items-center p-8 py-24 relative rounded-xl">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden  h-60 w-70' src="/assets/Reaper.png" alt="" />
                <div className="w-96 h-14 p-4  text-slate-700 text-center text-3xl font-bold font-['Google Sans']">Adithya Vardhan</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-slate-700 p-0 text-xl font-bold font-['Google Sans'] leading-10">Tech Lead, GDSC MLRIT<br/></span>
                    <span className="text-slate-700 text-lg font-normal font-['Google Sans'] leading-relaxed">Founder & CEO, HITO Tech Pvt Ltd<br/>
                    Founder, CloudTax</span>
                </div>
                <div className="flex absolute right-0 w-[48px] px-0 flex-column justify-center bg-white">
                    <p className="-rotate-90  text-slate-700  text-4xl opacity-60 font-bold font-['Google Sans']">TECH</p>
                </div>
        </div>
    </div>
  )
}

export default Speaker
