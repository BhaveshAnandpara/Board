
"use client"
import React from 'react'
import Image from 'next/image'


import leftSide from '../public/Left-side.png'
import Github from '../public/icons/github.png'
import Discord from '../public/icons/discord.png'
import Linkedin from '../public/icons/linkedin.png'
import Twitter from '../public/icons/twitter.png'

export default function SignIn() {


    return (

        <section className=' flex-row justify-start overflow-hidden' >


            <div className="blue-section w-[50%] h-[100vh]  ">

                <div className="trapezium"  ></div>

                <p className='logo mt-[60px] ml-[72px]' >LOGO</p>

                <p className='name ml-[171px] absolute top-[45vh]' >Board.</p>

                <div className="socials absolute bottom-[10px] flex justify-center items-center w-fit gap-[38px] ml-[145px] mb-[67px]">

                    <Image src={Github} width={44} height={44} />
                    <Image src={Twitter} width={44} height={44} />
                    <Image src={Linkedin} width={44} height={44} />
                    <Image src={Discord} width={44} height={44} />

                </div>

            </div>

            <div className="login-in-section border">

                <div className="sigin-section">

                    <p className='text-[36px] ' >Sign In</p>
                    <p className='text-[16px] font-normal' >Sign in to your account</p>

                    <div className="signin-btns">
                    </div>



                </div>

            </div>

        </section>

    )
}
