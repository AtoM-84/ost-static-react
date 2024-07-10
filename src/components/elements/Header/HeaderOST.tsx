import {
  Menu,
  MenuItem, 
  Segment,
  

} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';

import './HeaderOST.scss'

export default function HeaderOST() {
  return (
    <Segment inverted className="header">
    <NavLink className="header__logo" to="/member/books">
      <img className="header__img" alt="logo" />
    </NavLink>

   
      <Menu inverted secondary stackable size='huge'>
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
      </Menu>
    
  </Segment>
  );
}

