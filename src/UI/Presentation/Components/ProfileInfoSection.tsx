interface ProfileInfoSectionProps {
    info: string,
    iframeAriaLabel?: string,
    iframeUrl?: string,
    iframeTitle?: string,
    imgAlt?: string,
    imgUrl?: string,
}

const ProfileInfoSection = ({
    info,
    iframeAriaLabel,
    iframeUrl,
    iframeTitle,
    imgAlt,
    imgUrl
}: ProfileInfoSectionProps) => {
    return (
        <div>
            <p>
                {info}
            </p>
            {
                iframeAriaLabel && iframeUrl && iframeTitle
                    ? <iframe
                        title={iframeTitle}
                        role='iframe'
                        width="560"
                        height="315"
                        aria-label={iframeAriaLabel}
                        src={iframeUrl} />
                    :
                    <img
                        src={imgUrl}
                        alt={imgAlt}
                        loading="lazy"
                    />
            }
        </div>
    )
}

export default ProfileInfoSection;