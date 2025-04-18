interface Props {
    alt: string,
    url: string,
    text: string,
    to: string,
    ariaLabel: string
}

const ProfileDataSelector = ({
    alt,
    url,
    text,
    to,
    ariaLabel
}: Props) => {
    return (
        <a
            className="ProfileSideBar__selectors__selector--link"
            aria-label={ariaLabel}
            href={to}
        >
            <img
                className="ProfileSideBar__selectors__selector__icon"
                alt={alt}
                src={url}
                loading="lazy"
            />
            <span className="ProfileSideBar__selectors__selector__text">
                {text}
            </span>
        </a>
    )
}

export default ProfileDataSelector;