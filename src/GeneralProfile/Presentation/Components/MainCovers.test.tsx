import { render, screen } from "@testing-library/react";
import MainCovers from "./MainCovers";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('MainCovers', () => {
    it('Renderizar las 4 imagenes que se le pasan por promt', () => {
        const alt1 = 'imagen 1'
        const alt2 = 'imagen 3'
        const alt3 = 'imagen 3'
        const alt4 = 'imagen 4'

        render(
            <MemoryRouter>
                <MainCovers
                    alt1={alt1}
                    alt2={alt2}
                    alt3={alt3}
                    alt4={alt4}
                    url1=""
                    url2=""
                    url3=""
                    url4=""
                    ariaLabelCoverOne=""
                    ariaLabelCoverTwo=""
                    linkCoverOne=""
                    linkCoverTwo="" idNav={""} />
            </MemoryRouter>
        )

        const images = screen.getAllByRole('img', {
            name: /image/i
        })
        expect(images).toHaveLength(4)
    })

    it('La primera portada individual debe redireccionar al link pasado por promt', async () => {
        const linkCover = 'primera-ruta';

        render(
            <MemoryRouter initialEntries={['/']}>
                <MainCovers
                    alt1={'imagen de redirección 1'}
                    alt2={''}
                    alt3={''}
                    alt4={''}
                    url1=""
                    url2=""
                    url3=""
                    url4=""
                    linkCoverOne={linkCover}
                    ariaLabelCoverOne={'Acceder al perfil Splatoon desde la página principal'}
                    ariaLabelCoverTwo=""
                    linkCoverTwo="" idNav={""} />

                <Routes>
                    <Route
                        path="/primera-ruta"
                        element={
                            <div>
                                Sección 1
                            </div>
                        }
                    />
                </Routes>
            </MemoryRouter>
        )

        const img = screen.getByRole('img', {
            name: 'imagen de redirección 1'
        })

        expect(img).toBeInTheDocument();

        const individualCoverOne = screen.getByRole('link', {
            name: 'Acceder al perfil Splatoon desde la página principal'
        });

        await userEvent.setup().click(individualCoverOne);

        expect(
            screen.getByText('Sección 1')
        ).toBeInTheDocument();

    });
});