"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from "next/image"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
const Login = () => {
  return (
    <div className='h-screen bg-[#11A37F] flex flex-col items-center justify-center'>
        <Image src="https://links.papareact.com/2i6" alt='Google Image' width={300} height={300}/>
        <Link href={"https://mobile.twitter.com/ayinde_xyz"}>
        <SocialIcon url='https://mobile.twitter.com/ayinde_xyz' bgColor="transparent" fgColor="blue"/><span className='text-white font-bold text-2xl'>@ayinde_xyz</span>
        </Link >
        
        <button onClick={() => signIn("google")} className='text-white font-bold text-3xl animate-pulse'>Sign in to use ChatGPT</button>
    </div>
  )
}

export default Login