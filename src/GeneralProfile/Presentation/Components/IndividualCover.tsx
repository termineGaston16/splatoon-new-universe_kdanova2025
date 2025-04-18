import { Link } from "react-router-dom";

interface Props {
    alt1: string,
    alt2: string,
    url1: string,
    url2: string,
    path: string,
    ariaLabel: string
}

const IndividualCover = (
    {
        alt1,
        alt2,
        url1,
        url2,
        path,
        ariaLabel,
    }: Props
) => {
    return (
        <Link
            className="MainCovers--link"
            aria-label={ariaLabel}
            to={path}>
            <img
                className="MainCovers__cover--bg"
                loading="lazy"
                src={url1}
                alt={alt1} />
            <img
                className="MainCovers__cover--lg"
                loading="lazy"
                src={url2}
                alt={alt2} />
        </Link>
    )
};

export default IndividualCover;