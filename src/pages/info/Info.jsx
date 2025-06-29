import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

const Info = () => {

let api='https://6821ee2fb342dce8004c65ef.mockapi.io/dataUsers'
let {id}=useParams()
let [product,setProduct]=useState({}) 
async function getById() {
  try {
    let res=await fetch(`${api}/${id}`)
    let data=await res.json()
    setProduct(data)
  } catch (error) {
    console.error(error);
    
  }
}

useEffect(()=>{
getById()
},[])
  return (
    <div className='flex w-[1360px]  items-center h-[574px] justify-between m-auto'>
      <img className='w-[780px] rounded-br-[30%] rounded-tl-[30%] h-[572px]' src={product.image} alt="" />
      <article className='w-[548px] h-[585px] flex flex-col items-start justify-between'>
<p className='text-[40px] font-[700]'>{product.name}</p>
<div className='flex items-end relative w-[359px] h-[70px] gap-[20px]'>
    <p className='text-[64px] font-[700]'>{product.price}</p>
    <p className='text-[#8B8B8B] text-[40px] font-[500] line-through'>$1000</p>
    <p className='absolute w-[63px] h-[34px] rounded-xl top-[0px] right-[0px] bg-[#339933] text-[20px] text-white font-[600] text-center'>-17%</p>
</div>

<div className='w-[548px] h-[58px] flex items-center justify-between'>
<p className='w-[58px] h-[58px] rounded-2xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>-</p>
<p className='w-[68px] text-[20px] font-[600] h-[58px] flex items-center justify-center'>1</p>
<p className='w-[58px] h-[58px] rounded-2xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>+</p>
<button className='w-[316px] h-[58px] rounded-xl ml-[20px] bg-[#339933] text-white text-[20px] font-[600]'>Add to cart</button>
</div>
<p className='text-[20px] font-[600]'>Description</p>
<p className='text-[16px]'>This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user. <br /><br />
This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.
Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs. </p>
<p className='border-b'>Read more</p>
      </article>
    </div>
  )
}

export default Info