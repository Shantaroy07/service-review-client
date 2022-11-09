import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white my-5 rounded-md">
            <div>
                <img className='w-2/4' src="https://www.seekpng.com/png/small/8-87962_happy-birthday-cake-svg-scrapbook-birthday-svg-cut.png" alt="" />
                <p className='text-xl font-medium'>Cake World<br />Providing Best Cake On <br /> Online Services</p>
            </div>
            <div className='md:mt-10'>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Home Delivery</a>
                <a className="link link-hover">Cash On Delivery</a>

            </div>
            <div className='md:mt-10'>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>

            </div>
            <div className='md:mt-10'>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>

            </div>
        </footer>
    );
};

export default Footer;