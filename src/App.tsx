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

    const [mainBackground, setMainBackground] = useState<null | {
        backgroundUrl: string,
        backgroundPosition: string,
        backgroundSize: string,
        backgroundRepeat: string,
        backgroundAttachment: string
    }>(null);

    useEffect(() => {
        const htmlDoc = document.querySelector('#app') as HTMLElement;

        if (mainBackground !== null) {
            const {
                backgroundUrl,
                backgroundAttachment,
                backgroundPosition,
                backgroundRepeat,
                backgroundSize,
            } = mainBackground;

            htmlDoc.style.backgroundImage = `url(${backgroundUrl})`;
            htmlDoc.style.backgroundAttachment = backgroundAttachment;
            htmlDoc.style.backgroundPosition = backgroundPosition;
            htmlDoc.style.backgroundRepeat = backgroundRepeat;
            htmlDoc.style.backgroundSize = backgroundSize;
        } else {
            htmlDoc.style.backgroundImage = `url(${"/pictures/backgrounds/index_background.webp"})`;
            htmlDoc.style.backgroundAttachment = "fixed";
            htmlDoc.style.backgroundPosition = "center center";
            htmlDoc.style.backgroundRepeat = "no-repeat";
            htmlDoc.style.backgroundSize = "cover";
        }

    }, [mainBackground])

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

                            <FirstView
                                setMainBackground={setMainBackground}
                            />

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
                                linkCoverTwo={"/"}
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
                                linkCoverOne={"/"}
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
                                linkCoverTwo={"/"}
                                ariaLabelCoverTwo={"Acceder al Perfil general de Deep Cut"}
                                idNav="splatoon3-maincover"
                            />
                        </>} />
                        <Route path="/galeria" element={
                            <Gallery
                                setMainBackground={setMainBackground}
                            />
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
                                    // ,
                                    // {
                                    //     alt: '',
                                    //     ariaLabel: "Ir a la sección 'Squid Sisters'",
                                    //     text: 'Idols',
                                    //     to: '/idols=squid-sisters',
                                    //     url: '.'
                                    // }
                                ]}
                            />

                            <GeneralProfile
                                setMainBackground={setMainBackground}
                                mainBackground={{
                                    backgroundUrl: '/pictures/backgrounds/splatoon1_profileSection.jpg',
                                    backgroundAttachment: 'fixed',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
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

                        </>}
                        />
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
                                    // {
                                    //     alt: '',
                                    //     ariaLabel: "Ir a la sección 'Off The Hook'",
                                    //     text: 'Idols',
                                    //     to: '/idols=off-the-hook',
                                    //     url: '.'
                                    // },
                                    {
                                        alt: '',
                                        ariaLabel: "Ir a la sección OctoExpansión",
                                        text: 'Octo',
                                        to: '#octo-expansion',
                                        url: '.'
                                    },
                                    // {
                                    //     alt: '',
                                    //     ariaLabel: "Ir a la sección SalmonRun",
                                    //     text: 'SalmonRun',
                                    //     to: '#salmon-run',
                                    //     url: '.'
                                    // }
                                ]}
                            />

                            <GeneralProfile
                                setMainBackground={setMainBackground}
                                mainBackground={{
                                    backgroundUrl: '/pictures/backgrounds/splatoon2_profileSection.jpg',
                                    backgroundAttachment: 'fixed',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                                profilesSections={[
                                    {
                                        idSection: 'acerca-de',
                                        mainTitle: 'Acerca de',
                                        sections: [
                                            {
                                                info: `
                                                ¡Ahora se suman los Octolings!
                                                Fue lanzado a nivel mundial el 21 de julio de 2017. Hasta finales de 2021, se situó como el noveno título más vendido en la historia de su consola.
                                                En diciembre del mismo año, había superado las 13.13 millones de copias en 
                                                formato físico y digital. Según Famitsū, es el quinto juego de 
                                                Nintendo Switch más exitoso en el mercado japones, con más de 4 
                                                millones de unidades distribuidas.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de video para la presentación de Splatoon 2 - 2017
                                                `,
                                                iframeTitle: 'Splatoon 2 - Nintendo Switch Presentation 2017 Trailer',
                                                iframeUrl: "https://www.youtube.com/embed/qN4w5D2tzME?si=Tsm5tC_xAoH395xp"
                                            },
                                            {
                                                info: `
                                                Respecto a la primera entrega incluye novedades como un remozado modo en 
                                                solitario, cambios en el sistema de juego, un mayor arsenal y nuevos 
                                                estilos de combate.
                                                El 13 de junio de 2018 se publicó una expansión de contenido descargable, 
                                                Splatoon 2: Octo Expansion, que amplía el modo individual con una nueva 
                                                historia desde el punto de vista de otra especie cefalópoda, los Octolings.
                                                `,
                                                imgAlt: `
                                                Ilustración colorida de estilo veraniego con cuatro personajes del 
                                                videojuego Splatoon en poses dinámicas. Están vestidos con ropa casual y 
                                                deportiva, como camisetas sin mangas, gafas de sol y zapatillas modernas. 
                                                Cada personaje sostiene un arma de tinta característica del juego. 
                                                `,
                                                imgUrl: "/pictures/details/img1_sp2_profileInfoSection.png"
                                            },
                                            {
                                                info: `
                                                La prensa especializada emitió críticas favorables. Entre los aspectos positivos 
                                                se mencionan las novedades, el apartado gráfico y el mayor desarrollo de la 
                                                modalidad para un jugador, además del sistema de juego y la estabilidad de la 
                                                conexión en los combates en línea.
                                                Como puntos negativos los críticos señalaron la ausencia de multijugador 
                                                con pantalla dividida, el sistema de emparejamiento aleatorio o la falta 
                                                de chat de voz.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de video del lanzamiento oficial de Splatoon 2
                                                `,
                                                iframeTitle: "Splatoon 2 Launch Trailer - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/ylBYfndq8fU?si=9G1XItvTLuNtwNm-"
                                            }, {
                                                info: `
                                                Que Splatoon tuviera una secuela fue objeto de burlas y de diversos 
                                                memes durante el mes de octubre de 2016.
                                                Splatoon 2 está basado 2 años en el futuro y es el tiempo transcurrido 
                                                desde el primer juego y el número de la entrega.
                                                `,
                                                imgAlt: `
                                                Ilustración promocional del juego Splatoon 2 con el texto “Inktastic Summer” 
                                                en la esquina superior izquierda. Cuatro Inklings sonrientes posan para una 
                                                foto veraniega con actitud alegre y relajada, abrazándose entre ellos.   
                                                `,
                                                imgUrl: "/pictures/details/img2_sp2_profileInfoSection.jpg"
                                            }
                                        ]
                                    },
                                    {
                                        idSection: 'jugabilidad',
                                        mainTitle: 'Jugabilidad',
                                        sections: [
                                            {
                                                info: `
                                                La mecánica del juego sigue siendo la misma: un juego de disparos en 
                                                tercera persona enfocado en el multijugador online, donde ocho jugadores 
                                                se dividen en dos equipos de cuatro. Su tarea consiste en cubrir el 
                                                escenario con tanta tinta del color de su equipo como sea posible dentro 
                                                de un límite de tiempo.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de video de la nueva actualización 4.0 del videojuego.
                                                `,
                                                iframeTitle: "Splatoon 2 Ver. 4 - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/UzuOw50zmbU?si=2GXRPa3RzxOPmvUa"
                                            },
                                            {
                                                info: `
                                                El juego añade nuevos tipos de armas y las armas del primer juego han sido 
                                                alteradas con nuevas mecánicas, como las pistolas duales. 
                                                Se han añadido nuevas armas especiales como el atormentador, también se han 
                                                añadido nueva indumentaria como los pantalones y los cortes de pelo. 
                                                El juego admite multijugador local con varias consolas de Nintendo Switch. 
                                                Se implementaron nuevas tintas, nuevas marcas, nuevos peinados, 
                                                un nuevo modo multijugador llamado Salmon Run y nuevos amiibo.
                                                `,
                                                imgAlt: `
                                                Captura de pantalla del videojuego Splatoon 2 que muestra a cuatro 
                                                Inklings sobre una plataforma metálica circular con tinta rosa en el 
                                                centro. Cada personaje sostiene un arma diferente de tinta en color 
                                                rosa, y visten ropa urbana y moderna, como gorras, zapatillas deportivas, 
                                                camisetas gráficas y gafas.
                                                `,
                                                imgUrl: "/pictures/details/img3_sp2_profileInfoSection.jpg"
                                            },
                                            {
                                                info: `
                                                En esta edición se incluye un modo cooperativo llamado Salmon Run, donde 
                                                los jugadores deben colaborar para derrotar a enemigos que aparecen en 
                                                hordas en la pantalla, utilizando armas específicas. Al derrotar a estos 
                                                enemigos, los jugadores pueden recolectar alevines dorados que dejan atrás, 
                                                los cuales pueden ser intercambiados por dinero y accesorios especiales. 
                                                Es importante destacar que, a diferencia de los demás modos de juego, 
                                                Salmon Run es temporal y solo aparece en franjas horarias específicas que 
                                                son anunciadas con antelación.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de vídeo de la actualización de verano del Splatoon 2.
                                                `,
                                                iframeTitle: "Splatoon 2 - Huge Holiday Updates! - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/U1gyg1HjPOY?si=ED0V0y8KAHNoIX1d"
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
                                                    La acción de Splatoon 2 transcurre dos años después del último festival, 
                                                    donde Tina derrotó a su prima Mar en la encuesta de popularidad del 
                                                    dúo que ambas forman, las Squid Sisters. En la primera parte, se revela
                                                    que las ellas no son solo un grupo pop, sino que también tienen una 
                                                    identidad secreta como agentes 1 y 2 del Comando Branquias. Junto con 
                                                    el agente 3 (encarnado por el jugador), habían logrado detener al líder 
                                                    de los octarianos, DJ Octovius.
                                                    La relación entre las primas se ve afectada por el resultado de la 
                                                    encuesta, lo que las lleva a distanciarse. Posteriormente, 
                                                    Tina regresa a Inkpolis Square y descubre que tanto Mar como 
                                                    el Gran Siluro que proporciona electricidad a la ciudad han 
                                                    desaparecido.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de vídeo del Adelanto del modo un jugador del Splatoon 2
                                                `,
                                                iframeTitle: 'Splatoon 2 - Single Player Trailer - Nintendo Switch',
                                                iframeUrl: 'https://www.youtube.com/embed/869_lwZfyTo?si=OvVquXmSLwRXNIV_'
                                            },
                                            {
                                                info: `
                                                Temiendo que los octarianos estén detrás del caso, retoma su identidad 
                                                secreta como "agente 2" del Comando Branquias y recluta en la plaza a un 
                                                Inkling, el personaje del usuario, que se convierte en el "agente 4" e 
                                                investiga lo sucedido.
                                                Con la ayuda de Tina y el experto en armas Jairo, el agente 4 debe recorrer 
                                                los cinco mundos que componen el Valle Pulpo y recuperar todos los siluros o 
                                                volbagres robados, incluyendo aquellos que dan energía a las máquinas de los 
                                                jefes de nivel. A lo largo de la historia, se descubre que Mar ha sido 
                                                secuestrada y manipulada mentalmente por DJ Octovius, quien ha logrado 
                                                fugarse de prisión y utiliza el Gran Siluro para poner en marcha su nuevo 
                                                escenario, el Octotrón.
                                                `,
                                                imgAlt: `
                                                Ilustración vibrante y estilizada de Splatoon 2: Octo Expansion, 
                                                con una composición caótica y llena de personajes. En el centro 
                                                inferior están Marie, vestida con un kimono negro y sosteniendo 
                                                una sombrilla japonesa, y el Agente 8, un Inkling amarillo en pose 
                                                desafiante con un arma de tinta. 
                                                `,
                                                imgUrl: "/pictures/details/img4_sp2_profileInfoSection.png"
                                            },
                                            {
                                                info: `
                                                En él último nivel, el agente 4 debe destruir el Octotrón para que Tina y 
                                                Jairo liberen a Mar del control mental al que está sometida. 
                                                Una vez esto sucede, las Squid Sisters actúan juntas de nuevo para 
                                                ayudar al protagonista en su último enfrentamiento con DJ Octovius, 
                                                valiéndose del Pez Dorado para derrotarle. En el final del juego, el 
                                                antagonista es encarcelado en una bola de nieve, el Gran Siluro regresa a 
                                                Cromópolis, y las cantantes resuelven sus diferencias para volver a los 
                                                escenarios.
                                                `
                                            }
                                        ]
                                    },
                                    {
                                        idSection: "splafest",
                                        mainTitle: "¡Splafest!",
                                        sections: [
                                            {
                                                info: `
                                                Los Splatfests regresaron en Splatoon 2, ahora presentado por los miembros 
                                                de Off the Hook, Pearl y Marina. La estructura era en gran parte la misma 
                                                que en el juego anterior. Aunque Miiverse no es compatible con Nintendo 
                                                Switch, la función de dibujo exclusiva de Splatoon 2 permite a los 
                                                jugadores enviar garabatos que aparecen en el juego como letreros de 
                                                neón, pancartas, fuegos artificiales o graffiti, así como cargar 
                                                garabatos en cuentas de redes sociales.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de vídeo de la primera presentación de las Off The Hook
                                                `,
                                                iframeTitle: "Splatoon 2 - Off the Hook introduction",
                                                iframeUrl: "https://www.youtube.com/embed/okIlIvHnaNw?si=8FP6SFGwj39cY-Se"
                                            },
                                            {
                                                info: `
                                                Inkopolis Square está decorada de manera similar a Crómopolis en el primer 
                                                juego, y todas las áreas quedan bloqueadas en la noche mientras Pearl y 
                                                Marina realizan su evento allí.
                                                `,
                                                imgAlt: `
                                                Escena festiva en una ciudad del universo Splatoon, llena de luces de neón, 
                                                letreros brillantes y fuegos artificiales en el cielo. Multitudes de 
                                                Inklings y Octolings se reúnen en las calles, celebrando mientras bailan y 
                                                observan un escenario iluminado al fondo, donde se desarrolla un 
                                                espectáculo musical.
                                                `,
                                                imgUrl: "/pictures/details/img5_sp2_profileInfoSection.jpg",
                                            },
                                            {
                                                info: `
                                                Chaos vs Order (también conocido como Final Fest: Splatocalypse) fue muy 
                                                promocionado como el Splatfest final de Splatoon 2, presentando muchas 
                                                características especiales y únicas que influirían en los eventos de la 
                                                secuela. Sin embargo, en 2020, cuatro Splatfests adicionales fueron 
                                                organizados después de un año de inactividad, durante la pandemia de 
                                                COVID-19, brindando a los jugadores más entretenimiento durante el encierro.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de vídeo anunciando el último Splafest del Splatoon 2
                                                `,
                                                iframeTitle: "Splatoon 2 - Final Splatfest Announcement - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/PEk-Ib0n2Uc?si=8wR1N4nqcQlPydSJ"
                                            }
                                        ]
                                    },
                                    {
                                        idSection: "octo-expansion",
                                        mainTitle: "OctoExpasión",
                                        sections: [
                                            {
                                                info: `
                                                Splatoon 2: Octo Expansion añade un completo modo para un jugador que 
                                                permite a los jugadores tomar el control del nuevo personaje Agente 8, 
                                                un octoling que ha perdido sus recuerdos. La nueva campaña para un 
                                                jugador incluye 80 misiones, así como nuevas historias que revelan 
                                                datos desconocidos sobre personajes queridos de la saga. Los jugadores 
                                                que completen la campaña Octo Expansion desbloquearán la habilidad de 
                                                jugar como octolings en los combates multijugador.
                                                `,
                                                iframeAriaLabel: `
                                                Reproducto de vídeo anunciando el primer adelanto de la Expanción
                                                `,
                                                iframeTitle: "Splatoon 2: Octo Expansion Trailer - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/NBr6GqyuWnA?si=Aysze39WqZRnxRI7"
                                            },
                                            {
                                                info: `
                                                Utilizando puntos como moneda, el jugador debe navegar por varias 
                                                estaciones de metro y gastar puntos para completar estos desafíos. 
                                                El número de puntos ganados o perdidos está determinado por el desempeño 
                                                del jugador en cada desafío. Estos desafíos incluyen derrotar enemigos 
                                                dentro de un límite de tiempo, guiar una bola 8 gigante, luchar contra 
                                                jefes y más. Cada nivel se puede acceder a través del mapa del metro en 
                                                el mundo central.
                                                `,
                                                imgAlt: `
                                                Ilustración estilizada de Splatoon 2: Octo Expansion con una Octoling 
                                                femenina corriendo por una delgada cinta de tinta rosa en un espacio 
                                                oscuro, con una señal de tráfico en la mano. 
                                                Al fondo se ve una estación de tren iluminada por luces de neón, 
                                                carteles, una cinta de casete flotando, objetos tecnológicos y manchas 
                                                de tinta en tonos verdes y violetas.
                                                `,
                                                imgUrl: "/pictures/details/img6_sp2_profileInfoSection.png"
                                            },
                                        ]
                                    }
                                ]} />

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
                                    // ,
                                    // {
                                    //     alt: '',
                                    //     ariaLabel: "Ir a la sección 'Deep Cut'",
                                    //     text: 'Idols',
                                    //     to: '/idols=deep-cut',
                                    //     url: '.'
                                    // }
                                ]}
                            />

                            <GeneralProfile
                                setMainBackground={setMainBackground}
                                mainBackground={{
                                    backgroundUrl: '/pictures/backgrounds/splatoon3_profileSection.jpg',
                                    backgroundAttachment: 'fixed',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                                profilesSections={[
                                    {
                                        idSection: 'acerca-de',
                                        mainTitle: 'Acerca de',
                                        sections: [
                                            {
                                                info: `
                                                El juego se desarrolla en la región de Tintelia, habitada por inklings y 
                                                octolings endurecidos por la batalla. La historia tiene lugar 
                                                aproximadamente un año y medio después de los eventos del festival 
                                                Caos vs Orden, en una ciudad llamada Tintelia (también conocida como 
                                                la "ciudad del caos"), ubicada en la misma región desértica. 
                                                Esta nueva entrega tiene lugar fuera de Cromópolis, el escenario 
                                                principal de los dos primeros juegos de la serie. 
                                                La ciudad del caos ha experimentado un rápido crecimiento con la 
                                                llegada de más inklings y octolings que se trasladan a ella. 
                                                El diseño del juego parece estar inspirado en el caos, y es posible 
                                                que el resultado del Splatfest de 2019 de Splatoon 2 haya influido en 
                                                esta decisión.
                                                `,
                                                iframeAriaLabel: `
                                                Reproducto de vídeo presentado el primer vistazo al Splatoon 3.
                                                `,
                                                iframeTitle: "Splatoon 3 - Announcement Trailer - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/GUYDXVDLmns?si=95-PBIUHoIYdjCG4"
                                            },
                                            {
                                                info: `
                                                Splatoon 3 sigue la tradición de sus predecesores en la serie Splatoon, 
                                                ofreciendo partidas competitivas multijugador en línea junto con un modo 
                                                para un jugador basado en la historia. La jugabilidad del juego es 
                                                similar a las entregas anteriores de la serie, con un enfoque en 
                                                disparos en tercera persona.
                                                `,
                                                imgAlt: `
                                                Imagen promocional de Splatoon 3 con tres personajes Inklings en el centro, 
                                                cubiertos de tinta amarilla y morada. Cada uno sostiene un arma distinta: 
                                                un arco de tinta, una pistola y un tanque lanzador de gran tamaño. 
                                                Todos están en poses dinámicas y decididas, listos para el combate. 
                                                `,
                                                imgUrl: "/pictures/details/img1_sp3_profileInfoSection.jpg"
                                            },
                                            {
                                                info: `
                                                    También se incorporan nuevas funciones en Tintelia, como accesorios, 
                                                    casilleros y el combate territorial con cartas, entre otros. 
                                                    En la región de Tintelia, los jugadores podrán entrar al campo de 
                                                    batalla utilizando el dron generador, que les permitirá 
                                                    apuntar a la ubicación de despliegue deseada dentro de un 
                                                    cierto alcance.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de vídeo anunciando la fecha de estreno del Splatoon 3
                                                `,
                                                iframeTitle: "Splatoon 3 – Release Date Revealed - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/Rkz-PjCQjWk?si=no1Z1d6MiGvaGwWr"
                                            },
                                            {
                                                info: `
                                                Después de elegir dónde desplegar, el dron generador los lanzará a esa 
                                                ubicación en forma de calamar o pulpo de manera similar a un Super Jump. 
                                                Aunque los puntos de generación regulares siguen presentes en el escenario, 
                                                no se ha confirmado si serán utilizables.
                                                `,
                                                imgAlt: `
                                                    Ilustración promocional de Splatoon 3 con un grupo de ocho Inklings y 
                                                    Octolings en acción, cada uno portando diferentes armas de tinta como 
                                                    rodillos, pinceles, pistolas, cargadores y un arco. 
                                                    Todos están en poses dinámicas, listos para la batalla, 
                                                    con expresiones decididas.
                                                `,
                                                imgUrl: "/pictures/details/img2_sp3_profileInfoSection.png"
                                            }
                                        ]
                                    },
                                    {
                                        idSection: "historia",
                                        mainTitle: `Historia`,
                                        sections: [
                                            {
                                                info: `
                                                ¡Alerta de Spoiler!
                                                La trama de Splatoon 3 sigue al jugador, el Agente 3, y su pequeño amigo 
                                                Smallfry (Cenutrín en Español) en una misión para recuperar el Great 
                                                Zapfish, que ha vuelto a desaparecer y es crucial para alimentar la 
                                                energía en Splatsville.
                                                Durante su búsqueda, el jugador se une a las Squid Sisters, 
                                                Callie y Marie, así como al Capitán Cuttlefish del primer juego. 
                                                Descubren una ciudad subterránea cubierta de cieno borroso y 
                                                tomada por los octarianos, Alterna.
                                                `,
                                                iframeAriaLabel: `
                                                Reproductor de vídeo anunciando el modo historia del Splatoon 3
                                                `,
                                                iframeTitle: "Splatoon 3 – “Return of the Mammalians” – Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/Z4ngPsn5d5A?si=-8LGKlctwSMeNqYz"
                                            },
                                            {
                                                info: `
                                                En su exploración, luchan contra un grupo llamado Deep Cut, que busca un 
                                                tesoro valioso para ayudar a los ciudadanos de Splatsville.
                                                A medida que el jugador avanza, se revela que el Sr. Grizz, el director 
                                                ejecutivo de Grizzco, ha capturado a Cuttlefish y robado el Great Zapfish 
                                                junto con el ejército octariano.
                                                El jugador se enfrenta a varias dificultades, pero con la ayuda de sus 
                                                nuevos aliados, construyen una cortadora de césped para llegar al cohete 
                                                donde Cuttlefish está siendo retenido.
                                                Descubren que el Sr. Grizz es en realidad un enorme oso y uno de los pocos 
                                                mamíferos que quedan. Grizz planea usar el cohete para cubrir la Tierra 
                                                con cieno borroso, pero el Agente 3 y sus aliados trabajan juntos para 
                                                detenerlo.
                                                `,
                                                imgAlt: `
                                                    Ilustración promocional de Splatoon 3: Return of the Mammalians, con varios 
                                                    personajes principales y antagonistas del modo historia dispuestos en una 
                                                    composición vertical sobre fondo negro. En la parte superior aparecen enemigos 
                                                    como mamíferos mutados, un cangrejo gigante y figuras misteriosas.
                                                `,
                                                imgUrl: "/pictures/details/img3_sp3_profileInfoSection.jpg"
                                            }, {
                                                info: `
                                                El enfrentamiento final ocurre en el cohete, donde el Agente 3, Smallfry y 
                                                DJ Octavio enfrentan al Sr. Grizz.
                                                A pesar de la feroz batalla, el Agente 3 y sus aliados logran derrotar a 
                                                Grizz y destruir el cohete, salvando el día.
                                                Finalmente, regresan a la Tierra con el Great Zapfish y Deep Cut continúa 
                                                trabajando con las Squid Sisters. Aunque parece que Grizz sobrevive y 
                                                flota en el espacio durante los créditos, su amenaza ha sido detenida y 
                                                la paz vuelve a Splatsville.
                                                `,
                                                imgAlt: `
                                                Escena del modo historia de Splatoon 3 donde el jugador, con un Inkling 
                                                en equipo de combate amarillo, se enfrenta a un jefe gigantesco cubierto 
                                                de pelaje oscuro y tinta púrpura. El jefe tiene forma humanoide, ojos 
                                                brillantes y placas de tinta en su cuerpo. 
                                                `,
                                                imgUrl: "/pictures/details/img4_sp3_profileInfoSection.jpg"
                                            }
                                        ]
                                    },
                                    {
                                        idSection: "splafest",
                                        mainTitle: "¡Splafest!",
                                        sections: [
                                            {
                                                info: `
                                                Los Splafest ahora están organizados por Shiver, Frye y Big Man (Megan, 
                                                Angie y Rayan en Español) en Deep Cut. Todos desfilan por Splatsville 
                                                durante el Splatfest, que ahora es una batalla entre tres equipos 
                                                diferentes, cada uno representado por un miembro diferente. Cada 
                                                miembro tiene su propio Splatfest Float , sin embargo, todos se 
                                                combinan para formar un gran escenario que permanece estacionario 
                                                después del Halftime Report. Deep Cut realiza Anarchy Poisons el 
                                                primer día de un Splatfest y Anarchy Rainbow el segundo. En 
                                                Inkopolis Plaza , Callie y Marie actúan una vez más durante 
                                                Splatfests, cantando City of Color (2023) el primer día y 
                                                Tomorrow's Nostalgia Today el segundo.
                                                `,
                                                iframeAriaLabel: `
                                                Reproducto de vídeo presentando a las Deep Cut de Splatoon 3.
                                                `,
                                                iframeTitle: "Deep Cut: Anarchy Rainbow - Splatoon 3 - Nintendo Switch",
                                                iframeUrl: "https://www.youtube.com/embed/DtMOAvOWTvY?si=tyc0kqkSx6HWICE5"
                                            },
                                            {
                                                info: `
                                                En Splatoon 3, hay tres modos diferentes de Splatfest Battle: Open, 
                                                Pro y Tricolor. El modo Open y el modo Pro están disponibles durante 
                                                todo el Splatfest, mientras que el modo Tricolor solo está disponible 
                                                después del Halftime Report. En los modos Open y Pro, el 
                                                funcionamiento es similar al modo Normal y Pro en Splatoon 2. 
                                                Los jugadores participan en batallas de Splatfest de manera habitual, 
                                                y los resultados influyen en el informe de medio tiempo. En el modo 
                                                Tricolor, los jugadores participan en Tricolor Turf Wars, donde los 
                                                equipos atacantes y defensores del partido son seleccionados al azar. 
                                                Si el equipo que lidera en el informe de medio tiempo es el equipo 
                                                defensor durante el partido, el equipo ganador recibirá una 
                                                bonificación de influencia de 1,5 veces.
                                                `,
                                                imgAlt: `
                                                Imagen promocional de Splatoon 3 con Deep Cut, el trío de ídolos del juego. 
                                                En el centro está Big Man, una raya blanca con expresión alegre, 
                                                usando una banda tradicional en la cabeza. A su izquierda está Shiver, 
                                                una Octoling con cabello azul y atuendo elegante de estilo japonés, 
                                                sosteniendo un abanico.
                                                `,
                                                imgUrl: "/pictures/details/img5_sp3_profileInfoSection.jpg"
                                            }
                                        ]
                                    }
                                ]} />
                        </>} />
                    </Routes>
                </main>

                {!openSidebarMain && <MainFooter />}
            </Suspense>
        </BrowserRouter>
    )
}



