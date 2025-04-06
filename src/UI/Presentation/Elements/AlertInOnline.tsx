interface Props {
    state?: boolean | undefined
}

function AlertInOnline(
    {
        state
    }: Props
) {

    if (state === undefined) return null;

    return (
        <div
            aria-label={state ? "Conexión obtenida" : "Conexión perdida"}
            role="status"
            aria-live="polite"
            aria-atomic="true"
        >
            <img
                loading="lazy"
                src="public/pictures/icons/about.png"
                alt=""
                aria-hidden="true"
            />
            <span>
                {state ? "¡Conexión Obtenida!" : "¡Conexión Perdida!"}
            </span>
        </div>
    )

}

export default AlertInOnline;