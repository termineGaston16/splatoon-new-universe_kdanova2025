import { motion } from "framer-motion"

interface BlackBackgroundProps {
    zIndex: number,
    animation: boolean
}

const BlackBackground = ({
    zIndex,
    animation
}: BlackBackgroundProps) => {
    return (
        <motion.div
            aria-hidden='true'
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.82)',
                zIndex: zIndex
            }}
            initial={
                animation && {
                    opacity: 0
                }
            }
            animate={
                animation && {
                    opacity: 1
                }
            }
            exit={
                animation
                    ? {
                        opacity: 0
                    }
                    : undefined
            }
            transition={{
                duration: .15
            }}
        ></motion.div>
    )
}

export default BlackBackground;