interface ProfileInfoSectionProps {
    info: string,
    iframeAriaLabel?: string,
    iframeUrl?: string,
    imgAlt?: string,
    imgUrl?: string,
}

const ProfileInfoSection = ({
    info,
    iframeAriaLabel,
    iframeUrl,
    imgAlt,
    imgUrl
}: ProfileInfoSectionProps) => {
    return (
        <div>
            <p>
                {info}
            </p>
            {
                iframeAriaLabel && iframeUrl
                    ? <iframe
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