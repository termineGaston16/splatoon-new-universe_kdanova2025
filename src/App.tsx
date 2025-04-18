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
                                () => document.querySelector('#main-navbar')?.scrollIntoView({ behavior: 'smooth' })
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
                        </>} />
                    </Routes>
                </main>
            </Suspense>
        </BrowserRouter>
    )
}



