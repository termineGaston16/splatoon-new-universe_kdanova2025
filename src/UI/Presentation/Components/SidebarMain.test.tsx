import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('SidebarMain', () => {
    beforeEach(() => render(
        <MemoryRouter>
            {/* <SidebarMain /> */}
            <Routes>
                <Route path="/" element={<div>Perfil Principal</div>} />
                <Route path="/perfil-general=splatoon" element={<div>Splatoon 1</div>} />
            </Routes>
        </MemoryRouter>
    ));
    afterEach(() => vi.clearAllMocks());

    it('El Logo Principal debe redireccionar al Home', async () => {
        const mainLog = screen.getByRole('link', {
            name: "Acceder al perfil Splatoon desde el menú desplegable"
        })

        await userEvent.setup().click(mainLog);
        expect(screen.getByText(/perfil principal/i)).toBeInTheDocument();
    });

    it('Debe estar el copyright', () => {
        const nintendoCopy = screen.getByText((content) =>
            /nintendo/i.test(content) && /(copy|copyright|©)/i.test(content)
        );
        const kdanovaCopy = screen.getByText(/kdanova | kda\/nova/i);

        expect(nintendoCopy).toBeInTheDocument();
        expect(kdanovaCopy).toBeInTheDocument();
    })

    it('Evaluar que la navegación funcione', async () => {
        const link = screen.getByRole('link', {
            name: 'Acceder al perfil Splatoon desde la nevegacion desplegable'
        });

        await userEvent.setup().click(link);
        expect(screen.getByText("Splatoon 1")).toBeInTheDocument();
    })
});

