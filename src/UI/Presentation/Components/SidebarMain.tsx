import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SidebarMain() {
    return (
        <aside>
            <Link
                aria-label="Acceder al perfil Splatoon desde el menú desplegable"
                to="/">
                <img
                    loading="lazy"
                    src="public/pictures/logos/splatoon-new-universe_logo-principal.png"
                    alt="Logo principal de Splatoon New Universe"
                />
            </Link>

            <p>
                © Nintendo 2025 -All rights reserved.
                Fan-page by KDA/NOVA.
            </p>

            <nav>
                <ul>
                    <li>
                        <Link
                            aria-label="Acceder a la página principal"
                            to={"/"}>
                            <MdHomeFilled />
                            <span>HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Acceder al perfil Splatoon desde la nevegacion desplegable"
                            to={"/perfil-general=splatoon"}>
                            <img
                                loading="lazy"
                                alt="Acceder al perfil Splatoon desde el menú desplegable"
                                src="public/pictures/logos/splatoon_main-header_mobile.png"
                            />
                            <span>SPLATOON</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Acceder al perfil Splatoon 2 desde el menú desplegable"
                            to={"/perfil-general=splatoon2"}>
                            <img
                                loading="lazy"
                                alt="Acceder al perfil Splatoon 2 desde el menú desplegable"
                                src="public/pictures/logos/splatoon2_main-header_mobile.png"
                            />
                            <span>SPLATOON 2</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Acceder al perfil Splatoon 3 desde el menú desplegable"
                            to={"/perfil-general=splatoon3"}>
                            <img
                                loading="lazy"
                                alt="Acceder al perfil Splatoon 3 desde el menú desplegable"
                                src="public/pictures/logos/splatoon3_main-header_mobile.png"
                            />
                            <span>SPLATOON 3</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Acceder al perfil de las Squid Sisters"
                            to={"/idols=squid-sisters"}>
                            <img
                                loading="lazy"
                                alt="Acceder al perfil de las Squid Sisters"
                                src="public/pictures/icons/squidSisters.png"
                            />
                            <span>SQUID SISTERS</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Acceder al perfil de Off The Hook"
                            to={"/idols=off-the-hook"}>
                            <img
                                loading="lazy"
                                alt="Acceder al perfil de Off The Hook"
                                src="public/pictures/icons/offTheHook.png"
                            />
                            <span>OFF THE HOOK</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Acceder al perfil de Deep Cut"
                            to={"/idols=deep-cut"}>
                            <img
                                loading="lazy"
                                alt="Acceder al perfil de Deep Cut"
                                src="public/pictures/icons/deepCut.png"
                            />
                            <span>DEEP CUT</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside >
    )
}