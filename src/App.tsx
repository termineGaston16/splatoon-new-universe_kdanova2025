import { BrowserRouter, Routes } from "react-router-dom";
import AlertInOnline from "./UI/Presentation/Elements/AlertInOnline";

export default function App() {

    return (
        <BrowserRouter>
            <AlertInOnline />

            <Routes>
            </Routes>
        </BrowserRouter>
    )
}