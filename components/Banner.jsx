import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full text-center py-2 bg-gradient-to-tr  text-white from-red-600 to-orange-600'>
Subscribe to <span className='underline'><Link href='/movies'>BookMySeat</Link></span> 👑 Today to get amazing discounts and exclusive perks!
    </div>
  )
}

export default Banner
