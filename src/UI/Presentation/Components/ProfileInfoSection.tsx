interface ProfileInfoSectionProps {
    info: string,
    iframeAriaLabel?: string,
    iframeUrl?: string,
    iframeTitle?: string,
    imgAlt?: string,
    imgUrl?: string,
    orderText: number
}

const ProfileInfoSection = ({
    info,
    iframeAriaLabel,
    iframeUrl,
    iframeTitle,
    imgAlt,
    imgUrl,
    orderText
}: ProfileInfoSectionProps) => {
    return (
        <div className="ProfileSection__sections__section__container">
            <p
                style={{
                    order: orderText,
                    textAlign: `${orderText % 2 === 0 ? 'start' : 'end'}`
                }}
                className="ProfileSection__sections__section__container__info">
                {info}
            </p>
            {
                iframeAriaLabel && iframeUrl && iframeTitle
                    ? <iframe
                        className="ProfileSection__sections__section__container__iframe"
                        title={iframeTitle}
                        role='iframe'
                        width="560"
                        height="315"
                        aria-label={iframeAriaLabel}
                        src={iframeUrl} />
                    :
                    <img
                        className="ProfileSection__sections__section__container__img"
                        src={imgUrl}
                        alt={imgAlt}
                        loading="lazy"
                    />
            }
        </div>
    )
}

export default ProfileInfoSection;