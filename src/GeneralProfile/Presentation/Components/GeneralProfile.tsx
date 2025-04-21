import React from "react";
import ProfileSection from "./ProfileSection";

interface GeneralProfileProps {
    mainBackground: string,
    profilesSections: {
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
    }[]
}

const GeneralProfile = ({
    mainBackground,
    profilesSections
}: GeneralProfileProps) => {

    return (
        <section
            style={{
                '--backgroundImage': `${mainBackground}`
            } as React.CSSProperties}
        >
            <ul>


                {
                    profilesSections.map(profileSection => {
                        const {
                            mainTitle,
                            sections,
                            idSection
                        } = profileSection;

                        return (
                            <li key={mainTitle}>
                                <ProfileSection
                                    mainTitle={mainTitle}
                                    sections={sections}
                                    idSection={idSection}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default GeneralProfile;