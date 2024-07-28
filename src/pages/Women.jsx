import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Productlist from '../Components/Womencomponents/Productlist'
import { womenTopsList } from '../data/products'


function Women() {
  return (
    <>

      <Header />
      <div className='bg-[#EEEEEE]'>
        <div className='pt-5 pb-5 pl-10 w-full bg-[#EEEEEE] m-0 flex gap-5  border-solid border-2 border-black-100'>
          <button>HOME</button>
          <button>WOMEN</button>
          <button>WESTERN WEAR</button>
          <button>TOPS & TUNICS</button>
        </div>
        <h1 className='flex justify-center w-full p-3 text-2xl bg-white' > TOPS & TONICS</h1>
        <div className='bg-[#EEEEEE] w-full h-10 pl-12  border-solid border-2 border-black-100 '>
          <button className='align-middle w-40 text-lg '>Sort</button>
          <button className='align-middle w-40 text-lg'>Price Range</button>
          <button className='align-middle w-40 text-lg'>Filter</button>
        </div>
        <div className='flex mt-3 ml-12 mr-12 justify-between flex-wrap '>
          {womenTopsList.map((val) => {
            return <Productlist brand={val.brand} title={val.title} image={val.image} rs={val.rs} />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Women