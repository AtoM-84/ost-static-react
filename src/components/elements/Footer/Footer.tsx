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
                    Mentions Légales
                </MenuItem>

                <MenuItem className="footer__item text-corpus" name="CGU" as={NavLink} to="/general-conditions-use">
                    Conditions Générales d&apos;Utilisation
                </MenuItem>

                <MenuItem className="footer__contact text-corpus" name="Contact">
                    <span>
                        Contactez-nous&nbsp;: <a href="mailto:outerspacetech.io">outer-space-tech.io</a>
                    </span>
                </MenuItem>
            </Menu>
        </Segment>
    );
}
