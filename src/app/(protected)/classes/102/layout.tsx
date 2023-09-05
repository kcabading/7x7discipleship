import PageNav from '@/components/common/client/PageNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Class 102',
  description: 'Class 102 description',
}

function Layout({ children,}: { children: React.ReactNode} ) {
    return (
        <>
            {children}
            <div className="flex justify-center mt-5">
                <PageNav
                    links={[
                        {label: 'Home', link: '/classes/102'},
                        {label: '101', link: '/classes/101/1'},
                        {label: '102', link: '/classes/101/2'},
                        {label: '103', link: '/classes/101/3'}
                    ]}
                />
            </div>
        </>
    )
}

export default Layout
