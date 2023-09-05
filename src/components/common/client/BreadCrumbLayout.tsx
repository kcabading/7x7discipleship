'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'
import Link from 'next/link'

const BreadCrumbLayout = () => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path !== '')

    const buildLink = (linkIndex: number) => {
        let link:string = ''
        for (let index = 0; index <= linkIndex; index++) {
            console.log('LINK:', link)
            link += `/${pathNames[index]}`
            
        }
        return link
    }

    return (
        <div>
            <ul className='flex space-x-2 text-sm items-center mb-5 text-gray-500'>
                <li><Link href={'/'}><Home width={10} className='inline'/></Link><span>&nbsp;/</span></li>
                {
                    pathNames.map( (link, index) => {
                        let href = index === 0 ? `/${link}` : buildLink(index)
                        return (
                            <li key={index}>
                                {
                                    pathNames.length === (index+1)
                                    ?
                                    <span className='text-black'>{link}</span>
                                    :
                                    <><Link href={href} className='hover:underline'>{link}</Link> <span>&nbsp;/</span></>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BreadCrumbLayout