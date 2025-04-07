import { render, screen } from "@testing-library/react"
import MainNavbar from "./MainNavbar"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('MainNavbar', () => {
    afterEach(() => vi.clearAllMocks());

    it('Los items del navbar deben redireccionar', async () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <MainNavbar />
                <Routes>
                    <Route path="/perfil-general=splatoon" element={<div>Splatoon 1</div>} />
                </Routes>
            </MemoryRouter>
        );

        const log1 = screen.getAllByRole('link', { name: /acceder|redireccionar|navegar|splatoon/i });

        expect(log1[0]).toBeInTheDocument();

        await userEvent.setup().click(log1[0]);

        expect(screen.getByText(/Splatoon 1/i)).toBeInTheDocument();
    })
})
