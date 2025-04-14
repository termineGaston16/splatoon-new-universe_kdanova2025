import './styles/firstLoad.css'

export default function FirstLoad() {
    return (
        <section
            role="status"
            className='FirstLoad'
        >
            <img
                className='FirstLoad__loadingIcon'
                loading="lazy"
                src="./public/pictures/logos/loading-component.png"
                alt="Logotipo de carga del componente" />
            <span
                className='FirstLoad__loadingText'
            >Cargando recursos...</span>
        </section>
    )
}