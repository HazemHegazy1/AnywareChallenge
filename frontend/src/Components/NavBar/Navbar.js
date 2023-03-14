import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { BiLogOutCircle} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'
export function Navbar(props) {
    const navigate = useNavigate();
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)

      return (
    <div className='NavBar'>
       <div className={'NavLogo'}>
        <a href="/"><h2>EntrepreWare</h2></a>
    </div>

    <ul className="nav-menu">      
        {props.items.map((item,i)=>{
            return <Link to={props.nav[i]} style={{color:"#fff"}} onClick={()=>navigate(props.nav[i])} smooth={true} duration="500"><li>{item}</li></Link>
        })}        
    </ul>    
    
    <li className="Logout"> <BiLogOutCircle style={{transform:'translate(-2px,3px)'}}></BiLogOutCircle> Logout </li>  

    <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className="icon" />):(<AiOutlineClose className="icon" style={{color:"#fff"}} />)}
            </div>

            <div className={nav? 'mobile-menu active' : "mobile-menu"}>
                <ul className="mobile-nav">
                <Link to='search' smooth={true} duration="500" ><li>Search</li></Link>
                 <Link to='history' smooth={true} duration="500"><li>History</li></Link>
                 <li> <BiLogOutCircle style={{transform:'translate(-2px,3px)'}}></BiLogOutCircle> Logout </li>  

                </ul>
                <div className='mobile-menu-bottom'> 

                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
   </div>
                  
                  )
}

export default Navbar
