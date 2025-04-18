import { Link } from "react-router-dom";
import './styles/flowingBar.css'

interface Props {
    title: string,
    subT: string,
    ariaLabelBar?: string,
    links: {
        ariaLabelLink: string,

        to?: string,
        alt?: string,
        src?: string,
        cssLink?: string
    }[]
};

const FlowingBar = (
    {
        title,
        subT,
        links,
        ariaLabelBar = ''
    }: Props
) => {
    return (
        <section className="FlowingBar">
            <h2 className="FlowingBar__title">{title}</h2>
            <p className="FlowingBar__subT">{subT}</p>

            {
                links.length > 0
                && ariaLabelBar.length > 0
                &&

                <ul
                    aria-label={ariaLabelBar}
                    className="FlowingBar__listRedirects"
                >
                    {
                        links.map(link => {

                            const {
                                ariaLabelLink,
                                alt = '',
                                cssLink = '',
                                src = '',
                                to = ''
                            } = link;

                            return (
                                <li
                                    className="FlowingBar__listRedirects__redirection"
                                    key={ariaLabelLink}
                                >
                                    <Link
                                        className="FlowingBar__listRedirects__redirection--link"
                                        aria-label={ariaLabelLink}
                                        to={to}>
                                        <img
                                            className="FlowingBar__listRedirects__redirection__icon"
                                            alt={alt}
                                            src={src}
                                            style={{
                                                rotate: cssLink
                                            }}
                                            loading="lazy"
                                        />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </section >
    )
};

export default FlowingBar;