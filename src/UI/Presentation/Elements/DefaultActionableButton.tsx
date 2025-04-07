interface Props {
    textDefaultActionableButton: string,
    urlDefaultActionableButton?: string,
    altDefaultActionableButton?: string,
    onClickDefaultActionableButton: () => void
}

const DefaultActionableButton = (
    {
        textDefaultActionableButton,
        urlDefaultActionableButton = "",
        altDefaultActionableButton = "",
        onClickDefaultActionableButton
    }: Props
) => {
    return (
        <button
            aria-label="Abrir Menú Lateral"
            onClick={() => onClickDefaultActionableButton()}
        >
            <img
                loading="lazy"
                src={urlDefaultActionableButton}
                alt={altDefaultActionableButton}
            />
            <span>
                {textDefaultActionableButton}
            </span>
        </button>
    )
};

export default DefaultActionableButton;