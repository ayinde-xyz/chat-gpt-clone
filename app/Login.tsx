"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from "next/image"
const Login = () => {
  return (
    <div className='h-screen bg-[#11A37F] flex flex-col items-center justify-center'>
        <Image src="https://links.papareact.com/2i6" alt='Google Image' width={300} height={300}/>
        <button onClick={() => signIn("google")} className='text-white font-bold text-3xl animate-pulse'>Sign in to use ChatGPT</button>
    </div>
  )
}

export default Login