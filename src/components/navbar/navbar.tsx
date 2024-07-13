import React, { useState } from "react";
import {Link} from 'react-router-dom'
// import logo from '../../media/new-imports/nobg-pheasant-white-text.png'
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
            <div className="relative flex justify-between items-center w-screen  ml-auto mr-auto ">
            {/* <Link to='/' >

                <img src={logo}
className="w-[130px] ml-6
object-cover hover:scale-[1.05] transition-transform
lg:hidden"/>
  
               
               

                </Link> */}

             
                <div
                    className={`fixed right-[5%] top-[45px] flex flex-col justify-center
                     items-center md:relative md:top-auto md:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="md:hidden w-[140px] md:w-auto flex flex-col justify-center items-center">
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px]" />
                    </div>
                    <ul
                        className={` text-left fixed right-[5%] top-[70px]
                         overflow-hidden transition-[height] flex flex-col items-center
                          justify-center rounded-lg w-[140px]  md:w-screen
                          md:relative md:overflow-auto md:top-auto md:right-auto
                          md:flex-row  justify-around
                          md:text-center
                           ${subMenuClicked ? 'h-[300px] bg-radial-gradient from-blue-500 to-blue-900 p-0' : 'h-[0px] p-0 md:h-auto'}`}
                    >
                        {links.map((link, index) => (
                            <li key={index} className="text-lg mb-2 pl-2 pr-2 md:mb-0 hover:text-orange-400
                            md:border md:border-white md:bg-blue-800 md:pr-6 md:pl-6
                            
                        
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
