import React from "react";
const today = new Date(); 

const Footer = () => {
    return (
        <div className="w-full bg-gray-800 fill-current">
            <footer className="text-white py-4 text-center">
                <p>© Devdesk {today.getFullYear()} </p>
            </footer>
        </div>
    );
};

export default Footer;
