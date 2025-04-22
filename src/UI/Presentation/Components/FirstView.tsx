import { useEffect } from 'react'
import './styles/firstView.css'

interface FirstViewProps {
    setMainBackground: React.Dispatch<React.SetStateAction<{
        backgroundUrl: string;
        backgroundPosition: string;
        backgroundSize: string;
        backgroundRepeat: string;
        backgroundAttachment: string;
    } | null>>
}

const FirstView = ({
    setMainBackground
}: FirstViewProps) => {

    useEffect(() => {
        document.title = 'Splatoon New Universe'
        setMainBackground(null)
    }, [])

    return (
        <header className='FirstView'>
            <img
                loading="lazy"
                alt="Logo Principal de Splatoon New Universe"
                src="/pictures/logos/splatoon-new-universe_logo-principal.png"
                className='FirstView__mainLogo'
            />

            <iframe
                role="iframe"
                aria-label="Conmemoración del lanzamiento de Splatoon 3"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/t0dX_keXyVc?si=cHmZ-s4EcN3agO6H"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className='FirstView__videoPresentation'
            />

            <p className='FirstView__credits'>
                <span className='FirstView__credits--span'>Nombre del vídeo:</span> スプラトゥーン3 発売記念】SPLALBUM <br />
                <span className='FirstView__credits--span'>Autor:</span>  Kirisame Rain
            </p>
        </header>
    )
}

export default FirstView;