import ProfileDataSelector from "../Elements/ProfileDataSelector";

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
        <aside>
            <ul aria-label="Selectores de Paneles">
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
            </ul>
        </aside>
    )
}

export default ProfileSideBar;