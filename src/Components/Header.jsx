import React from 'react'

function Header() {
  return (
    <>
      <div>
        <nav className='m-0 flex justify-between items-center w-[100%] p-4 '>
          <div>
          <img src="https://d30fs77zq6vq2v.cloudfront.net/img/clicky_logo-97724356932.png" alt="" /></div>
          <div> 
            <ul className='flex  gap-4 cursor-pointer max-md:hidden'>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>BEAUTY</li>
            <li>OTHERS</li>
           <li>NEW ARRIVALS</li>
            <li className='text-red-600'>SALE</li>
          </ul>
          </div>
          <div className='flex items-center justify-center'>
            <input type="search" placeholder='Search for items, brands and inspiration' className='h-[38px] w-60 bg-gray-300 p-2 rounded '/>
            <button className='h-[38px] w-[45px] bg-amber-300 rounded flex justify-center items-center'>
              <img className='h-6 w-6 ' src="./search.png" alt="" />
            </button>
          </div>
          <div className='flex gap-3 cursor-pointer'>
            <div className='h-10 w-10 p-2'> <img src="./customercare.png" alt="" /> </div>
            <div className='h-10 w-10 p-2'> <img src="./notification.png" alt="" /> </div>
            <div className='h-11 w-11 p-2'> <img src="./profile.png" alt="" /> </div>
            <div className='h-10 w-10 p-2'> <img src="./countactive.png" alt="" /> </div>
           <div className='h-11 w-11 p-2'> <img src="./favourite.png" alt="" /> </div>         
          </div>
        
        
        </nav>
      </div>
    </>
  )
}

export default Header