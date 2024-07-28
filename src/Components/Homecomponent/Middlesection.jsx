import React from 'react'

function Middlesection() {
  return (
    <>
    <div><h1 className='text-3xl m-10 flex justify-center'><b>EXCULSIVE FOR YOU</b></h1>
    <img className='pl-10 pr-10 w-full' src="./Freshdesigns.jpg" alt="" />
    <img className='pl-10 pr-10 w-full mt-5 ' src="./Kids.jpg" alt="" />
    <div className='flex pl-10 pr-10 mt-5'>
        <img className=' pr-2.5 w-[50%]' src="./Women.jpg" alt="" />
        <img className='  pl-2.5 w-[50%]' src="./Men.jpg" alt="" />
    </div>
    </div>
    <div>
    <h1 className='text-3xl m-10 flex justify-center'><b>DEAL ZONE</b></h1>
    <div className='flex justify-between pl-10 pr-10'>
    
    <div className='h-60 w-60 bg-red-200 rounded-full text-3xl  flex  justify-center items-center'> <h1 ><b>MIN <br />60% OFF</b></h1></div>
    <div className='h-60 w-60 bg-red-500 rounded-full text-3xl flex  justify-center items-center'><h1><b>HALF <br /> PRICE STORE</b></h1></div>
    <div className='h-60 w-60 bg-orange-600 rounded-full text-3xl flex justify-center items-center'><h1><b>UNDER <br />RS.799</b></h1></div>
    <div className='h-60 w-60 bg-red-300 rounded-full text-3xl flex  justify-center items-center '><h1><b>MIN <br /> RS.999</b></h1></div>
    </div>
    <img className='mt-10 w-full' src="./Toptrending.jpg" alt="" />
    </div>
    </>
  )
}

export default Middlesection