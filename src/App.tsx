import { BrowserRouter, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";
import MainNavbar from "./UI/Presentation/Components/MainNavbar";
import DefaultActionableButton from "./UI/Presentation/Elements/DefaultActionableButton";

const AlertInOnline = lazy(() => import("./UI/Presentation/Elements/AlertInOnline"))
const Offline = lazy(() => import("./UI/Presentation/Components/Offline"))

export default function App() {

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

                <DefaultActionableButton
                    onClickDefaultActionableButton={
                        () => document.querySelector('#main-navbar')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    textDefaultActionableButton="VOLVER"
                    altDefaultActionableButton="Flecha hacia arriba, color blanca y con forma de calamar"
                    arialLabel="Ir arriba de la página"
                    urlDefaultActionableButton="/pictures/icons/squid-icon.png"
                    top="70%"
                    right="2%"
                />



                <main>
                    <Routes>
                    </Routes>
                </main>
            </Suspense>
        </BrowserRouter>
    )
}