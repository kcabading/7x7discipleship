// RequireAuth.js
'use client'
// import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation'
// import LoadingHenyo from '../LoadingHenyo';

export function RequireAuth({ children }: any) {
    
    const router = useRouter()
    
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    switch (authStatus) {
        case 'authenticated':
            return children
        case 'unauthenticated':
            return router.push('/login')
        default:
            return 'Loading...'
    }
}