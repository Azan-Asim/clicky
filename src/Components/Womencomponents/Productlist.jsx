import React from 'react'


function Productlist({title,brand,rs,image}) {
  return (
  
  
  
    
      <div className=' justify-between rounded bg-[#EEEEEE] border-solid border-2 border-black-100'>
        <div className='h-[524px] w-[284px] '><img src={image} className='' alt="" />
          <div className='p-2'>
          {brand} <br />
          <b>  {title} </b><br />
           {rs}
          </div>
        </div>
        </div>
         )
        }
        
        export default Productlist