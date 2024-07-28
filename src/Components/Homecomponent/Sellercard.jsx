import React from "react";
import {
    Link
} from "react-router-dom";

function Sellercard({title,image}) {
  return (
  
  
  
    <Link to="/women">
      <div className=' justify-between rounded'>
        <div className='h-[200px] w-[157px] bg-slate-300'><img src={image} className='mb-3' alt="" />
          <div className='flex items-center justify-center pt-2 pb-2 bg-white text-sm font-medium font-sans	'>
            {title}
          </div>
        </div>
        </div>
        </Link>
     
     
  
  )
}

export default Sellercard