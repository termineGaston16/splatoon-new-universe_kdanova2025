import { Link } from "react-router-dom";

export default function MainNavbar() {
    return (
        <nav
            id="main-navbar"
        >
            <ul>
                <li>
                    <Link to="/perfil-general=splatoon">
                        <img
                            src="public/pictures/logos/splatoon_main-header_mobile.png"
                            loading="lazy"
                            alt="Acceder al perfil Splatoon desde la navegación principal"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/perfil-general=splatoon2">
                        <img
                            src="public/pictures/logos/splatoon2_main-header_mobile.png"
                            loading="lazy"
                            alt="Acceder al perfil Splatoon 2 desde la navegación principal"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/perfil-general=splatoon3">
                        <img
                            src="public/pictures/logos/splatoon3_main-header_mobile.png"
                            loading="lazy"
                            alt="Acceder al perfil Splatoon 3 desde la navegación principal"
                        />
                    </Link>
                </li>
            </ul>
        </nav >
    )
}