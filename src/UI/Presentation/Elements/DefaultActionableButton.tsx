import { motion } from 'framer-motion';
import './styles/defaultActionableButton.css'

interface Props {
    textDefaultActionableButton: string,
    urlDefaultActionableButton?: string,
    altDefaultActionableButton?: string,
    arialLabel?: string,
    classCss?: string
    onClickDefaultActionableButton: () => void
}

const DefaultActionableButton = (
    {
        arialLabel,
        textDefaultActionableButton,
        urlDefaultActionableButton = "",
        altDefaultActionableButton = "",
        classCss = '',
        onClickDefaultActionableButton
    }: Props
) => {
    return (
        <motion.button
            className={`DefaultActionableButton ${classCss}`}
            aria-label={arialLabel}
            onClick={() => onClickDefaultActionableButton()}

            initial={
                classCss === 'GoUpButton' && {
                    translateX: 100
                }
            }
            animate={
                classCss === 'GoUpButton' && {
                    translateX: 0
                }
            }
            exit={
                classCss === 'GoUpButton'
                    ? { translateX: 100 }
                    : undefined
            }
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
        </motion.button>
    )
};

export default DefaultActionableButton;