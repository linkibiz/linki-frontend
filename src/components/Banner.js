import Image from 'next/image'
import React from 'react'
import BannerImage from '../../public/img/banner.png'
import Logo from '../../public/img/linki-logo.png'
import Button from './Button'
const Banner = () => {
  return (
    <div className='relative'>
      <Image src={Logo} className='max-h-8 object-contain absolute max-w-fit top-4 left-4' />
      <div className='tracking-wider absolute py-2 px-4 top-4 right-4 border border-zinc-700 rounded text-white text-sm'>
        <button>
         Obtén tu Linki
        </button>
      </div>
      <Image className='h-full max-h-52' src={BannerImage} alt='banner'/>
    </div>
  )
}

export default Banner