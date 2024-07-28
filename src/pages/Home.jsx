import React from 'react'
import '../App.css'
import Sellercard from '../Components/Homecomponent/Sellercard'
import { categoryList } from '../data/category'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Middlesection from '../Components/Homecomponent/Middlesection'
 function Home() {
  return (
    <>
    <Header/>
    <div className=' w-full '><img src="./Home.png" alt="" /></div>
<div>      <h1 className='font-semibold flex justify-center mt-10 text-3xl'>TOP CATEGORY</h1>
</div>

<div className='flex  m-12 gap-10  flex-wrap'>
{categoryList.map((val)=>{
return <Sellercard title={val.title} image={val.image}/>
})}  
</div>
<Middlesection/>
<Footer/>

    </>
  )
}
export default Home