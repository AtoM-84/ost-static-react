import { Menu, MenuItem, Segment, Image } from "semantic-ui-react";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../../../../features/uiSlice/uiSlice";

import { NavLink } from "react-router-dom";

import "./HeaderMenuDesktop.scss";
import logo from "../../../../assets/OST-logo 1.svg";

export default function HeaderOST() {
    // const dispatch = useDispatch();
    // function handleClick() {
    //     dispatch(toggleMenu());
    //     console.log("burger");
    // }

    return (
        <nav>
            <Segment inverted className="header">
                <Menu inverted secondary stackable size="large">
                    <MenuItem>
                        <Image id="header__img" src={logo} />
                    </MenuItem>
                </Menu>

               
                {/* <Button inverted compact icon='bars' /> */}
            
                
                <Menu inverted secondary stackable size="large" id="nav__menu">
                    <MenuItem className="header__item text-chapo" name="Home" as={NavLink} to="/">
                        Home
                    </MenuItem>

                    <MenuItem className="header__item text-chapo" name="Contact" as={NavLink} to="/Contact">
                        Contact
                    </MenuItem>

                    <MenuItem
                    className="header__item text-chapo"
                    name="Blog"
                    as={NavLink}
                    to="/Blog"
                    >
                    Blog
                    </MenuItem>
                </Menu>
            </Segment>

            {/* <button className='burger__bar'>
         <span></span>
       </button> */}
        </nav>
    );
}
