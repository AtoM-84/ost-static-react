import { Menu, MenuItem, Image, MenuMenu, Dropdown } from "semantic-ui-react";
// import { createSelector } from  '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../../../features/uiSlice/uiSlice";
import { useSelector } from 'react-redux';


// import { NavLink } from "react-router-dom";

import "./HeaderMenuMobile.scss";
import logo from "../../../../assets/OST-logo 1.svg";
import HeaderMenuMobileContent from "./HeaderMenuMobileContent/HeaderMenuMobileContent.tsx"

export default function HeaderMenuMobile() {
    const menu = useSelector((state: any) => state.ui.menuIsOpen)
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(toggleMenu());
        console.log("burger");
        console.log(menu)
    }

    return (
        <nav>
                <Menu inverted secondary size='large' id="header__color">
                    <MenuItem inverted> 
                        <Image id="header__img" src={logo} />
                    </MenuItem>
                        <MenuMenu position='right'>
                            <Dropdown
                                item
                                simple
                                icon='bars'
                                size='huge'
                                direction='right'
                                onClick={handleClick}
                            />
                        </MenuMenu>
                </Menu>
            
                {(menu) ? <HeaderMenuMobileContent /> : <></>}
            
        </nav>
    );
}

