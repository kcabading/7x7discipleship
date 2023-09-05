import PageNav from '@/components/common/client/PageNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Class 101',
  description: 'Class 101 description',
}

function Layout({ children,}: { children: React.ReactNode} ) {
    return (
        <>
            {children}
            
            <PageNav
                links={[
                    {label: 'Home', link: '/classes/101'},
                    {label: '101', link: '/classes/101/1'},
                    {label: '102', link: '/classes/101/2'},
                    {label: '103', link: '/classes/101/3'}
                ]}
            />
        </>
    )
}

export default Layout
