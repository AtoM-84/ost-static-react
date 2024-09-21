import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import HeaderMenuDesktop from "../../elements/Header/HeaderMenuDesktop/HeaderMenuDesktop.tsx";
import HeaderMenuMobile from "../../elements/Header/HeaderMenuMobile/HeaderMenuMobile.tsx";
import Footer from "../../elements/Footer/Footer";

import "./Root.scss";

export default function Root() {
    const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    // on récupère l'URL pour surveiller lorsqu'elle change
    const { pathname } = useLocation();

    useEffect(() => {
        // on va déclencher le scroll à chaque changement de "page" => chaque changement d'url
        window.scrollTo(0, 0);
    }, [pathname]);

    // this file is a layout for the application. We put the elements statics (header and footer) and the "outlet" display the dynamic part for each page.
    return (
        <div>
            {isDesktop && <HeaderMenuDesktop />}
            {isMobile && <HeaderMenuMobile />}
            <Outlet />
            <Footer />
        </div>
    );
}
