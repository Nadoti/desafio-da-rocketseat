import React from 'react'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import cart from "@/icons/shopping-bag.svg"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

type Props = {}

export function Header() {


  return (
    <header className='w-full bg-white'>
      <div className='max-w-screen-main w-full mx-auto px-2 flex items-center justify-between'>
        <a href="/" className={`${sairaStencil.className} text-[40px] py-4 text-logo-color`}>capputeeno</a>
        <div className='flex gap-6'>
          <input 
            type="text" 
            placeholder='Procurando por algo específico?' className='w-[352px] py-3 px-4 bg-input-color rounded-lg outline-none text-black' 
          />
          <Image 
            src={cart} 
            className=''
            width={24}
            height={24}
            alt="cart" 
          />
        </div>
      </div>
    </header>
  )
}