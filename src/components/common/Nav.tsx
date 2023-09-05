"use client"
 
import * as React from "react"
import { Menu, Power, PowerOff, UserCog, X } from "lucide-react"

import { SignInButton, useUser } from "@clerk/nextjs";

import { SignOutButton } from "@clerk/nextjs"

import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/navigation"
import ThemChanger from "./client/ThemeChanger"


const Nav = () => {
    const router = useRouter()

    const { isLoaded, isSignedIn, user } = useUser();

    console.log('USER', user)

    const [mobileNavEnabled, setMobileNavEnabled] = useState(false)

    const handleNavClick = function(link: string) {
        setMobileNavEnabled(false)
        router.push(link)
    }

    return (
        <>
            <nav className="w-full fixed backdrop-blur border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/75 dark:bg-slate-900/75 max-lg:px-4 z-50">
                <div className="z-10 lg:z-50 flex items-center justify-between w-full lg:w-3/4 m-auto py-3">
                    <h1 className="text-red-500 font-extrabold text-lg dark:text-white">
                        <Link href="/">7x7Discipleship</Link>
                    </h1>
                    <div className="flex justify-center space-x-2 max-sm:hidden dark:text-white">
                        <Link className="hover:text-amber-500 font-semibold" href="/groups">Groups</Link>
                        <Link className="hover:text-amber-500 font-semibold" href="/classes">Classes</Link>
                        <Link className="hover:text-amber-500 font-semibold" href="/classes/101">Class 101</Link>
                    </div>
                    <div className="flex max-sm:hidden dark:text-white items-center space-x-2">
                        {
                        isSignedIn && user ?
                            <>
                                <span>Hi, <strong>{user.fullName}</strong></span>
                                <div className="text-red-500">
                                    <SignOutButton children={<button><PowerOff /></button>} />
                                </div>
                                <Link className="ml-3 hover:text-amber-500" href="/profile"><UserCog /></Link>
                            </>
                        :
                            <>
                                <span>Hi, <strong>Guest</strong></span>
                                <div className="text-green-500">
                                <SignInButton children={<button><Power /></button>} />
                                </div>
                            </>
                        }
                        <ThemChanger />
                    </div>
                    <div className='flex gap-3 items-center sm:hidden'>
                        {
                        isSignedIn && user ?
                            <>
                                <span>Hi, <strong>{user.fullName}</strong></span>
                            </>
                        :
                            <>
                                <span>Hi, <strong>Guest</strong></span>
                            </>
                        }
                        {
                            mobileNavEnabled
                            ? <X className="text-lg cursor-pointer dark:text-white" size={30} onClick={ () => setMobileNavEnabled(!mobileNavEnabled)} />
                            : <Menu className="text-lg cursor-pointer dark:text-white" size={30} onClick={ () => setMobileNavEnabled(!mobileNavEnabled)}/>
                        }
                    </div>
                </div>
            </nav>
            <nav className={`
                ${mobileNavEnabled ? 'right-0' : 'right-[100%]'}
                mt-[73px] w-full h-full fixed bg-slate-800/90 transition-right ease-in-out duration-200 sm:hidden p-5 text-white z-50`}>
                <div className="flex flex-col">
                    {/* <div className="w-full flex text-xl">
                        {authStatus === 'unauthenticated' ? (
                        <Button onClick={() => handleNavClick('/signin')} variant={'secondary'}><LogIn/>&nbsp;Login</Button>
                        ) : (
                        <Button onClick={() => logOut()} variant={'secondary'}><LogOut/>&nbsp;Logout</Button>
                        )}
                    </div> */}
                    <button onClick={ () => handleNavClick('/groups')} className="text-xl my-3 text-left">Groups</button>
                    <button onClick={ () => handleNavClick('/class')} className="text-xl my-3 text-left">Class</button>
                    <button onClick={ () => handleNavClick('/leaderboards')} className="text-xl my-3 text-left">Leaderboards</button>
                    <div className="text-xl flex justify-between my-3">
                    <ThemChanger />
                    </div>
                    {/* <div className="social-icons flex justify-start text-4xl mt-3">
                        <a href="" className="github"><AiFillFacebook /></a>
                        <a href="" className="github ml-5"><AiFillInstagram /></a>
                    </div> */}
                </div>
            </nav>            
        </>
    )
}

export default Nav