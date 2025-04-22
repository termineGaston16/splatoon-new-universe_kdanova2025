// import { useState } from "react";
// import DefaultActionableButton from "../Elements/DefaultActionableButton";
// import SidebarMain from "./SidebarMain";

// export default function CompleteMainSidebar() {

//     const [showSidebarMain, setShowSidebarMain] = useState<boolean>(false);

//     return (
//         <section aria-label="Menú lateral Completo">
//             <DefaultActionableButton
//                 urlDefaultActionableButton={
//                     showSidebarMain
//                         ? "/pictures/icons/close.png"
//                         : "/pictures/icons/side-menu.png"
//                 }
//                 textDefaultActionableButton={
//                     showSidebarMain ? 'CERRAR' : 'MENÚ'
//                 }
//                 onClickDefaultActionableButton={
//                     () => setShowSidebarMain(prevState => !prevState)
//                 }
//             />

//             {
//                 showSidebarMain &&
//                 <SidebarMain />
//             }
//         </section>
//     )
// }