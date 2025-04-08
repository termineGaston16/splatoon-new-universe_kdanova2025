import { render, screen } from "@testing-library/react";
import IndividualCover from "./IndividualCover";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('IndividualCover', () => {
    afterEach(() => vi.clearAllMocks());

    it('Renderizar las 2 imágenes', () => {
        const alt1 = 'Alt 1';
        const alt2 = 'Alt 2';

        render(
            <MemoryRouter>
                <IndividualCover
                    alt1={alt1}
                    alt2={alt2}
                    url1=""
                    url2=""
                    path=""
                    ariaLabel=""
                />
            </MemoryRouter>
        )

        const img1 = screen.getByRole('img', {
            name: 'Alt 1'
        });
        const img2 = screen.getByRole('img', {
            name: 'Alt 2'
        });

        expect(img1).toBeInTheDocument();
        expect(img2).toBeInTheDocument();
    })

    it('Redireccionar a la ruta pasada por promt', async () => {
        const path = 'ruta'
        const ariaLabel = 'Acceder al perfil general de Splatoon'

        render(
            <MemoryRouter initialEntries={['/']}>
                <IndividualCover
                    alt1={'Alt 1'}
                    alt2={''}
                    url1=""
                    url2=""
                    path={path}
                    ariaLabel={ariaLabel}
                />

                <Routes>
                    <Route
                        path="ruta"
                        element={
                            <div>¡Nueva Ruta!</div>
                        }
                    />
                </Routes>
            </MemoryRouter>
        )

        const cover = screen.getByRole('link', {
            name: 'Acceder al perfil general de Splatoon'
        })

        await userEvent.setup().click(cover)

        expect(screen.getByText('¡Nueva Ruta!'))
    })
});

