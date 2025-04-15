import { BrowserRouter, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";
import MainNavbar from "./UI/Presentation/Components/MainNavbar";

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


                <main>
                    <Routes>
                    </Routes>
                </main>
            </Suspense>
        </BrowserRouter>
    )
}