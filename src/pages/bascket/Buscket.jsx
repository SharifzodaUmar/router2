import React from 'react'
import s8 from '/s8.png'
import s9 from '/s9.png'
import s12 from '/s12.png'
const Buscket = () => {
  return (
    <div className='w-[1360px] m-auto'>
<p className='text-[64px] font-[700] my-[50px] '>Shopping cart</p>
<div className='flex w-[1360px] h-[582px] justify-between items-center'>   
<section className='w-[780px] h-[582px]  flex flex-col items-start gap-[30px] '>
<article className='w-[780px] border border-[#DDDDDD] h-[572px]  flex items-start flex-col justify-between'>
    <div className='w-[780px] h-[180px] flex items-center justify-between '>
<img className='w-[200px] h-[180px] border-r border-[#DDDDDD]' src={s8} alt="" />
<div className='w-[548px] h-[180px] flex flex-col items-center justify-around'>
<div className='w-[516px] text-[20px] font-[500] flex items-center justify-between'>
<p>Secateurs</p>
<p>X</p>
</div>
<div className='w-[516px] h-[58px] flex items-center justify-between'>
<div className='flex items-center gap-[20px]  rounded-xl border border-[#DDDDDD]'> 
<p className='w-[58px] h-[58px] rounded-xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>-</p>
<p className='w-[68px] text-[20px] font-[600] h-[58px] flex items-center justify-center'>1</p>
<p className='w-[58px] h-[58px] rounded-xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>+</p>  </div>
<button className='w-[316px] h-[58px] rounded-xl ml-[20px]  flex  items-end gap-[20px]  text-[20px] font-[600]'><span className='text-[40px] font-[600]'>$26</span><span className='line-through text-[20px] font-[500] text-[#8B8B8B]'>$35</span></button>

</div>
</div>

<div></div>


    </div>
</article>
<article className='w-[780px] h-[572px]  border border-[#DDDDDD]  flex items-start flex-col justify-between'>
    <div className='w-[780px] h-[180px] flex items-center justify-between '>
<img className='w-[200px] h-[180px] border-r border-[#DDDDDD]' src={s9} alt="" />
<div className='w-[548px] h-[180px] flex flex-col items-center justify-around'>
<div className='w-[516px] text-[20px] font-[500] flex items-center justify-between'>
<p>Secateurs</p>
<p>X</p>
</div>
<div className='w-[516px] h-[58px] flex items-center justify-between'>
<div className='flex items-center gap-[20px]  rounded-xl border border-[#DDDDDD]'> 
<p className='w-[58px] h-[58px] rounded-xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>-</p>
<p className='w-[68px] text-[20px] font-[600] h-[58px] flex items-center justify-center'>1</p>
<p className='w-[58px] h-[58px] rounded-xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>+</p>  </div>
<button className='w-[316px] h-[58px] rounded-xl ml-[20px]  flex  items-end gap-[20px]  text-[20px] font-[600]'><span className='text-[40px] font-[600]'>$26</span><span className='line-through text-[20px] font-[500] text-[#8B8B8B]'>$35</span></button>

</div>
</div>

<div></div>


    </div>
</article>
<article className='w-[780px]  border border-[#DDDDDD] h-[572px]  flex items-start flex-col justify-between'>
    <div className='w-[780px] h-[180px] flex items-center justify-between '>
<img className='w-[200px]  h-[180px] border-r border-[#DDDDDD]'  src={s12} alt="" />
<div className='w-[548px] h-[180px] flex flex-col items-center justify-around'>
<div className='w-[516px] text-[20px] font-[500] flex items-center justify-between'>
<p>Secateurs</p>
<p>X</p>
</div>
<div className='w-[516px] h-[58px] flex items-center justify-between'>
<div className='flex items-center gap-[20px]  rounded-xl border border-[#DDDDDD]'> 
<p className='w-[58px] h-[58px] rounded-xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>-</p>
<p className='w-[68px] text-[20px] font-[600] h-[58px] flex items-center justify-center'>1</p>
<p className='w-[58px] h-[58px] rounded-xl border border-[#DDDDDD] text-[50px] flex items-center justify-center text-[#8B8B8B]'>+</p>  </div>
<button className='w-[316px] h-[58px] rounded-xl ml-[20px]  flex  items-end gap-[20px]  text-[20px] font-[600]'><span className='text-[40px] font-[600]'>$26</span><span className='line-through text-[20px] font-[500] text-[#8B8B8B]'>$35</span></button>

</div>
</div>

<div></div>


    </div>
</article>
</section>

<section className='bg-[#F1F3F4] rounded-2xl w-[548px] h-[582px] flex flex-col items-start p-[30px] justify-between'>
    <p className='text-[40px] font-[700]'>Order details</p>
    <div className='flex items-end justify-between w-[484px] h-[122px] '>
<div className='text-[40px] text-[#8B8B8B] font-[500]'>
    <p>4 items</p>
    <p>Total</p>
</div>
<p className='text-[64px] font-[700]'>$541,00</p>
    </div>

<div className='w-[484px] h-[296px] flex flex-col items-start justify-between'>
<input type="text" placeholder='Name' className='w-[484px] h-[58px] bg-white rounded-xl text-[20px] font-[500] pl-[30px]' />
<input type="text" placeholder='Phone number' className='w-[484px] h-[58px] bg-white rounded-xl text-[20px] font-[500] pl-[30px]' />
<input type="text" placeholder='Email' className='w-[484px] h-[58px] bg-white rounded-xl text-[20px] font-[500] pl-[30px]' />
<button className='w-[484px] h-[58px] rounded-xl bg-[#339933] text-[20px] text-white font-[600]'>Order</button>
</div>

</section>

</div>
    </div>
  )
}

export default Buscket