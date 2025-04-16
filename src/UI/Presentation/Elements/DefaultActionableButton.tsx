import React from 'react';
import './styles/defaultActionableButton.css'

interface Props {
    textDefaultActionableButton: string,
    urlDefaultActionableButton?: string,
    altDefaultActionableButton?: string,
    arialLabel?: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    onClickDefaultActionableButton: () => void
}

const DefaultActionableButton = (
    {
        arialLabel,
        textDefaultActionableButton,
        urlDefaultActionableButton = "",
        altDefaultActionableButton = "",
        top = '',
        left = '',
        right = '',
        bottom = '',
        onClickDefaultActionableButton
    }: Props
) => {
    return (
        <button
            className="DefaultActionableButton"
            aria-label={arialLabel}
            onClick={() => onClickDefaultActionableButton()}
            style={{
                '--top': `${top}`,
                '--left': `${left}`,
                '--right': `${right}`,
                '--bottom': `${bottom}`,
            } as React.CSSProperties}
        >
            <img
                className="DefaultActionableButton__icon"
                loading="lazy"
                src={urlDefaultActionableButton}
                alt={altDefaultActionableButton}
            />
            <span className="DefaultActionableButton__text">
                {textDefaultActionableButton}
            </span>
        </button>
    )
};

export default DefaultActionableButton;