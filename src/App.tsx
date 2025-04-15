import { BrowserRouter, Routes } from "react-router-dom";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";
import AlertInOnline from "./UI/Presentation/Elements/AlertInOnline";
import { Suspense } from "react";
import Offline from "./UI/Presentation/Components/Offline";
import MainNavbar from "./UI/Presentation/Components/MainNavbar";


export default function App() {

    return (
        <BrowserRouter>

            <AlertInOnline />
            <Offline />
            <MainNavbar />

            <Suspense
                fallback={
                    <FirstLoad />
                }
            >
                <main>
                    <Routes>
                    </Routes>
                </main>
            </Suspense>
        </BrowserRouter>
    )
}