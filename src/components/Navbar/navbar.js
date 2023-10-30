import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
   <nav className='navbar'>
    <img src={ logo } alt="Logo" className='logo'/>
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' say={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='works' say={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>My Skills</Link>
        <Link activeClass='active' to='skills' say={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='clients' say={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects </Link>
        <Link activeClass='active' to='clients' say={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact </Link>

    </div>
    <button className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={ contactImg} alt='' className='desktopMenuImg'/>Contact Me</button>

        <img src={ menu } alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu? 'flex' :'none'}}>

        <Link activeClass='active' to='intro' say={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='works' say={true} smooth={true} offset={-50} duration={500}  className='listitem'onClick={()=>setShowMenu(false)} >My Skills</Link>
        <Link activeClass='active' to='skills' say={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='clients' say={true} smooth={true} offset={-50} duration={500} className='listitem'onClick={()=>setShowMenu(false)} >Clients</Link>
        <Link activeClass='active' to='contactPage' say={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
   </nav>
  ) 
}

export default Navbar;
