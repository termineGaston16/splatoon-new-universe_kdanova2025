import { BrowserRouter, Routes } from "react-router-dom";
import FirstLoad from "./UI/Presentation/Components/Suspense/FirstLoad";


export default function App() {

    return (
        <BrowserRouter>

            <FirstLoad />

            <main>
                <Routes>
                </Routes>
            </main>
        </BrowserRouter>
    )
}