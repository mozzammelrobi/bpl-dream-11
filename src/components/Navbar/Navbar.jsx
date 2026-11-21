import React from 'react';
import dolar1  from '../../assets/dollar-1.png'
import logo from '../../assets/logo-footer.png'

const Navbar = () => {
    return (
        <div className="navbar border container mx-auto">
            <div className="flex-1">
                <a className=""><img src={logo} alt="" /> </a>
            </div>
            <div className="flex-none font-bold text-xl">
                <button className=" flex  ">
                    0 Coins
                    <img src={dolar1} alt="" />
       
                </button>
            </div>
        </div>
    );
};

export default Navbar;