"use client"
 
import * as React from "react"
import { LogIn, LogOut, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/navigation"


const Nav = () => {
    const { setTheme } = useTheme()
    const router = useRouter()
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
                    <div className="flex max-sm:hidden dark:text-white font-semibold">
                        <Link className="ml-3 hover:text-amber-500" href="/play">Groups</Link>
                    </div>
                    <div className="flex max-sm:hidden dark:text-white font-semibold">
                        <Link className="ml-3 hover:text-amber-500" href="/class/101">Class 101</Link>
                    </div>
                    <div className="flex max-sm:hidden dark:text-white items-center">
                        {/* {
                        authStatus === 'authenticated' && user ?
                            <>
                                <span>Hi, <strong>{user.username?.substring(0,20)}</strong></span>
                                <Button onClick={() => signOut()} variant={'link'}><LogOut/> &nbsp; Logout</Button>
                            </>
                        :
                            <>
                                <span>Hi, <strong>Guest</strong></span>
                            </>
                        } */}
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='flex gap-3 items-center sm:hidden'>
                        {/* <span>Hi, <strong>{ authStatus === 'authenticated' && user ? user.username?.substring(0,20) : getGuestUsername()}</strong></span> */}
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
                    <button onClick={ () => handleNavClick('/questions')} className="text-xl my-3 text-left">Questions</button>
                    <button onClick={ () => handleNavClick('/leaderboards')} className="text-xl my-3 text-left">Leaderboards</button>
                    <button onClick={ () => handleNavClick('/settings')} className="text-xl my-3 text-left">Settings</button>
                    <div className="text-xl flex justify-between my-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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