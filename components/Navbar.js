'use client'

import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const {data: session} = useSession()
    console.log(session)
  return (
    <header className='px-4 py-8 shadow-lg'>
        <div className='flex justify-between max-w-screen-xl mx-auto'>
            <Link href={'/'}>TaskManager</Link>
            <div className='flex'>
                {session ? (
                    <>
                    <p className='mr-4'>{session.user.email}</p>
                    <Image className='mr-4 rounded-full' src={session.user.image} height={25} width={25} alt='user' loading='lazy'/>
                    <Link className='mr-4' href={'/task'}>Task</Link>
                    <button onClick={() => signOut()}>signOut</button>
                    </>
                ) : (
                    <>
                    <button onClick={() => signIn()}>SignIn</button>
                    </>
                )
                
                }
            </div>
        </div>
    </header>
  )
}

export default Navbar