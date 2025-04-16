export default function FirstView() {
    return (
        <header>
            <img
                loading="lazy"
                alt="Logo Principal de Splatoon New Universe"
                src="/pictures/logos/splatoon-new-universe_logo-principal.png"
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
                allowFullScreen />

            <p>
                <span>Nombre del vídeo:</span>
                【スプラトゥーン3 発売記念】SPLALBUM
            </p>

            <p>
                <span>Autor:</span>
                Kirisame Rain
            </p>

        </header>
    )
}