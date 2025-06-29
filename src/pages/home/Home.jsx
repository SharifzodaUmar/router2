import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bg1 from '/bg1.jpg'
import s1 from '/s1.png'
import s2 from '/s2.png'
import s3 from '/s3.png'
import s4 from '/s4.png'
import bg2 from '/bg2.png'
import { Link} from 'react-router-dom'




const Home = () => {

let api='https://6821ee2fb342dce8004c65ef.mockapi.io/dataUsers'
let [product,setProduct]=useState([])

async function get() {
    try {
   let res=await fetch(api)
   let  data=await res.json()  
   setProduct(data)
    } catch (error) {
       console.error(error);
        
    }
}

useEffect(()=>{
    get()
},[])

  return (
    <div>
<section style={{backgroundImage:`url(${bg1})`}} className='w-full h-[600px] p-[70px] bg-no-repeat bg-cover bg-center'>
    <p className='text-white font-[700] text-[96px]'>Amazing Discounts <br /> on Garden Products!</p><br />
    <button className='w-[218px] bg-[#339933] h-[58px] flex items-center justify-center rounded-xl text-white text-[20px] font-[600]'> 
        Check out
    </button>
</section>

<p className='text-[64px] font-[700] my-[50px] ml-[70px]'>Categories</p>
<section className='w-[1360px] flex items-center justify-between h-[420px] m-auto'>
<article className='w-[316px] border-b  border-gray-400  h-[420px] flex items-center flex-col justify-between'>
<img src={s1} alt="" />
<p className='text-[20px] font-[500]'>Fertilizer</p>
</article>
<article className='w-[316px] border-b  border-gray-400 h-[420px] text-center flex items-center flex-col justify-between'>
<img src={s2} alt="" />
<p className='text-[20px] font-[500] '>Protective products and septic tanks</p>
</article>
<article className='w-[316px] border-b  border-gray-400 h-[420px] flex items-center flex-col justify-between'>
<img src={s3} alt="" />
<p className='text-[20px] font-[500]'>Planting material	</p>
</article>
<article className='w-[316px] border-b  border-gray-400 h-[420px] flex items-center flex-col justify-between'>
<img src={s4} alt="" />
<p className='text-[20px] font-[500]'>Tools and equipment</p>
</article>
</section>


<section className='my-[100px] bg-[#0B710B] w-[1360px] h-[496px] m-auto rounded-2xl relative'>
<p className='text-[64px] font-[700] text-white text-center p-[20px]'>5% off on the first order</p>
<article className='w-[1296px]  flex items-center justify-between h-[360px]  m-auto'>
<img src={bg2} alt="" />

<div className='w-[516px] h-[296px] flex flex-col justify-between'>
<input type="text" placeholder='Name' className='border w-[516px]  text-[20px] font-[600] h-[58px] text-white  outline-0 rounded-xl pl-[30px]' />
<input type="text" placeholder='Phone number' className='border text-[20px] font-[600] w-[516px] h-[58px] text-white  outline-0 rounded-xl pl-[30px]' />
<input type="text" placeholder='Email' className='border w-[516px] text-[20px] font-[600] h-[58px] text-white  outline-0 rounded-xl pl-[30px]' />
<button className='flex items-center justify-center bg-white text-[20px] font-[600] rounded-xl w-[516px] h-[58px]'>Get a discount</button>
</div>

</article>
</section>
<p className='text-[64px] font-[700] my-[50px] ml-[100px]'>Sale</p>

   
<section className='w-[1360px] m-auto  flex items-center justify-between flex-wrap '>
    {product.map((e)=>{
        return (
            <div className='border rounded-2xl justify-between relative ] flex flex-col items-center border-[#DDDDDD] w-[316px] h-[422px]' key={e.id}>
<img className='rounded-t-2xl' src={e.image} alt="" />
<p className='text-[20px] font-[500]'>{e.name}</p>
<p className='absolute w-[68px] h-[34px] rounded-xl top-[20px] right-[20px] bg-[#339933] text-[20px] text-white font-[600] text-center'>-50%</p>
<div className='flex items-end  gap-[20px]'>
    <p className='text-[40px] font-[600]'>{e.price}</p>
    <p className='text-[#8B8B8B] text-[20px] font-[500] line-through'>$1000</p>
</div>

<Link  to={`/info/${e.id}`} >   
<button className='mb-[10px] '>✏️</button> </Link>
            </div>
        )
    })}
</section>



        </div>
  )
}

export default Home





