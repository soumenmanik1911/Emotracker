'use client'
import React from 'react'
import Link from 'next/link'
import Button from './Button'
import { useAuth } from '@/context/AuthContext';

const CallToAction = () => {

    const {currentUser} = useAuth()
    if (currentUser)  {
        return(
            <div>
                 <Link href={'/Dashboard'}>
      <Button dark text = "Go To Dashboard"/>
      </Link>
            </div>
        )
    }
  return (
    <div className='grid grid-col-2 mx-auto w-fit gap-4'> 
    <Link href={'/Dashboard'}>
      <Button text = "Sign Up"/>
      </Link>
      <Link href={'/Dashboard'}>
      <Button text ="Log in"dark/>
      </Link>
  </div>
  )
}

export default CallToAction
