import { BrowserRouter, Routes } from "react-router-dom";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";
import AlertInOnline from "./UI/Presentation/Elements/AlertInOnline";


export default function App() {

    return (
        <BrowserRouter>

            <FirstLoad />
            <AlertInOnline />

            <main>
                <Routes>
                </Routes>
            </main>
        </BrowserRouter>
    )
}