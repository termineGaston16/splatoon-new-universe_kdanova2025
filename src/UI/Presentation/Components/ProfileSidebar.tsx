import { Link } from "react-router-dom";
import ProfileDataSelector from "../Elements/ProfileDataSelector";
import './styles/profileSideBar.css'

interface Props {
    selectors: {
        alt: string,
        url: string,
        text: string,
        to: string,
        ariaLabel: string
    }[]
}

const ProfileSideBar = ({
    selectors
}: Props) => {
    return (
        <aside className="ProfileSideBar">
            <ul
                className="ProfileSideBar__selectors"
                aria-label="Selectores de Paneles">
                {
                    selectors.map((selectorInfo, index) => {
                        const {
                            alt,
                            ariaLabel,
                            text,
                            to,
                            url
                        } = selectorInfo;

                        return (
                            <li
                                className="ProfileSideBar__selectors__selector"
                                key={index}>
                                <ProfileDataSelector
                                    alt={alt}
                                    url={url}
                                    text={text}
                                    to={to}
                                    ariaLabel={ariaLabel}
                                />
                            </li>
                        )
                    })
                }
                <li
                    className="ProfileSideBar__selectors__selector">
                    <Link
                        to={'/'}
                        aria-label="Regresar al Menú Principal"
                        className="ProfileSideBar__selectors__selector--link">
                        <span className="ProfileSideBar__selectors__selector__text">
                            Volver
                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default ProfileSideBar;