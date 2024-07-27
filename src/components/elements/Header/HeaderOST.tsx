import { Menu, MenuItem, Segment, Image, Button } from "semantic-ui-react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../features/uiSlice/uiSlice";

import { NavLink } from "react-router-dom";

import "./HeaderOST.scss";
import logo from "../../../assets/OST-logo 1.svg";

export default function HeaderOST() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(toggleMenu());
        console.log("burger");
    }

    return (
        <nav>
            <Segment inverted className="header">
                <Menu inverted secondary stackable size="massive">
                    <MenuItem>
                        <Image id="header__img" src={logo} />
                    </MenuItem>
                </Menu>

                <Button onClick={handleClick}>Burger</Button>

                <Menu inverted secondary stackable size="massive" id="nav__menu">
                    <MenuItem className="header__item text-chapo" name="Accueil" as={NavLink} to="/">
                        Home
                    </MenuItem>

                    <MenuItem className="header__item text-chapo" name="Profil" as={NavLink} to="/Contact">
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
