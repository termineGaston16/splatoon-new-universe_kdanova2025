import { useEffect, useState } from 'react';
import './styles/offline.css'

export default function Offline() {

    const [showOffline, setShowOffline] = useState<boolean>(false);

    useEffect(() => {
        const handleOnline = () => {
            setTimeout(() => {
                window.location.reload()
                setShowOffline(false);
            }, 1000);
        };

        const handleOffline = () => {
            setShowOffline(true);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('online', handleOffline);
        }
    }, [])

    if (!showOffline) return null;

    return (
        <section className="Offline">
            <img
                loading="lazy"
                src="public/pictures/details/alert-message.png"
                alt="Alerta del estado Offline"
                className="Offline__sign"
            />
            <p className="Offline__alert">
                <span className="Offline__alert--span">¡Oh no!</span> <br />
                Parece que la conexión a internet se perdió.
            </p>
            <button
                onClick={() => window.location.reload()}
                type="button"
                className="Offline__btnRetry"
            >Reintentar</button>
        </section>
    )
}