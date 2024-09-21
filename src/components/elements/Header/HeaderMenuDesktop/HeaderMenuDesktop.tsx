import { Menu, MenuItem, Segment, Image } from "semantic-ui-react";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../../../../features/uiSlice/uiSlice";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./HeaderMenuDesktop.scss";
import logo from "../../../../assets/OST-logo 1.svg";

export default function HeaderOST() {
    // const dispatch = useDispatch();
    // function handleClick() {
    //     dispatch(toggleMenu());
    //     console.log("burger");
    // }
    // const location = useLocation();
    // useEffect(() => {
    //     // execute on location change
    //     console.log('Location changed!', location.pathname);
    // }, [location]);

    return (
        <Segment inverted >
            <Menu inverted secondary stackable size="large" id="nav__menu" fixed="top">
                <MenuItem>
                    <Image id="header__img" src={logo} />
                </MenuItem>
                <MenuItem className="header__item text-chapo" name="home" as={NavLink} to="/">
                    Home
                </MenuItem>
                <MenuItem className="header__item text-chapo" name="contact" as={NavLink} to="/contact">
                    Contact
                </MenuItem>
                <MenuItem className="header__item text-chapo" name="blog" as={NavLink} to="/blog">
                    Blog
                </MenuItem>
                <MenuItem>
                </MenuItem>
            </Menu>
        </Segment>
    );
}
