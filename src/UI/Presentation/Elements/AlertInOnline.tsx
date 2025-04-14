import { useEffect, useState } from "react";
import './styles/alertInOnline.css'

export default function AlertInOnline() {
    const [showAlertOnline, setShowAlertOnline] = useState<boolean>(false);
    const [onlineState, setOnlineState] = useState<boolean>(navigator.onLine);

    useEffect(() => {
        const inOnline = () => {
            setOnlineState(true);

            setShowAlertOnline(true);
            setTimeout(() => setShowAlertOnline(false), 3000);
        };

        const inOffline = () => {
            setOnlineState(false);

            setShowAlertOnline(true);
            setTimeout(() => setShowAlertOnline(false), 3000);
        };

        window.addEventListener('online', inOnline);
        window.addEventListener('offline', inOffline);

        return () => {
            window.removeEventListener('online', inOnline);
            window.removeEventListener('offline', inOffline);
        };
    }, []);

    if (!showAlertOnline) return null;
    return (
        <div
            aria-label={onlineState ? "Conexión obtenida" : "Conexión perdida"}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="AlertInOnline"
        >
            <img
                loading="lazy"
                src="public/pictures/icons/about.png"
                alt=""
                aria-hidden="true"
                className="AlertInOnline__icon"
            />
            <span className="AlertInOnline__alert">
                {onlineState ? "¡Conexión Obtenida!" : "¡Conexión Perdida!"}
            </span>
        </div>
    );
}
