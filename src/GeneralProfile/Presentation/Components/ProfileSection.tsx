import ProfileInfoSection from "../../../UI/Presentation/Components/ProfileInfoSection";
import './style/profileSection.css'

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
        <article
            className="ProfileSection"
            id={idSection}>
            <h2
                className="ProfileSection__title"
            >{mainTitle}
            </h2>
            <ul
                className="ProfileSection__sections"
            >
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
                                className="ProfileSection__sections__section"
                                key={index}>
                                <ProfileInfoSection
                                    info={info}
                                    iframeAriaLabel={iframeAriaLabel}
                                    iframeUrl={iframeUrl}
                                    iframeTitle={iframeTitle}
                                    imgAlt={imgAlt}
                                    imgUrl={imgUrl}
                                    orderText={
                                        index % 2 === 0 ? 0 : 1
                                    }
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