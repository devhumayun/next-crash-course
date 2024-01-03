import Image from 'next/image'
import React from 'react'
import thumb_1 from '@/public/images/thumb-1.JPG'

const page = () => {
  return (
    <div className='px-10'> 
      <h2 className='text-center text-4xl font-bold mb-7'> About Page </h2>
      <p className='text-normal max-w-[80%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel debitis aliquam reprehenderit a aut error fuga. Molestiae repellendus nostrum dolores doloribus corrupti sequi rerum ipsum ratione tempore repudiandae! Iusto odio omnis velit recusandae inventore ea odit mollitia adipisci eveniet. </p>
      <div>
        <Image src={thumb_1} alt='About Image' />
      </div>
    </div>
  )
}

export default page
