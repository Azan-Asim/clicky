import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Tabsection from '../Components/Tabsection'
import Newproducts from '../Components/Newarrival/Newproducts'
import { newProducts } from '../data/newProducts'

function Newarrival() {
  return (
    <>
    <Header/>
    <div>
        <div>
        <img src="./Freshdesigns.jpg" alt="" />
        </div>
<div className=' flex justify-center gap-10 pt-5  pb-2 border-b-2'>
    <button>WOMEN</button>
    <button>MEN</button>
    <button>GIRLS</button>
    <button>BOYS</button>
    <button>BEAUTY</button>
    <button>HOME</button>

</div>
<Tabsection/>
<div className='flex mt-3 ml-12 mr-12 justify-between flex-wrap '>
          {newProducts.map((val) => {
            return <Newproducts image={val.image} rs={val.rs} />
          })}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Newarrival