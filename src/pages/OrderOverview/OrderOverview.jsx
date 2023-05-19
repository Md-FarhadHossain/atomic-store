import React from 'react'
import { useLoaderData } from 'react-router-dom'
import check from '../../assets/check.png'

const OrderOverview = () => {
    const packageData = useLoaderData()
    console.log(packageData)
  return (
    <>
        <section className='h-[80vh] flex justify-center items-center'>
            <div className='container mx-auto px-4 lg:px-0'>
                <div>
                    <div className='flex justify-center mb-8'><img className='w-[10rem]' src={check} alt="check" /></div>
                    <h1 className='text-2xl lg:text-5xl leading-relaxed font-sans text-center font-bold'>
                    আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে, কিছুক্ষণের মধ্যে আমাদের কল সেন্টার থেকে ফোন করে আপনার অর্ডারটি কনফার্ম করা হবে
                    </h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default OrderOverview