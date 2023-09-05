'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type LinkProp = {
    label: string,
    link: string
}

type PagNavProps = {
    links: LinkProp[]
}

const PageNav = ({links}: PagNavProps) => {

    const route = useRouter()
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0)

    let prevLink = currentLinkIndex > 0 ? links[currentLinkIndex - 1].link : '#'
    let nextLink = currentLinkIndex !== links.length - 1 ? links[currentLinkIndex + 1].link : '#'

    const handlePrevClick = () => {
        setCurrentLinkIndex(currentLinkIndex - 1)
        route.push(prevLink)
    }

    const handleNextClick = () => {
        setCurrentLinkIndex(currentLinkIndex + 1)
        route.push(nextLink)
    }    

    return (
        <div className='sm:flex justify-center mt-5 max-sm:fixed max-sm:bottom-0 max-sm:right-0 m-auto max-sm:bg-zinc-500 w-full max-sm:py-3'>
            {
                <div className='flex w-full justify-center'>
                    <Button variant={'secondary'} disabled={currentLinkIndex === 0} onClick={handlePrevClick}><ChevronLeft />&nbsp;Prev</Button>
                    <Button variant={'secondary'} disabled={links.length === currentLinkIndex + 1} onClick={handleNextClick}>Next&nbsp;<ChevronRight /></Button>
                </div>
            }
        </div>
    )
}

export default PageNav