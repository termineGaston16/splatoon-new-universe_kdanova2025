import ProfileInfoSection from "../../../UI/Presentation/Components/ProfileInfoSection";

interface GeneralProfileIdolProps {
    frontPageAlt: string,
    frontPageUrl: string,
    nameIdols: string,
    descriptionIdols: string,
    sections: {
        info: string,
        iframeAriaLabel?: string,
        iframeUrl?: string,
        imgAlt?: string,
        imgUrl?: string,
    }[]
}

const GeneralProfileIdol = ({
    frontPageAlt,
    frontPageUrl,
    nameIdols,
    descriptionIdols,
    sections
}: GeneralProfileIdolProps) => {
    return (
        <section>
            <header>
                <img
                    src={frontPageUrl}
                    alt={frontPageAlt}
                    loading="lazy"
                />
                <h2>{nameIdols}</h2>
                <p>
                    {descriptionIdols}
                </p>
            </header>

            {
                sections.map((section, index) => {
                    const {
                        info,
                        iframeAriaLabel,
                        iframeUrl,
                        imgAlt,
                        imgUrl
                    } = section;

                    return (
                        <ul>
                            <li
                                key={index}>
                                <ProfileInfoSection
                                    info={info}
                                    iframeAriaLabel={iframeAriaLabel}
                                    iframeUrl={iframeUrl}
                                    imgAlt={imgAlt}
                                    imgUrl={imgUrl}
                                />
                            </li>
                        </ul>
                    )
                })
            }
        </section>
    )
}

export default GeneralProfileIdol;