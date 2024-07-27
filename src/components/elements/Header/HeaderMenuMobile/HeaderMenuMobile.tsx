import { Menu, MenuItem, Segment, Image, Button } from "semantic-ui-react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../../features/uiSlice/uiSlice";

import { NavLink } from "react-router-dom";

import "./HeaderMenuMobile.scss";
import logo from "../../../../assets/OST-logo 1.svg";

export default function HeaderOST() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(toggleMenu());
        console.log("burger");
    }

    return (
        <nav>
            <Segment inverted className="header">
                <Menu inverted secondary stackable size="medium">
                    <MenuItem>
                        <Image id="header__img" src={logo} />
                    </MenuItem>
                </Menu>
               
                <Button inverted compact icon='bars' onClick={handleClick} />

            </Segment>
        </nav>
    );
}
