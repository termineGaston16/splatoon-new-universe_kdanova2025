import { useEffect } from "react"

export default function Offline() {

    //Esto detecta si hay internet y recarga solo la página
    useEffect(() => {
        const handleOnline = () => {
            setTimeout(() => window.location.reload(), 1000);
        };

        window.addEventListener('online', handleOnline);

        return () => window.removeEventListener('online', handleOnline);
    }, [])

    return (
        <section>
            <img
                loading="lazy"
                src="public/pictures/details/alert-message.png"
                alt="Alerta del estado Offline" />
            <p>
                <span>¡Oh no!</span>
                Parece que la conexión a internet se ha perdido.
            </p>
            <button
                onClick={() => window.location.reload()}
                type="button">Reintentar</button>
        </section>
    )
}