import IndividualCover from "./IndividualCover";
import './style/mainCovers.css'

interface Props {
    alt1: string,
    alt2: string,
    alt3: string,
    alt4: string,
    url1: string,
    url2: string,
    url3: string,
    url4: string,
    linkCoverOne: string,
    ariaLabelCoverOne: string,
    linkCoverTwo: string,
    ariaLabelCoverTwo: string,
    idNav: string
}

const MainCovers = (
    {
        alt1,
        alt2,
        alt3,
        alt4,
        url1,
        url2,
        url3,
        url4,
        linkCoverOne,
        ariaLabelCoverOne,
        linkCoverTwo,
        ariaLabelCoverTwo,
        idNav
    }: Props
) => {
    return (
        <nav
            id={idNav}
            className="MainCovers"
        >
            <IndividualCover
                alt1={alt1}
                alt2={alt2}
                ariaLabel={ariaLabelCoverOne}
                path={linkCoverOne}
                url1={url1}
                url2={url2}
            />

            <IndividualCover
                alt1={alt3}
                alt2={alt4}
                ariaLabel={ariaLabelCoverTwo}
                path={linkCoverTwo}
                url1={url3}
                url2={url4}
            />
        </nav>
    )
}

export default MainCovers;