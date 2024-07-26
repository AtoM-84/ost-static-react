import {
  Menu,
  MenuItem, 
  Segment,
  Image,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';

import './HeaderOST.scss'
import logo from '../../../assets/OST-logo 1.svg'

export default function HeaderOST() {
  return (
  <nav>
    <Segment inverted className="header">
      <Menu inverted secondary stackable size='massive'>
        <MenuItem>
        <Image id="header__img" src={logo} />
        </MenuItem>
      </Menu>
    
      <Menu inverted secondary stackable size='massive' id='nav__menu' >
        <MenuItem
          className="header__item text-chapo"
          name="Accueil"
          as={NavLink}
          to="/"
        >
          Home
        </MenuItem>

        <MenuItem
          className="header__item text-chapo"
          name="Profil"
          as={NavLink}
          to="/Contact"
        >
          Contact
        </MenuItem>

        {/* <MenuItem
          className="header__item text-chapo"
          name="Profil"
          as={NavLink}
          to="/Blog"
        >
          Blog
        </MenuItem> */}
      </Menu>
    </Segment>
  
       {/* <button className='burger__bar'>
         <span></span>
       </button> */}
   
  </nav>
   
  );
}
