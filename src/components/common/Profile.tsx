'use client'
import Clerk from '@clerk/clerk-js';
import { dark } from "@clerk/themes";
import { useEffect } from 'react';


const Profile = () => {
    useEffect(() => {
        const userProfileComponent = window.document.querySelector<HTMLDivElement>('#user-profile')!;
 
        const clerk = new Clerk('pk_test_cHJldHR5LWdhcmZpc2gtNDQuY2xlcmsuYWNjb3VudHMuZGV2JA');
        clerk.load().then( data => {
            clerk.mountUserProfile(userProfileComponent, {
                // appearance: {
                //     baseTheme: dark
                // }
            });
        })
    }, [])
    
    return (
        <>
            <div id="user-profile"></div>
        </>
    )
}

export default Profile