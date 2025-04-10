import { BrowserRouter, Routes } from "react-router-dom";
import AlertInOnline from "./UI/Presentation/Elements/AlertInOnline";
import DefaultActionableButton from "./UI/Presentation/Elements/DefaultActionableButton";

export default function App() {

    return (
        <BrowserRouter>
            <AlertInOnline />

            <DefaultActionableButton
                onClickDefaultActionableButton={
                    () => document.querySelector("#main-navbar")
                }
                textDefaultActionableButton="VOLVER"
                urlDefaultActionableButton="public/pictures/icons/squid-icon.png"
            />
            <main>
                <Routes>
                </Routes>
            </main>
        </BrowserRouter>
    )
}