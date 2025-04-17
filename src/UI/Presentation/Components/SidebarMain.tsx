import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import './styles/sidebarMain.css'
import { motion } from "framer-motion";

interface SidebarMainProps {
    callback: () => void
}

const SidebarMain = ({
    callback
}: SidebarMainProps) => {
    return (
        <motion.aside
            className="SidebarMain"
            initial={{
                translateX: -300
            }}
            animate={{
                translateX: 0
            }}
            exit={{
                translateX: -300
            }}
            transition={{
                duration: .2
            }}
        >
            <Link
                aria-label="Acceder al perfil Splatoon desde el menú desplegable"
                to="/"
                className="SidebarMain__mainLogo--link"
            >
                <img
                    loading="lazy"
                    src="/pictures/logos/splatoon-new-universe_logo-principal.png"
                    alt="Logo principal de Splatoon New Universe"
                    className="SidebarMain__mainLogo"
                />
            </Link>

            <p className="SidebarMain__copyright">
                © Nintendo 2025 - All rights reserved. <br />
                Fan-page by KDA/NOVA.
            </p>

            <nav className="SidebarMain__navigation">
                <ul className="SidebarMain__navigation__list">
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder a la página principal"
                            to={"/"}
                        >
                            <MdHomeFilled
                                className="SidebarMain__navigation__list__item__ReactICON"
                            />
                            <span className="SidebarMain__navigation__list__item__text">HOME</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder al perfil Splatoon desde la nevegacion desplegable"
                            to={"/perfil-general=splatoon"}>
                            <img
                                style={{
                                    width: '1em'
                                }}
                                className="SidebarMain__navigation__list__item__imgICON"
                                loading="lazy"
                                alt="Acceder al perfil Splatoon desde el menú desplegable"
                                src="/pictures/logos/splatoon_main-header_mobile.png"
                            />
                            <span className="SidebarMain__navigation__list__item__text">SPLATOON</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder al perfil Splatoon 2 desde el menú desplegable"
                            to={"/perfil-general=splatoon2"}>
                            <img
                                className="SidebarMain__navigation__list__item__imgICON"
                                loading="lazy"
                                alt="Acceder al perfil Splatoon 2 desde el menú desplegable"
                                src="/pictures/logos/splatoon2_main-header_mobile.png"
                            />
                            <span className="SidebarMain__navigation__list__item__text">SPLATOON 2</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder al perfil Splatoon 3 desde el menú desplegable"
                            to={"/perfil-general=splatoon3"}>
                            <img
                                className="SidebarMain__navigation__list__item__imgICON"
                                loading="lazy"
                                alt="Acceder al perfil Splatoon 3 desde el menú desplegable"
                                src="/pictures/logos/splatoon3_main-header_mobile.png"
                            />
                            <span className="SidebarMain__navigation__list__item__text">SPLATOON 3</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder al perfil de las Squid Sisters"
                            to={"/idols=squid-sisters"}>
                            <img
                                className="SidebarMain__navigation__list__item__imgICON"
                                loading="lazy"
                                alt="Acceder al perfil de las Squid Sisters"
                                src="/pictures/icons/squidSisters.png"
                            />
                            <span className="SidebarMain__navigation__list__item__text">SQUID SISTERS</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder al perfil de Off The Hook"
                            to={"/idols=off-the-hook"}>
                            <img
                                className="SidebarMain__navigation__list__item__imgICON"
                                loading="lazy"
                                alt="Acceder al perfil de Off The Hook"
                                src="/pictures/icons/offTheHook.png"
                            />
                            <span className="SidebarMain__navigation__list__item__text">OFF THE HOOK</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => callback()}
                        className="SidebarMain__navigation__list__item">
                        <Link
                            className="SidebarMain__navigation__list__item--link"
                            aria-label="Acceder al perfil de Deep Cut"
                            to={"/idols=deep-cut"}>
                            <img
                                className="SidebarMain__navigation__list__item__imgICON"
                                loading="lazy"
                                alt="Acceder al perfil de Deep Cut"
                                src="/pictures/icons/deepCut.png"
                            />
                            <span className="SidebarMain__navigation__list__item__text">DEEP CUT</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.aside >
    )
}

export default SidebarMain;