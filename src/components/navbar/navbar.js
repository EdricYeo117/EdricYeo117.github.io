import React from 'react'
import './navbar.css'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Home </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> About </Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Portfolio </Link>
                <Link activeClass='active' to='technologyStack' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"> Tech Stack </Link>
            </div>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                <button className="desktopMenuBtn">
                    <img src={contactImg} alt="" className="desktopMenuImg" />
                    Contact Me
                </button>
            </Link>
            <div className="mobileMenuContainer">
                <img src={menu} alt="Menu" className='mobileMenu' onClick={toggleMenu} />
            </div>
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}> Home </Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}> About </Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}> Portfolio </ Link>
                <Link activeClass='active' to='technologyStack' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}> Tech Stack </Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}> Contact </Link>
            </div>
        </nav>
    )
}

export default Navbar;
