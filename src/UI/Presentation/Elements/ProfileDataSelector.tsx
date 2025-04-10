import { Link } from "react-router-dom";

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
        <Link
            aria-label={ariaLabel}
            to={to}
        >
            <img
                alt={alt}
                src={url}
                loading="lazy"
            />
            <span>
                {text}
            </span>
        </Link>
    )
}

export default ProfileDataSelector;