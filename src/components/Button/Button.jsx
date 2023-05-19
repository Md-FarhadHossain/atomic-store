import React from 'react'

const Button = ({children}) => {
  return (
    <button type='submit' className='bg-[#FE9553] hover:bg-[#ff7018] w-full font-semibold font-sans shadow-[#FDBC92] px-10 py-3 rounded-md text-white border-[#FE853A] shadow-inner text-base'>{children}</button>
  )
}

export default Button