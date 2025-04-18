import { Link } from "react-router-dom";

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
        <section>
            <h2>{title}</h2>
            <p>{subT}</p>

            {
                links.length > 0
                && ariaLabelBar.length > 0
                &&

                <ul aria-label={ariaLabelBar}>
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
                                    key={ariaLabelLink}
                                >
                                    <Link
                                        aria-label={ariaLabelLink}
                                        to={to}>
                                        <img
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