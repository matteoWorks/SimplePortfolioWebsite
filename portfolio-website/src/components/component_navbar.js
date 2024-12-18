import React from 'react';

// INSTALLATION REQUIRED
import { Link } from 'react-scroll'; 

import Asset_Icon_Projects from '../assets/logo_protonmail.png';

function Navbar() {
    const contactClassName = "transform hover:scale-125 transition duration-500 bg-transparent saturate-100 hover:saturate-150 opacity-80 hover:opacity-100";
    const navbarItemClassName = "cursor-pointer mx-6 " + contactClassName;


    return (
        <nav id="navbar" className="backdrop-blur-sm bg-white/10 fixed top-8 left-6 right-6 mx-auto z-50 flex justify-around px-2 py-4 rounded-3xl max-w-fit">
            <Link to="intro" spy={true} smooth={true} duration={500} className={navbarItemClassName} offset={0}>
                <img src={Asset_Icon_Projects} alt="Home" title="Home" width="36" height="36" />
            </Link>
            <Link to="experience" spy={true} smooth={true} duration={500} className={navbarItemClassName} offset={0}>
                <img src={Asset_Icon_Projects} alt="Experience" title="Eperience" width="36" height="36" />
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500} className={navbarItemClassName} offset={0}>
                <img src={Asset_Icon_Projects} alt="Skills" title="Skills" width="36" height="36" />
            </Link>
            {/*<Link to="projects" spy={true} smooth={true} duration={500} className={navbarItemClassName} offset={0}>
                <img src={Asset_Icon_Projects} alt="Projects" width="36" height="36" />
            </Link>*/}
        </nav>
    )
}

export default Navbar;