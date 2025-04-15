import { Link } from "react-router-dom";
import './styles/mainNavbar.css'

export default function MainNavbar() {

    return (
        <nav
            id="main-navbar"
            className="mainNavbar"
        >
            <ul className="mainNavbar__listOfNavigations">
                <li className="mainNavbar__listOfNavigations__navigation">
                    <Link
                        className="mainNavbar__listOfNavigations__navigation--link"
                        to="/perfil-general=splatoon"
                    >
                        <picture>
                            <source
                                media="(min-width: 320px) and (max-width: 768px)"
                                srcSet="public/pictures/logos/splatoon_main-header_mobile.png" />
                            <img
                                style={{ '--hoverColor': '78, 174, 78' } as React.CSSProperties}
                                className="mainNavbar__listOfNavigations__navigation--link__picture--sp1"
                                src="public/pictures/logos/splatoon_main-header.png"
                                loading="lazy"
                                alt="Acceder al perfil Splatoon desde la navegación principal"
                            />
                        </picture>
                    </Link>
                </li>
                <li className="mainNavbar__listOfNavigations__navigation">
                    <Link
                        className="mainNavbar__listOfNavigations__navigation--link"
                        to="/perfil-general=splatoon2">
                        <picture>
                            <source
                                media="(min-width: 320px) and (max-width: 768px)"
                                srcSet="public/pictures/logos/splatoon2_main-header_mobile.png" />

                            <img
                                style={{ '--hoverColor': '89, 248, 179' } as React.CSSProperties}
                                className="mainNavbar__listOfNavigations__navigation--link__picture"
                                src="public/pictures/logos/splatoon2_main-header.png"
                                loading="lazy"
                                alt="Acceder al perfil Splatoon 2 desde la navegación principal"
                            />
                        </picture>
                    </Link>
                </li>
                <li className="mainNavbar__listOfNavigations__navigation">
                    <Link
                        className="mainNavbar__listOfNavigations__navigation--link"
                        to="/perfil-general=splatoon3">
                        <picture>
                            <source
                                media="(min-width: 320px) and (max-width: 768px)"
                                srcSet="public/pictures/logos/splatoon3_main-header_mobile.png" />
                            <img
                                style={{ '--hoverColor': '111, 0, 255' } as React.CSSProperties}
                                className="mainNavbar__listOfNavigations__navigation--link__picture"
                                src="public/pictures/logos/splatoon3_main-header.png"
                                loading="lazy"
                                alt="Acceder al perfil Splatoon 3 desde la navegación principal"
                            />
                        </picture>
                    </Link>
                </li>
            </ul>
        </nav >
    )
}