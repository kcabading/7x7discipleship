'use client'

import React from 'react'
import Nav from './common/Nav'
import Footer from './common/Footer'
import { Authenticator } from '@aws-amplify/ui-react'

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const Main = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
        <Authenticator.Provider>
            <Nav />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
            </main>
            <Footer />
        </Authenticator.Provider>
    </>
  )
}

export default Main