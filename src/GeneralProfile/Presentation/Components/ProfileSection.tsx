import ProfileInfoSection from "../../../UI/Presentation/Components/ProfileInfoSection";

interface ProfileSectionProps {
    mainTitle: string,
    sections: {
        info: string,
        iframeAriaLabel?: string,
        iframeUrl?: string,
        imgAlt?: string,
        imgUrl?: string,
    }[]
}

const ProfileSection = ({
    mainTitle,
    sections
}: ProfileSectionProps) => {

    return (
        <article>
            <h2>{mainTitle}</h2>
            <ul>
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
                        )
                    })
                }
            </ul>
        </article>
    )
}

export default ProfileSection;