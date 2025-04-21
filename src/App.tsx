import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";
import MainNavbar from "./UI/Presentation/Components/MainNavbar";
import DefaultActionableButton from "./UI/Presentation/Elements/DefaultActionableButton";
import { AnimatePresence } from "framer-motion";
import SidebarMain from "./UI/Presentation/Components/SidebarMain";
import BlackBackground from "./UI/Presentation/Elements/BlackBackground";
import FirstView from "./UI/Presentation/Components/FirstView";
import FlowingBar from "./UI/Presentation/Elements/FlowingBar";
import MainCovers from "./GeneralProfile/Presentation/Components/MainCovers";
import MainFooter from "./UI/Presentation/Components/MainFooter";
import Gallery from "./Gallery/Gallery";
import ProfileSidebar from "./UI/Presentation/Components/ProfileSidebar";
import GeneralProfile from "./GeneralProfile/Presentation/Components/GeneralProfile";

const AlertInOnline = lazy(() => import("./UI/Presentation/Elements/AlertInOnline"))
const Offline = lazy(() => import("./UI/Presentation/Components/Offline"))

export default function App() {

    const [showBtnGoUp, setShowBtnGoUp] = useState<boolean>(false);
    useEffect(() => {
        const showGoUp = () => {
            if (scrollY > 200) {
                setShowBtnGoUp(true)
            } else {
                setShowBtnGoUp(false)
            }
        }

        addEventListener('scroll', showGoUp)

        return () => {
            removeEventListener('scroll', showGoUp)
        }
    }, [])

    const [openSidebarMain, setOpenSidebarMain] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <FirstLoad />
                }
            >
                <AlertInOnline />
                <Offline />
                <MainNavbar />

                <AnimatePresence>
                    {
                        showBtnGoUp &&
                        <DefaultActionableButton
                            onClickDefaultActionableButton={
                                () => document.querySelector('#main-navbar')?.scrollIntoView()
                            }
                            textDefaultActionableButton="VOLVER"
                            altDefaultActionableButton="Flecha hacia arriba, color blanca y con forma de calamar"
                            arialLabel="Ir arriba de la página"
                            urlDefaultActionableButton="/pictures/icons/squid-icon.png"
                            classCss="GoUpButton"
                        />
                    }
                </AnimatePresence>

                <AnimatePresence>
                    {
                        openSidebarMain &&
                        <>
                            <SidebarMain
                                callback={() => setOpenSidebarMain(false)}
                            />
                            <BlackBackground
                                zIndex={970}
                                animation={true}
                            />
                        </>
                    }
                </AnimatePresence>

                <main>
                    <Routes>
                        <Route path="/" element={<>

                            <DefaultActionableButton
                                onClickDefaultActionableButton={
                                    () => setOpenSidebarMain(prevState => !prevState)
                                }
                                textDefaultActionableButton={
                                    openSidebarMain ? 'CERRAR' : 'MENÚ'
                                }
                                altDefaultActionableButton={
                                    openSidebarMain
                                        ? '' : ''
                                }
                                arialLabel={
                                    openSidebarMain
                                        ? 'Cerrar Menú Lateral' : 'Abrir Menú Lateral'
                                }
                                urlDefaultActionableButton={
                                    openSidebarMain
                                        ? '/pictures/icons/close.png'
                                        : '/pictures/icons/side-menu.png'
                                }
                                classCss="btnSidebarMain"
                            />

                            <FirstView />

                            <FlowingBar
                                title={"VISITA CRÓMOPOLIS"}
                                subT={"y sé un héroe"}
                                ariaLabelBar={'Lista de redirecciones hacia las portadas principales'}
                                links={[
                                    {
                                        ariaLabelLink: 'Ir hacia el perfil principal de Splatoon 1',
                                        alt: 'Flecha con forma de calamar apuntando hacia abajo de color morado.',
                                        cssLink: '180deg',
                                        src: '/pictures/logos/callie_flowingBar.png',
                                        to: '#splatoon1-maincover'
                                    },
                                    {
                                        ariaLabelLink: 'Ir hacia el perfil principal de Splatoon 1',
                                        alt: 'Flecha con forma de calamar apuntando hacia abajo de color verde.',
                                        cssLink: '180deg',
                                        src: '/pictures/logos/marie_flowingBar.png',
                                        to: '#splatoon1-maincover'
                                    }
                                ]}
                            />

                            <MainCovers
                                alt1={"Cuatro chicos calamares humanoides disparándose tinta en medio de un ciudad"}
                                alt2={"Título Splatoon de color blanco, con una sombra verde fuerte, rodeado de la pregunta '¿Qué es?'"}
                                alt3={"Dos chicas calamares posando alegremente para un poster de un concierto"}
                                alt4={"Ilustración colorida de las Calamarciñas (Squid Sisters), dos calamares blancos estilizados con coronas, acompañadas por la pregunta '¿Quiénes Son?"}
                                url1={"/pictures/backgrounds/splatoon1_mainCovers.jpg"}
                                url2={"/pictures/logos/splatoon1-mainCovers.png"}
                                url3={"/pictures/backgrounds/squidSisters_mainCovers.jpg"}
                                url4={"/pictures/logos/squidSisters-mainCovers.png"}
                                linkCoverOne={"/perfil-general=splatoon"}
                                ariaLabelCoverOne={"Acceder al Perfil general del Splatoon 1"}
                                linkCoverTwo={"/idols=squid-sisters"}
                                ariaLabelCoverTwo={"Acceder al Perfil general de las Squid Sisters"}
                                idNav="splatoon1-maincover"
                            />

                            <FlowingBar
                                title={"EXPLORA INKOPOLIS SQUARE"}
                                subT={"y llega a la tierra prometida"}
                                ariaLabelBar={'Lista de redirecciones hacia las portadas principales'}
                                links={[
                                    {
                                        ariaLabelLink: 'Ir hacia el perfil principal de Splatoon 1',
                                        alt: 'Flecha con forma de calamar apuntando hacia abajo de color beige.',
                                        cssLink: '0deg',
                                        src: '/pictures/logos/pearl_flowingBar.png',
                                        to: '#splatoon1-maincover'
                                    },
                                    {
                                        ariaLabelLink: 'Ir hacia el perfil principal de Splatoon 3',
                                        alt: 'Flecha con forma de pulpo apuntando hacia abajo de color grisaceo.',
                                        cssLink: '180deg',
                                        src: '/pictures/logos/marina_flowingBar.png',
                                        to: '#splatoon3-maincover'
                                    }
                                ]}
                            />

                            <MainCovers
                                alt1={"Ilustración estilizada y colorida de los personajes Pearl y Marina del dúo musical ficticio 'Off the Hook' del videojuego Splatoon 2. "}
                                alt2={"Texto en estilo gráfico vibrante con efectos de distorsión y sombras en rosa, verde y blanco que dice “¿Quiénes Son?” alrededor del logotipo distorsionado de Off the Hook, el dúo musical ficticio de Splatoon 2."}
                                alt3={"Arte promocional del videojuego Splatoon 2, mostrando a varios personajes estilo Inkling en una intensa batalla de pintura en una arena urbana. "}
                                alt4={"Diseño gráfico con el texto “¿Qué es Splatoon 2?” en un estilo llamativo y colorido. La palabra Splatoon aparece en letras grandes con contornos en negro, rosa y verde fosforescente, con un diseño que simula manchas de pintura. "}
                                url1={"/pictures/backgrounds/offTheHook_mainCovers.webp"}
                                url2={"/pictures/logos/offTheHook-mainCovers.png"}
                                url3={"/pictures/backgrounds/splatoon2_mainCovers.webp"}
                                url4={"/pictures/logos/splatoon2-mainCovers.png"}
                                linkCoverOne={"/idols=off-the-hook"}
                                ariaLabelCoverOne={"Acceder al Perfil general de Off The Hook"}
                                linkCoverTwo={"/perfil-general=splatoon2"}
                                ariaLabelCoverTwo={"Acceder al Perfil general del Splatoon 2"}
                                idNav="splatoon2-maincover"
                            />


                            <FlowingBar
                                title={"SUMÉRGETE EN TINTELIA"}
                                subT={"y la verdad de Alterna"}
                                ariaLabelBar={'Lista de redirecciones hacia las portadas principales'}
                                links={[
                                    {
                                        ariaLabelLink: 'Ir hacia el perfil principal de Splatoon 1',
                                        alt: 'Flecha con forma de calamar apuntando hacia arriba de color naranja.',
                                        cssLink: '0deg',
                                        src: '/pictures/logos/fyre_flowingBar.png',
                                        to: '#splatoon1-maincover'
                                    },
                                    {
                                        ariaLabelLink: 'Ir hacia el perfil principal de Splatoon 2',
                                        alt: 'Flecha con forma de pulpo apuntando hacia arriba de color azul.',
                                        cssLink: '0deg',
                                        src: '/pictures/logos/shiver_flowingBar.png',
                                        to: '#splatoon2-maincover'
                                    }
                                ]}
                            />

                            <MainCovers
                                alt1={"Arte promocional del videojuego Splatoon 3, mostrando a varios personajes estilo Inkling en medio de una batalla de pintura."}
                                alt2={"Diseño gráfico con la frase “¿Qué es Splatoon 3?” en un estilo colorido y llamativo. La palabra Splatoon está escrita en letras grandes con contornos negros, blancos y detalles en morado, acompañada de un número 3 en amarillo con borde oscuro que forma una flecha."}
                                alt3={"Póster promocional del grupo Deep Cut del videojuego Splatoon 3, con los tres miembros —Shiver, Frye y Big Man— en atuendos tradicionales japoneses con una estética festiva."}
                                alt4={"Diseño gráfico con la frase “¿Quiénes Son?” en tipografía blanca con sombras en amarillo, azul y rojo. En el centro se encuentra el logotipo estilizado del grupo Deep Cut del videojuego Splatoon 3, compuesto por líneas curvas abstractas en forma circular, con detalles en los mismos tres colores primarios. "}
                                url1={"/pictures/backgrounds/splatoon3_mainCovers.jpg"}
                                url2={"/pictures/logos/splatoon3-mainCovers.png"}
                                url3={"/pictures/backgrounds/deepCut_mainCovers.webp"}
                                url4={"/pictures/logos/deepCut-mainCovers.png"}
                                linkCoverOne={"/perfil-general=splatoon3"}
                                ariaLabelCoverOne={"Acceder al Perfil general del Splatoon 3"}
                                linkCoverTwo={"/idols=deep-cut"}
                                ariaLabelCoverTwo={"Acceder al Perfil general de Deep Cut"}
                                idNav="splatoon3-maincover"
                            />
                        </>} />
                        <Route path="/galeria" element={
                            <Gallery />
                        } />
                        <Route path="/perfil-general=splatoon" element={<>
                            <ProfileSidebar
                                selectors={[
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Acerca de'",
                                        text: 'Acerca de',
                                        to: '#acerca-de',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Jugabilidad'",
                                        text: 'Jugabilidad',
                                        to: '#jugabilidad',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Historia'",
                                        text: 'Historia',
                                        to: '#historia',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Splafest'",
                                        text: 'Splafest',
                                        to: '#splafest',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Squid Sisters'",
                                        text: 'Idols',
                                        to: '/idols=squid-sisters',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Regresar al Menú Principal'",
                                        text: 'Volver',
                                        to: '/',
                                        url: '.'
                                    },
                                ]}
                            />

                            <GeneralProfile
                                mainBackground={"/pictures/backgrounds/splatoon1_profileSection.jpg"}
                                profilesSections={[
                                    {
                                        idSection: 'acerca-de',
                                        mainTitle: 'Acerca de',
                                        sections: [
                                            {
                                                info: `
                                        Splatoon (スプラトゥーン) es un videojuego del género shooter en tercera 
                                        persona desarrollado y publicado por Nintendo para Wii U en el año 2015. 
                                        El nombre es un acrónimo de Splat (una onomatopeya inglesa equivalente a un disparo) 
                                        y Platoon (que en inglés significa pelotón o pandilla). 
                                        La jugabilidad se centra en la guerra entre inklings, 
                                        que utilizan tinta como arma para cubrir la mayor parte del territorio posible. 
                                        Al finalizar cada partida, un gato árbitro (Justino) decide al equipo ganador.
                                        `,
                                                iframeUrl: "https://www.youtube.com/embed/8L54s2m1dPs",
                                                iframeAriaLabel: 'Reproductor de video del Teaser Trailer del Splatoon 2014',
                                                iframeTitle: 'E3 2014 - Teaser Trailer for Splatoon'
                                            },
                                            {
                                                info: `
                                        Los nombres utilizados en el juego están relacionados con el universo conceptual 
                                        del mismo, inspirado en la oceanografía. Entre las especies dominantes, 
                                        Inkling entremezcla las palabras inglesas ink (tinta) y sibling (hermano). 
                                        Mientras que Octoling hace referencia a octopus (pulpo). En el resto de 
                                        personajes, armas y otros conceptos se utilizan juegos de palabras similares 
                                        que han sido adaptados en las distintas traducciones.
                                        `,
                                                imgAlt: `
                                            Ilustración colorida y dinámica de dos personajes estilo 
                                            Inkling del videojuego Splatoon, enfrentándose en un duelo. 
                                            Uno de ellos está en el aire disparando con un arma tipo cargador, 
                                            mientras el otro, con un rodillo gigante verde y negro, se prepara 
                                            para atacar desde el suelo.
                                            `,
                                                imgUrl: '/pictures/details/img1_sp1_profileInfoSection.png'
                                            },
                                            {
                                                info: `
                                        La saga está ambientada en un universo donde la civilización humana se ha 
                                        extinguido debido a la subida del nivel del mar, y ha sido reemplazada por 
                                        criaturas marinas evolucionadas que pueden alternar entre forma humana y 
                                        cefalópoda: los Inkling, inspirados en el calamar, y los Octoling, 
                                        evolucionados del pulpo. El resto de los personajes están inspirados en 
                                        criaturas de la oceanografía, mientras que los elementos humanos, como la 
                                        ropa o los campos de batalla, son vestigios de la cultura popular basados 
                                        en la estética de las tribus urbanas, y que la nueva especie ha asumido como propios.
                                        `,
                                                iframeUrl: "https://www.youtube.com/embed/qASMCQZWxqs?si=9ldJGBA-LDmTxg3V",
                                                iframeAriaLabel: 'Reproductor de video de los nuevos mapas de Splatoon 2015',
                                                iframeTitle: 'Wii U - Splatoon: New Maps'
                                            },
                                            {
                                                info: `
                                        El jugador controla a personajes humanoides de aspecto joven que son 
                                        capaces de transformarse en cefalópodos. Los Inkling están disponibles 
                                        desde la primera entrega, mientras que los Octoling se incluyeron a partir 
                                        de la segunda. Cuando están en forma humana, pueden usar armas que disparan 
                                        tinta, apuntar a los rivales y desplazarse. Al adoptar forma cefalópoda, son 
                                        capaces de ocultarse bajo la pintura esparcida, nadar con rapidez sobre la tinta 
                                        y saltar a mayor distancia.
                                        `,
                                                imgAlt: `
                                            Ilustración colorida de dos personajes estilo Inkling del universo Splatoon. 
                                            La figura a la izquierda es una chica con cabello largo anaranjado-amarillo 
                                            y gafas, vestida con uniforme escolar, sosteniendo un balde de tinta 
                                            rosa-naranja. A la derecha, un chico con piel verde-azulada y 
                                            auriculares grandes se ríe mientras está sentado en el suelo. 
                                            `,
                                                imgUrl: '/pictures/details/img2_sp1_profileInfoSection.png'
                                            }
                                        ]
                                    },
                                    {
                                        idSection: 'jugabilidad',
                                        mainTitle: 'Jugabilidad',
                                        sections: [
                                            {
                                                info: `
                                        El juego está enfocado en el multijugador en línea, donde ocho jugadores 
                                        se dividen en dos equipos de cuatro, representados por colores. La tarea de 
                                        cada equipo es cubrir el escenario con la tinta del color de su equipo en la 
                                        mayor cantidad posible dentro de un límite de tiempo. En todos los modos de 
                                        juego, los jugadores pueden tener una visión general del mapa y los alrededores, 
                                        y también pueden moverse instantáneamente hacia la posición de otro compañero. 
                                        Además, tienen la opción de utilizar los controles giroscópicos para mejorar el 
                                        apuntado.
                                        `,
                                                iframeUrl: "https://www.youtube.com/embed/iwERpeBVJa8?si=63eu-IF_ZAHPrWlb",
                                                iframeAriaLabel: 'Reproductor del Corte Extendido de Splatoon 2015',
                                                iframeTitle: 'Wii U - Splatoon Extended Cut'
                                            },
                                            {
                                                info: `
                                        Durante el combate, los jugadores llevan un arma principal, que puede 
                                        ser un arma de disparo, de carga o un rodillo. También tienen un arma 
                                        secundaria, como granadas, cortinas o aspersores de tinta, y un arma 
                                        especial temporal, como un escudo, un lanzador de tornados o un cohete. 
                                        Para desbloquear y utilizar el arma especial, deben cubrir una cierta 
                                        cantidad de terreno con tinta. Además, los jugadores pueden personalizar 
                                        la velocidad de movimiento de sus personajes y otras estadísticas mediante 
                                        habilidades específicas.
                                        `,
                                                imgAlt: `
                                            Ilustración de un personaje estilo Inkling con cabello largo y 
                                            rosado sentado en un sillón colorido, viendo televisión. 
                                            La televisión antigua, de tubo, tiene manchas de tinta rosa en la 
                                            esquina superior. A un lado hay una mesa con bebidas y un pastel pequeño. 
                                            El personaje luce concentrado, con las piernas cruzadas y expresión decidida, 
                                            en un ambiente relajado y doméstico.
                                            `,
                                                imgUrl: '/pictures/details/img3_sp1_profileInfoSection.png'
                                            },
                                            {
                                                info: `
                                        A partir de un determinado nivel, los jugadores pueden acceder a los distintos 
                                        modos competitivos, cuyos combates suelen durar cinco minutos, a menos que uno 
                                        de los equipos haya ganado antes de tiempo. En el Modo Competitivo, se forman dos 
                                        equipos de cuatro jugadores en distintas modalidades, cada una con sus propias 
                                        reglas. Los estilos de juego van rotando cada cierto número de horas, cuatro en
                                         Splatoon y dos a partir de Splatoon 2.
                                        `,
                                                iframeUrl: "https://www.youtube.com/embed/ke05YELaAgA?si=vq7Jfw1EssBDvej_",
                                                iframeAriaLabel: 'Reproductor de video de un comercial de Televisión de Splatoon',
                                                iframeTitle: 'Splatoon - Squid Kid TV Commercial'
                                            }
                                        ]
                                    },
                                    {
                                        idSection: 'historia',
                                        mainTitle: 'Historia',
                                        sections: [
                                            {
                                                info: `
                                        ¡Alerta de Spoiler!
                                        El modo historia de Splatoon 1 sigue la travesía de un joven Inkling llamado 
                                        Agente 3 en su misión para rescatar al Gran Zapfish, una criatura eléctrica 
                                        importante para la ciudad de Cromopolis, que ha sido secuestrada por los 
                                        Octarianos, una raza de pulpos enemigos. El juego se desarrolla en varios 
                                        niveles y etapas, cada uno con su propio desafío y ambiente. Los niveles del 
                                        modo historia están diseñados para poner a prueba las habilidades del jugador 
                                        en el combate y en el uso estratégico de la tinta. A medida que el Agente 3 
                                        avanza, se enfrentará a diversos enemigos y obstáculos, como Octolings, enemigos 
                                        robóticos y trampas peligrosas.
                                        `,
                                                iframeUrl: "https://www.youtube.com/embed/9EXKQQmm9EE?si=1M5pQm-sYj0RSd5u",
                                                iframeAriaLabel: 'Reproductor de video del Trailer de Modo un Jugador del Splatoon',
                                                iframeTitle: 'Wii U - Splatoon Single Player Trailer'
                                            },
                                            {
                                                info: `
                                        A lo largo del camino, el Agente 3 obtendrá nuevas armas y habilidades que 
                                        le ayudarán a enfrentarse a los desafíos que se presentan y el objetivo 
                                        final del modo historia es llegar al escondite de los Octarianos y enfrentarse 
                                        al líder de la raza enemiga, DJ Octavio, en una épica batalla final.
                                        `,
                                                imgAlt: `
                                            Ilustración vibrante de un Inkling con tentáculos verdes corriendo 
                                            decidido hacia el frente mientras dispara tinta, enfrentándose a una 
                                            horda de enemigos. Al fondo se ve una gran figura robótica con ojos 
                                            verdes brillantes, rodeada de octarianos y criaturas con expresiones 
                                            amenazantes. 
                                            `,
                                                imgUrl: '/pictures/details/img4_sp1_profileInfoSection.png'
                                            },
                                            {
                                                info: `
                                        También se revelan algunos detalles sobre el mundo y la historia de Splatoon, incluyendo la rivalidad histórica entre los Inklings y los Octarianos.
                                        `,
                                                iframeUrl: "https://www.youtube.com/embed/fzmUJ-GQrBg?si=eRKd2Z_1oGULzFEC",
                                                iframeAriaLabel: 'Reproductor de video del Segundo Trailer de Modo un Jugador del Splatoon',
                                                iframeTitle: 'Wii U - Splatoon Single Player Spot'
                                            }
                                        ]
                                    },
                                    {
                                        idSection: 'splafest',
                                        mainTitle: '¡Splafest!',
                                        sections: [
                                            {
                                                info: `
                                                Un Splafest es un evento especial que ocurre periódicamente durante un 
                                                tiempo limitado. En estos eventos, los jugadores se unen a un equipo 
                                                (con una temática diferente en cada Splatfest) y compiten en Turf Wars 
                                                para aumentar la puntuación de sus equipos. Al final del Splatfest, se 
                                                anuncia el equipo ganador y se entregan Super Sea Snails a todos los 
                                                participantes (siendo que los jugadores del equipo ganador obtienen más 
                                                Super Caracoles Marinos).
                                            `,
                                                iframeAriaLabel: 'Reproductor del video anunciando los Splafest.',
                                                iframeTitle: 'Wii U - Splatoon - Splatfest Incoming!',
                                                iframeUrl: 'https://www.youtube.com/embed/idXni2gNNec?si=oQaS1MedqokAuSrL'
                                            },
                                            {
                                                info: `
                                                Cada equipo tiene tres minutos para esparcir tinta por el escenario. 
                                                Después, Justino calcula cuánto del escenario cubrió cada equipo. 
                                                El equipo con el mayor porcentaje de cobertura de césped gana la ronda. 
                                                Además, se otorga una bonificación de 1000 puntos (300 puntos antes del 
                                                Splatfest final) al equipo ganador. En Splatoon 1, los Splatfests eran 
                                                eventos recurrentes organizados por las Squid Sisters, Callie y Marie. 
                                                (Mar y Tina en América) Durante este evento, los Inklings podían elegir 
                                                entre dos equipos y participar en batallas entre ellos.
                                            `,
                                                iframeAriaLabel: 'Reproductor de video compilatorio sobre todos los Splafest',
                                                iframeTitle: 'Splatoon – Splatfest Splashback',
                                                iframeUrl: 'https://www.youtube.com/embed/M1FpZKiH7ao?si=2WMUGRSTRPq0uree'
                                            }, {
                                                info: `
                                                Crómopolis y todos los escenarios se decoraban con una inundación de 
                                                publicaciones de Miiverse con la etiqueta Splatfest/Festival en la comunidad de 
                                                Splatoon. La noche también descendía sobre la plaza y todos los escenarios de Turf War. 
                                                Los fuegos artificiales sonaban periódicamente, y se podían ver manchas de luz que se 
                                                asemejaban a luciérnagas o brasas de fuego elevándose hacia el cielo. 
                                                Tanto Callie como Marie bailaban durante toda la duración de este evento, 
                                                cantando y bailando City of Color.
                                                `,
                                                imgAlt: `
                                                Imagen colorida y animada de un escenario urbano nocturno del universo 
                                                Splatoon, decorado con luces de neón, pantallas LED, y estatuas gigantes de 
                                                estilo caricaturesco, incluyendo un gato blanco y un pez globo. 
                                                En el centro se eleva una torre iluminada de color verde. 
                                                Personajes estilo Inkling caminan por la plaza, celebrando un evento o 
                                                festival. En el cielo se observan fuegos artificiales con formas de 
                                                calamares brillantes.
                                                `,
                                                imgUrl: '/pictures/details/img5_sp1_profileInfoSection.jpg'
                                            }
                                        ]
                                    }
                                ]} />
                        </>} />
                        <Route path="/perfil-general=splatoon2" element={<>
                            <ProfileSidebar
                                selectors={[
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Acerca de'",
                                        text: 'Acerca de',
                                        to: '#acerca-de',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Jugabilidad'",
                                        text: 'Jugabilidad',
                                        to: '#jugabilidad',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Historia'",
                                        text: 'Historia',
                                        to: '#historia',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Splafest'",
                                        text: 'Splafest',
                                        to: '#splafest',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Off The Hook'",
                                        text: 'Idols',
                                        to: '/idols=off-the-hook',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección OctoExpansión",
                                        text: 'Octo',
                                        to: '#octo-expansion',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección SalmonRun",
                                        text: 'SalmonRun',
                                        to: '#salmon-run',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Regresar al Menú Principal",
                                        text: 'Volver',
                                        to: '/',
                                        url: '.'
                                    }
                                ]}
                            />
                        </>} />
                        <Route path="/perfil-general=splatoon3" element={<>
                            <ProfileSidebar
                                selectors={[
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Acerca de'",
                                        text: 'Acerca de',
                                        to: '#acerca-de',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Historia'",
                                        text: 'Historia',
                                        to: '#historia',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Splafest'",
                                        text: 'Splafest',
                                        to: '#splafest',
                                        url: '.'
                                    }
                                    ,
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección 'Deep Cut'",
                                        text: 'Idols',
                                        to: '/idols=deep-cut',
                                        url: '.'
                                    },
                                    {
                                        alt: '',
                                        ariaLabel: "Regresar al Menú Principal'",
                                        text: 'Volver',
                                        to: '/',
                                        url: '.'
                                    },
                                ]}
                            />
                        </>} />
                    </Routes>
                </main>

                {!openSidebarMain && <MainFooter />}
            </Suspense>
        </BrowserRouter>
    )
}



