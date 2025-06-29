import React from 'react'
import s1 from '/s1.png'
import s2 from '/s2.png'
import s3 from '/s3.png'
import s4 from '/s4.png'
const Category = () => {
  return (
    <div>
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
        </div>
  )
}

export default Category