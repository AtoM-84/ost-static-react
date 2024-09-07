import { Menu, MenuItem, Segment, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "./Footer.scss";
import logo from "../../../assets/OST-logo 1.svg";

export default function Footer() {
    return (
        <Segment inverted id="footer">
            <Menu stackable inverted className="footer__menu">
                <MenuItem
                    className="footer__logo"
                    name="logo"
                    source={logo}
                    // as={NavLink}
                    // to="/"
                >
                    <Image id="header__img" src={logo} size="tiny" />
                </MenuItem>

                <MenuItem className="footer__item text-corpus" name="legal notices" as={NavLink} to="/legal-notice">
                    Legal Notices
                </MenuItem>

                <MenuItem className="footer__item text-corpus" name="CGU" as={NavLink} to="/general-conditions-use">
                    General Conditions
                </MenuItem>

                <MenuItem className="footer__contact text-corpus" name="Contact">
                    <span>
                        Contact us&nbsp;: <a href="mailto:outerspacetech.io">contact@outer-space-tech.com</a>
                    </span>
                </MenuItem>
            </Menu>
        </Segment>
    );
}
