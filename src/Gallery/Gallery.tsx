import { useEffect } from 'react';
import './style/gallery.css'

interface GalleryProps {
    setMainBackground: React.Dispatch<React.SetStateAction<{
        backgroundUrl: string;
        backgroundPosition: string;
        backgroundSize: string;
        backgroundRepeat: string;
        backgroundAttachment: string;
    } | null>>
}

const Gallery = ({
    setMainBackground
}: GalleryProps) => {

    const EXTRA_WIDTH = '6em';
    const galleryContent: {
        alt: string,
        url: string,
        text: string,
        pW?: string
    }[] = [
            {
                alt: `Letra S de color blanco, con borde negro y una sombra de color verde lima y por encima la palabra new sobre una mancha de pintura color limón`,
                url: '/pictures/logos/splatoon-new-universe_favicon.webp',
                text: 'Favicon'
            },
            {
                alt: `Letra S de color blanco, con borde negro y una sombra de color verde lima`,
                url: '/pictures/logos/loading-component.png',
                text: 'Logo de Cargando'
            },
            {
                alt: `Palabra Splatoon de color blanco, con bordes negros y una sombra de color verde lima, por encima la palabra está escrito new sobre una mancha de pintura color limón y por debajo de la palabra está el subtitulo universe de color azulado y morado `,
                url: '/pictures/logos/splatoon-new-universe_logo-principal.png',
                text: 'Logo Principal',
                pW: EXTRA_WIDTH
            },
            {
                alt: `Letra S color transparente, con borde violeta pastel y una sombra de verde pastel`,
                url: '/pictures/logos/splatoon_main-header_mobile.png',
                text: 'Logo de Navegación en vista Mobile'
            },
            {
                alt: `Letra S color transparente, con borde rosa pastel y una sombra de verde agua, acompañada de un numero dos en color rojo pastel`,
                url: '/pictures/logos/splatoon2_main-header_mobile.png',
                text: 'Logo 2 de Navegación en vista Mobile',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Letra S color transparente, con borde amarillo pastel y una sombra de violeta pastel, acompañada de un numero tres en color amarillo fuerte`,
                url: '/pictures/logos/splatoon3_main-header_mobile.png',
                text: 'Logo 3 de Navegación en vista Mobile',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Palabra Splatoon de color transparente, con borde violeta pastel y una sombra de verde pastel`,
                url: '/pictures/logos/splatoon_main-header.png',
                text: 'Logo 1 de Navegación en vista Escritorio',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Palabra Splatoon de color transparente, con borde rosa pastel y una sombra de verde agua, acompañada de un numero dos en color rojo pastel`,
                url: '/pictures/logos/splatoon2_main-header.png',
                text: 'Logo 2 de Navegación en vista Escritorio',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Palabra Splatoon de color transparente, con borde amarillo pastel y una sombra de violeta pastel, acompañada de un numero tres en color amarillo fuerte`,
                url: '/pictures/logos/splatoon3_main-header.png',
                text: 'Logo 3 de Navegación en vista Escritorio',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Dibujo de calamar violeta`,
                url: '/pictures/logos/callie_flowingBar.png',
                text: 'Callie Inkling'
            }
            ,
            {
                alt: `Dibujo de calamar verde`,
                url: '/pictures/logos/marie_flowingBar.png',
                text: 'Marie Inkling'
            }
            ,
            {
                alt: `Dibujo de calamar beige`,
                url: '/pictures/logos/pearl_flowingBar.png',
                text: 'Perla Inkling'
            }
            ,
            {
                alt: `Dibujo de pulpito grisaseo`,
                url: '/pictures/logos/marina_flowingBar.png',
                text: 'Marina Octoling'
            }
            ,
            {
                alt: `Dibujo de pulpito azulado`,
                url: '/pictures/logos/shiver_flowingBar.png',
                text: 'Shiver Octoling'
            }
            ,
            {
                alt: `Dibujo de calamar anaranjado`,
                url: '/pictures/logos/fyre_flowingBar.png',
                text: 'Angie Inkling'
            }
            ,
            {
                alt: `Palabra Splatoon de color blanco, con borde negro y sombra verde fuerte, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/splatoon1-mainCovers.png',
                text: 'Splatoon 1 Portada Individual',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Palabra Splatoon dos de color blanco, con borde negro y sombra verde fuerte, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/splatoon2-mainCovers.png',
                text: 'Splatoon 2 Portada Individual',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Palabra Splatoon tres de color blanco, con borde negro y sombra amarillo fuerte, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/splatoon3-mainCovers.png',
                text: 'Splatoon 3 Portada Individual',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Un Icóno de dos guantes blancos entre sí junto a una flecha en el medio, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/squidSisters-mainCovers.png',
                text: 'Squid Sisters Portada Individual',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Imagen con estilo gráfico llamativo y colores neón 
                (rosa, verde menta y blanco) que presenta la frase en español 
                "¿Quiénes son?" en una tipografía grande y curvada. Al centro, aparece 
                un logotipo distorsionado con la palabra "Temis" estilizada, acompañada 
                de un símbolo de la letra "E" en un recuadro. El diseño tiene un efecto 
                tridimensional con sombras duplicadas y líneas dinámicas.`,
                url: '/pictures/logos/offTheHook-mainCovers.png',
                text: 'Off The Hook Portada Individual',
                pW: EXTRA_WIDTH
            }
            ,
            {
                alt: `Logotipo circular en color blanco, con un bordeado de color azul, rojo y amarillo y rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/deepCut-mainCovers.png',
                text: 'Deep Cut Portada Individual',
                pW: EXTRA_WIDTH
            }
        ]

    useEffect(() => setMainBackground(null), []);

    return (
        <section className="Gallery">
            <h2 className="Gallery__title">Galería de Imágenes</h2>
            <p className="Gallery__description">
                Ilustraciones realizadas por KDA/NOVA para esta página. Son libre de uso (No Copyright)
            </p>

            <ul className="Gallery__list">
                {galleryContent.map((item, index) => (
                    <li key={index} className="Gallery__list__ilust">
                        <figure className="Gallery__list__ilust--figure">
                            <img
                                loading="lazy"
                                src={item.url}
                                alt={item.alt}
                                className="Gallery__list__ilust__img"
                                style={
                                    item.pW
                                        ? { "--pW": item.pW } as React.CSSProperties
                                        : undefined
                                }

                            />
                            <figcaption className="Gallery__list__ilust__des">
                                {item.text}
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Gallery;