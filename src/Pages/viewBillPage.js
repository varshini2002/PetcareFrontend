import React from 'react';
import BillPage from '../Components/BillPage';
import FooterTransparent from "../Components/FooterTransparent";
import NavbarTransparent from "../Components/NavbarTransparent";

function ViewBillPage() {
    return (
        <div className="bg-gradient-to-b from-gray-600 to-transparent  min-h-screen flex flex-col">
            <NavbarTransparent />
           
                <BillPage />
          
            <FooterTransparent />
        </div>
    );
}

export default ViewBillPage;
