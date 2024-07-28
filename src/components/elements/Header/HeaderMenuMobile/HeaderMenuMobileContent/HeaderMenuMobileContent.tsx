import { Menu, MenuItem, Segment } from "semantic-ui-react";
import "./HeaderMenuMobileContent.scss";
import { NavLink } from "react-router-dom";
export default function HeaderMenuMobileContent() {
    return (

      <Segment inverted className="header" id="burger__content">
          <Menu inverted stackable>
              <MenuItem
                className="header__item"
                name='Home' 
                as={NavLink} to="/"
              >
                  Home
              </MenuItem>

              <MenuItem
                className="header__item"
                name='Contact'
                as={NavLink} to="/Contact"
              >
                  Contact
              </MenuItem>
          </Menu>
      </Segment>
    
    );
}
    






