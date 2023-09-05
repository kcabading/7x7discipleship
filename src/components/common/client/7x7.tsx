'use client'

import Image from "next/image"

import Logo from '../../../../public/7x7logo.png'
import { useTheme } from "next-themes"

const SevenbySeven = () => {
    const { theme } = useTheme()
    console.log('THEME', theme)
    return (
        <>
            <Image src={Logo} width={500} alt='7x7 Logo' className={`${theme === 'dark' && 'filter invert'} m-auto`}/>
        </>
    )
}

export default SevenbySeven