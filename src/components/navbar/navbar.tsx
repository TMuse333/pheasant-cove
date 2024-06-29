import React, { useState } from "react";
import {Link} from 'react-router-dom'
import logo from '../../media/new-imports/nobg-pheasant-white-text.png'
interface NavbarProps {
    links: {
        name: string,
        destination: string
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    return (
        <nav className="fixed top-0 z-[200] w-screen left-0 bg-gradient-to-b from-blue-900 to-blue-700 h-[100px] flex justify-between items-center
        text-white">
            <div className="relative flex justify-between items-center w-screen  lg:w-[80vw] ">
            <Link to='/' >

                <img src={logo}
className="w-[130px] ml-6
object-cover hover:scale-[1.05] transition-transform"/>
  
               
               

                </Link>

             
                <div
                    className={`fixed right-[5%] top-[45px] flex flex-col justify-center items-center lg:relative lg:top-auto lg:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px]" />
                    </div>
                    <ul
                        className={`text-left fixed right-[5%] top-[70px] overflow-hidden transition-[height] flex flex-col items-center justify-center rounded-lg w-[140px] lg:bg-transparent lg:w-auto lg:relative lg:overflow-auto lg:top-auto lg:right-auto lg:flex-row ${subMenuClicked ? 'h-[120px] bg-radial-gradient from-blue-500 to-blue-900 p-0' : 'h-[0px] p-0 lg:h-auto'}`}
                    >
                        {links.map((link, index) => (
                            <li key={index} className="text-lg mb-2 pl-2 pr-2 lg:mb-0 hover:text-orange-400
                            ">
                                <Link to={link.destination} >
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;