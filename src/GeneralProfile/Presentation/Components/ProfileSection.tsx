import ProfileInfoSection from "../../../UI/Presentation/Components/ProfileInfoSection";

interface ProfileSectionProps {
    idSection: string,
    mainTitle: string,
    sections: {
        info: string,
        iframeAriaLabel?: string,
        iframeUrl?: string,
        iframeTitle?: string,
        imgAlt?: string,
        imgUrl?: string,
    }[]
}

const ProfileSection = ({
    mainTitle,
    sections,
    idSection
}: ProfileSectionProps) => {

    return (
        <article id={idSection}>
            <h2>{mainTitle}</h2>
            <ul>
                {
                    sections.map((section, index) => {
                        const {
                            info,
                            iframeAriaLabel,
                            iframeUrl,
                            iframeTitle,
                            imgAlt,
                            imgUrl
                        } = section;

                        return (
                            <li
                                key={index}>
                                <ProfileInfoSection
                                    info={info}
                                    iframeAriaLabel={iframeAriaLabel}
                                    iframeUrl={iframeUrl}
                                    iframeTitle={iframeTitle}
                                    imgAlt={imgAlt}
                                    imgUrl={imgUrl}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </article>
    )
}

export default ProfileSection;