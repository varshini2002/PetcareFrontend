import React from 'react';
import VerifyEmail from '../Components/VerifyEmail';
import FooterTransparent from '../Components/FooterTransparent';
import NavbarTransparent from '../Components/NavbarTransparent';

function VerifyEmailPage() {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-transparent min-h-screen flex flex-col">
            <NavbarTransparent />
            <div className="flex-grow flex items-center justify-center p-4">
                <VerifyEmail />
            </div>
            <FooterTransparent />
        </div>
    );
}

export default VerifyEmailPage;
