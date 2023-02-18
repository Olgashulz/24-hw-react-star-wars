import React from 'react';

const Footer = ({currentPage}) => {
    return (
        <footer className="row align-items-center m-0">
            {currentPage !== "Contact" && (
                <div className="border-button">
                    <p className="text-center m-0">
                        Send me an <span className="email text-uppercase">email</span>
                    </p>
                </div>
            )}
        </footer>
    );
};

export default Footer;