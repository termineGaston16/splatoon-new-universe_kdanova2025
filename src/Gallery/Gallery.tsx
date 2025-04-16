import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export default function Gallery() {

    const galleryContent: {
        alt: string,
        url: string,
        text: string
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
                text: 'Logo Principal'
            },
            {
                alt: `Letra S color transparente, con borde violeta pastel y una sombra de verde pastel`,
                url: '/pictures/logos/splatoon_main-header_mobile.png',
                text: 'Logo de Navegación en vista Mobile'
            },
            {
                alt: `Letra S color transparente, con borde rosa pastel y una sombra de verde agua, acompañada de un numero dos en color rojo pastel`,
                url: '/pictures/logos/splatoon2_main-header_mobile.png',
                text: 'Logo 2 de Navegación en vista Mobile'
            }
            ,
            {
                alt: `Letra S color transparente, con borde amarillo pastel y una sombra de violeta pastel, acompañada de un numero tres en color amarillo fuerte`,
                url: '/pictures/logos/splatoon3_main-header_mobile.png',
                text: 'Logo 3 de Navegación en vista Mobile'
            }
            ,
            {
                alt: `Palabra Splatoon de color transparente, con borde violeta pastel y una sombra de verde pastel`,
                url: '/pictures/logos/splatoon_main-header.png',
                text: 'Logo 1 de Navegación en vista Escritorio'
            }
            ,
            {
                alt: `Palabra Splatoon de color transparente, con borde rosa pastel y una sombra de verde agua, acompañada de un numero dos en color rojo pastel`,
                url: '/pictures/logos/splatoon2_main-header.png',
                text: 'Logo 2 de Navegación en vista Escritorio'
            }
            ,
            {
                alt: `Palabra Splatoon de color transparente, con borde amarillo pastel y una sombra de violeta pastel, acompañada de un numero tres en color amarillo fuerte`,
                url: '/pictures/logos/splatoon3_main-header.png',
                text: 'Logo 3 de Navegación en vista Escritorio'
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
                url: '\pictures\logos\fyre_flowingBar.png',
                text: 'Angie Inkling'
            }
            ,
            {
                alt: `Palabra Splatoon de color blanco, con borde negro y sombra verde fuerte, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/splatoon1-mainCovers.png',
                text: 'Splatoon 1 Portada Individual'
            }
            ,
            {
                alt: `Palabra Splatoon dos de color blanco, con borde negro y sombra verde fuerte, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/splatoon2-mainCovers.png',
                text: 'Splatoon 2 Portada Individual'
            }
            ,
            {
                alt: `Palabra Splatoon tres de color blanco, con borde negro y sombra amarillo fuerte, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/splatoon3-mainCovers.png',
                text: 'Splatoon 3 Portada Individual'
            }
            ,
            {
                alt: `Un Icóno de dos guantes blancos entre sí junto a una flecha en el medio, rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/squidSisters-mainCovers.png',
                text: 'Squid Sisters Portada Individual'
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
                text: 'Off The Hook Portada Individual'
            }
            ,
            {
                alt: `Logotipo circular en color blanco, con un bordeado de color azul, rojo y amarillo y rodeado de la pregunta: ¿Quiénes son?`,
                url: '/pictures/logos/deepCut-mainCovers.png',
                text: 'Deep Cut Portada Individual'
            }
        ]

    const galleryRef = useRef(null);
    const rowVirtualizer = useVirtualizer({
        count: galleryContent.length,
        estimateSize: () => 120,
        getScrollElement: () => galleryRef.current
    })

    return (
        <section>
            <h2>Galería de Imágenes</h2>
            <p>
                Ilustraciones realizadas por KDA/NOVA para esta página. Son libre de uso (No Copyright)
            </p>

            <ul
                aria-label="Galería de Ilustraciones"
                ref={galleryRef}
                style={{
                    height: '500px',
                    overflowY: 'scroll'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: rowVirtualizer.getTotalSize(),
                        margin: '0',
                        padding: '0',
                        position: 'relative'
                    }}
                >
                    {
                        rowVirtualizer.getVirtualItems().map(rowVirtual => {
                            const { key, index } = rowVirtual;

                            return (
                                <li
                                    key={key}
                                    style={{
                                        width: '100%',
                                        top: '0',
                                        left: '0',
                                        position: 'absolute',
                                        transform: `translateY(${rowVirtual.start}px)`
                                    }}
                                >
                                    <figure>
                                        <img
                                            loading="lazy"
                                            src={galleryContent[index].url}
                                            alt={galleryContent[index].alt}
                                        />
                                        <figcaption>
                                            {galleryContent[index].text}
                                        </figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </div>
            </ul>
        </section>
    );
}
