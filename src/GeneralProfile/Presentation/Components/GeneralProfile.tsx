import React, { useEffect } from "react";
import ProfileSection from "./ProfileSection";
import './style/generalProfile.css'
import { useLocation } from "react-router-dom";

interface GeneralProfileProps {
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
    }[],
    setMainBackground: React.Dispatch<React.SetStateAction<{
        backgroundUrl: string;
        backgroundPosition: string;
        backgroundSize: string;
        backgroundRepeat: string;
        backgroundAttachment: string;
    } | null>>,
    mainBackground: {
        backgroundUrl: string;
        backgroundPosition: string;
        backgroundSize: string;
        backgroundRepeat: string;
        backgroundAttachment: string;
    } | null
}

const GeneralProfile = ({
    mainBackground,
    profilesSections,
    setMainBackground
}: GeneralProfileProps) => {
    const location = useLocation();

    useEffect(() => {
        setMainBackground(mainBackground)
        return () => {
            setMainBackground(null)
        }
    }, [location.pathname])

    return (
        <section
            className="GeneralProfile"
        >
            <ul className="GeneralProfile__profilesSections">


                {
                    profilesSections.map(profileSection => {
                        const {
                            mainTitle,
                            sections,
                            idSection
                        } = profileSection;

                        return (
                            <li
                                className="GeneralProfile__profilesSections__sections"
                                key={mainTitle}>
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