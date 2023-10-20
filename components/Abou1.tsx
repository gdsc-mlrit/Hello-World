import React from 'react'

const Abou1 = () => {
  return (
<div className="hidden md:flex md:flex-col md:min-h-screen  bg-black ">
    <div className='md:flex md:flex-row w-full bg-black'>
        <div className='w-full flex flex-col pt-4'>
            <div className=' h-auto p-6  pt-8 flex flex-row justify-start gap-4 pb-0 border-l-8 border-[rgb(140,254,62)]' >
              <div className="leading-[75px] lg:leading-[100px] ">
                <span className="pl-[3rem] text-[75px] lg:text-[100px] leading-[100px] font-bold text-white ">
                 Explore
                 <br />
                </span>
                <span className="pl-[2.9rem] text-[135px] lg:text-[180px] font-bold  text-limee">
                  Tech
                </span>
              </div>
              <div className="absolute p-0 left-[25rem] lg:left-[28rem] z-[0]">
              <svg className='lg:h-[333px] h-[150px]' viewBox="0 0 335 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M132.944 46.5556L167.5 12M98.3889 236.611L236.611 98.3889M167.5 323L202.056 288.444M245.25 288.444C256.706 288.444 267.693 283.894 275.793 275.793C283.894 267.693 288.444 256.706 288.444 245.25C288.444 233.794 283.894 222.807 275.793 214.707C267.693 206.606 256.706 202.056 245.25 202.056C233.794 202.056 222.807 206.606 214.707 214.707C206.606 222.807 202.056 233.794 202.056 245.25C202.056 256.706 206.606 267.693 214.707 275.793C222.807 283.894 233.794 288.444 245.25 288.444ZM89.75 132.944C101.206 132.944 112.193 128.394 120.293 120.293C128.394 112.193 132.944 101.206 132.944 89.75C132.944 78.2941 128.394 67.3074 120.293 59.2069C112.193 51.1064 101.206 46.5556 89.75 46.5556C78.2941 46.5556 67.3074 51.1064 59.2069 59.2069C51.1064 67.3074 46.5556 78.2941 46.5556 89.75C46.5556 101.206 51.1064 112.193 59.2069 120.293C67.3074 128.394 78.2941 132.944 89.75 132.944ZM55.1944 323C66.6503 323 77.637 318.449 85.7375 310.349C93.8381 302.248 98.3889 291.261 98.3889 279.806C98.3889 268.35 93.8381 257.363 85.7375 249.262C77.637 241.162 66.6503 236.611 55.1944 236.611C43.7386 236.611 32.7519 241.162 24.6514 249.262C16.5508 257.363 12 268.35 12 279.806C12 291.261 16.5508 302.248 24.6514 310.349C32.7519 318.449 43.7386 323 55.1944 323ZM279.806 98.3889C291.261 98.3889 302.248 93.8381 310.349 85.7375C318.449 77.637 323 66.6503 323 55.1944C323 43.7386 318.449 32.7519 310.349 24.6514C302.248 16.5508 291.261 12 279.806 12C268.35 12 257.363 16.5508 249.262 24.6514C241.162 32.7519 236.611 43.7386 236.611 55.1944C236.611 66.6503 241.162 77.637 249.262 85.7375C257.363 93.8381 268.35 98.3889 279.806 98.3889Z" stroke="#E9E9E9" stroke-width="23.9231" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
                
            </div>
            <div className='flex flex-row justify-between  px-0 pl-5'>
             <div className="p-16 pr-0 ">
                <div className="pb-4"> 
                  <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">Intro to </span><span className="text-slate-500 text-5xl font-normal font-['Google Sans'] leading-10"> </span><span className="text-white text-3xl lg:text-5xl font-medium font-['Google Sans'] leading-10">Computer Science</span>
                </div>
                <div className="pb-4">      
                  <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">Software Development Lifecycle</span>
                </div >
                <div className="pb-4">
                  <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">Various Computer Languages</span>
                </div>
                <div className="pb-4">
                <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10" >Generative AI</span>
                </div >
                <div className="pb-4">
                  <span className="text-white  text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">Open Source and Git</span>
                </div>
             </div>
             
             <div className="flex flex-col justify-center items-center px-0 p-8 bg-black">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden h-80 w-100' src="/assets/Reaper.png" alt="" />
                <div className="w-96 h-14 p-4 text-white text-center text-3xl lg:-4xl font-bold font-['Google Sans']">Adithya Vardhan</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-[rgb(140,254,62)] p-0 z-20 text-xl lg:text-2xl font-bold font-['Google Sans'] leading-10">Tech Lead, GDSC MLRIT<br/></span>
                    <span className="text-[rgb(235,235,235)] text-lg lg:text-xl font-normal font-['Google Sans'] leading-relaxed">Founder & CEO , HITO Tech Pvt Ltd.<br/>
                        Founder , CloudTax</span>
                </div>
             </div>
            </div>
        </div>
        <div className="flex items-center w-[48px] px-12 pt-[20rem] justify-center ">
            <p className="-rotate-90 text-[rgb(140,254,62)] text-6xl lg:text-8xl  font-bold font-['Google Sans']">SPEAKER</p>
        </div>
    </div>
    <div className='h-12 w-full bg-limee'>

    </div>
    
    </div>
  )
}

export default Abou1
