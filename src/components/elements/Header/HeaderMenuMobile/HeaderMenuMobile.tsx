import { Menu, MenuItem, Segment, Image, Button } from "semantic-ui-react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../../features/uiSlice/uiSlice";
// import { useSelector } from 'react-redux';


// import { NavLink } from "react-router-dom";

import "./HeaderMenuMobile.scss";
import logo from "../../../../assets/OST-logo 1.svg";
import HeaderMenuMobileContent from "./HeaderMenuMobileContent/HeaderMenuMobileContent.tsx"

export default function HeaderMenuMobile() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(toggleMenu());
        console.log("burger");
    }

    // const isToggled = useSelector(state => state.toggleMenu)

    return (
        <nav>
            <Segment inverted className="header">
                <Menu inverted secondary stackable size="small">
                    <MenuItem>
                        <Image id="header__img" src={logo} />
                    </MenuItem>
                </Menu>
               
                <Button size='small' inverted compact icon='bars' onClick={handleClick} />
            </Segment>
            <Segment inverted size="huge">
                <HeaderMenuMobileContent />
            </Segment>
        </nav>
    );
}
