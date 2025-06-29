import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import logo from '/logo.png'
import buscket from '/buscket.png'
import social from '/social.png'
import map from '/map.png'
const Layout = () => {
  return (
    <div>
<header className='w-full h-[128px] flex items-center justify-around gap-[50px] bg-white border-b border-gray-500'>
<img src={logo} alt="" />
<ul className='flex items-center gap-[100px] text-[20px] font-[500]'> 
    <Link to={'/'}>
   
    <p>
        Main Page
    </p>
 </Link>

 <Link to={'/category'}>   
<p>
    Categories
</p></Link>

<Link to={'/allproduct'}>
<p>All products</p>
  </Link>


</ul>

<Link to={'/buscket'}>
<img src={buscket} alt="" /> </Link>
</header>
<main>
<Outlet />
</main>




<footer className='w-full h-[1000px]  bg-white mt-[100px]' >
    <p className='text-[64px] ml-[100px] font-[700] mb-[100px]'>Contact</p>
   <section className='w-[1360px] m-auto h-[758px] flex flex-col items-center justify-between'>
<article className='w-[100%] h-[376px]  flex flex-col items-center justify-between'>   
<div className='w-[100%] h-[150px]  flex items-center justify-between' >
<div className='bg-[#F1F3F4] rounded-2xl  w-[780px] h-[150px]  flex flex-col items-start pl-[30px] gap-[30px] justify-center'>
    <p className='text-[#8B8B8B] text-[20px] font-[500]'>Phone</p>
    <p className='text-[40px] font-[600]'>+7 (499) 350-66-04</p>
</div>
<div className='bg-[#F1F3F4] rounded-2xl  w-[548px] h-[150px]  flex flex-col items-start pl-[30px] gap-[30px] justify-center'>
    <p className='text-[#8B8B8B] text-[20px] font-[500]'>Socials</p>
    <img src={social} alt="" />
</div>
</div>

<div className='w-[100%] h-[194px]  flex items-center justify-between' >
<div className='bg-[#F1F3F4] rounded-2xl  w-[780px] h-[194px]  flex flex-col items-start pl-[30px] gap-[10px] justify-center'>
    <p className='text-[#8B8B8B] text-[20px] font-[500]'>Address</p>
    <p className='text-[40px] font-[600]'>Dubininskaya Ulitsa, 96, Moscow, <br /> Russia, 115093</p>
</div>
<div className='bg-[#F1F3F4] rounded-2xl  w-[548px] h-[194px]  flex flex-col items-start pl-[30px] gap-[30px] justify-center'>
    <p className='text-[#8B8B8B] text-[20px] font-[500]'>Working Hours</p>
     <p className='text-[40px] font-[600]'>24 hours a day</p>
</div>
</div>
</article>
<img src={map} alt="" />

   </section>
</footer>

    </div>
  )
}

export default Layout