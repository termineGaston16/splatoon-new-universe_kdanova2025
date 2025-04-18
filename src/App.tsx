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
                    </Routes>
                </main>

                {!openSidebarMain && <MainFooter />}
            </Suspense>
        </BrowserRouter>
    )
}



