import React from 'react'
import sideImg from '../../assets/right-image.webp'
import { FaDotCircle } from "react-icons/fa";
import Button from '../Button/Button';

const ProductReview = () => {
  return (
    <>
        <section>
            <div className='container mx-auto px-4 lg:px-12 pb-24'>

                    <h1 className='font-sans text-4xl font-bold text-center pb-16 py-6'><span className='bg-[#FE9553] rounded-ss-3xl rounded-ee-3xl text-white px-6 pt-1 text-'>বইটির বিষেশত্ব হলো</span></h1>

                <div className='flex items-start justify-between lg:flex-row md:flex-row flex-col-reverse'>
                    {/* Left side */}
                    <div className='lg:w-1/2 md:w-1/2 w-full'>
                        <p className='font-sans grid font-bol text-xl'>
                        {/* <p className='text-4xl'>* অগ্রিম কোনো টাকা পেমেন্ট করতে হবে না*</p> */}
                            {/* <p>আপনার বাচ্চার  হাতের লিখা নিয়ে চিন্তিত❓ </p>
                            <p>হাতের লিখা সুন্দর হচ্ছেনা❓</p> */}
                           <p className='text-2xl font-semibold mb-5 lg:text-start md:text-start text-center'> আমরা নিয়ে এসেছি আপনাদের জন্য Magic handwriting practice copybook.</p>
                            {/* <p>👉এর বিষেশত্ব হলোঃ</p> */}
                            <div className='lg:leading-relaxed leading-relaxed md:leading-relaxed grid gap-1'>
                            <p className='flex items-center'><span className='text-green-400 mr-3'><FaDotCircle /> </span> প্রত্যেক টি অক্ষর খোদাই করা।</p>
                            <p className='flex items-start'><span className='text-green-400 mr-3'><FaDotCircle /> </span> <span>আপনার বাবুর হাতের লেখা ( Bangla, Arabic, Alphabet, Number ও Drawing ) শেখার জন্য এই বইটি বিশেষ ভাবে কাজ করবে।</span></p>                                   
                            <p className='flex items-center'><span className='text-green-400 mr-3'><FaDotCircle /> </span> এই খাতায় লিখার ৫-১০ মিনিট এর অটোমেটিক মুছে যাবে।</p>
                            <p className='flex items-center'><span className='text-green-400 mr-3'><FaDotCircle /> </span> খাঁজ কাটা  হবার কারনে বাচ্চারা কারো সাহায্য ছাড়াই খুব সহজে নিজে নিজে লিখতে পারবে।</p>
                            <p className='flex items-start'><span className='text-green-400 mr-3'><FaDotCircle /> </span> বর্ণমালা ও ছবি গুলো খাঁজ কাটা রয়েছে যার ফলে শিশুদের লিখতে সুবিধা হয় এবং পাশাপাশি পড়তে ও পারবে।</p>
                            <p className='flex items-center'><span className='text-green-400 mr-3'><FaDotCircle /> </span> এটি খুবই উন্নতমানের মোটা কাগজের এবং অনেক মজবুত যা সহজে নষ্ট হবে না।</p>
                            <p className='flex items-center'><span className='text-green-400 mr-3'><FaDotCircle /> </span> বার বার খাতা কিনার অপচয় থেকে রক্ষা করবে।</p>
                            </div>
                            
                        </p>

                        <div className='mt-6'>
                           <a href="#order_section"> <Button>অর্ডার করুন - ৫০% ছাড়ে</Button></a>
                        </div>
                    </div>
                    
                {/* Right side */}

                <div className='lg:w-1/2 md:w-1/2 w-full flex lg:justify-end md:justify-end lg:mb-0 md:mb-0 mb-8 justify-center '>
                    <img className='border shadow-xl rounded-xl lg:w-[70%] md:w-[80%] w-full object-cover' src={sideImg} alt="sideImg" />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductReview