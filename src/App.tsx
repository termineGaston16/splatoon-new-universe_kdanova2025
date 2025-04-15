import { BrowserRouter, Routes } from "react-router-dom";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";
import AlertInOnline from "./UI/Presentation/Elements/AlertInOnline";
import { Suspense } from "react";
import Offline from "./UI/Presentation/Components/Offline";


export default function App() {

    return (
        <BrowserRouter>

            <AlertInOnline />
            <Offline />

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