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
                    <Route path="/perfil-general=splatoon2" element={<div>Splatoon 2</div>} />
                    <Route path="/perfil-general=splatoon3" element={<div>Splatoon 3</div>} />
                </Routes>
            </MemoryRouter>
        );

        const paths = screen.getAllByRole('link', { name: /acceder|redireccionar|navegar|splatoon/i });
        const linksWithExpectedText = [
            'Splatoon 1',
            'Splatoon 2',
            'Splatoon 3'
        ];
        const user = userEvent.setup();

        for (const index in paths) {
            expect(paths[index]).toBeInTheDocument();

            await user.click(paths[index]);

            expect(screen.getByText(linksWithExpectedText[index])).toBeInTheDocument();
        };
    });
})
