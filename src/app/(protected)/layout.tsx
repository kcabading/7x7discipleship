import type { Metadata } from 'next'
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);

export const metadata: Metadata = {
  title: 'Class 101',
  description: 'Class 101 description',
}

function Layout({ children,}: { children: React.ReactNode} ) {
    return (
        <>
            protected layout
            {children}
        </>
    )
}

export default Layout
