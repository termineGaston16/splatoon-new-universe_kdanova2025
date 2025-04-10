import { render, screen, within } from "@testing-library/react"
import MainFooter from "./MainFooter"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('MainFooter', () => {

    it('Renderizar el texto de advertencia', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainFooter />
                        }
                    />
                </Routes>
            </MemoryRouter>
        )

        const paragraph = screen.getByText((_, element) => element?.tagName.toLowerCase() === 'p');
        const utils = within(paragraph);

        expect(utils.getByText(/fan-page/i)).toBeInTheDocument();
        expect(utils.getByText(/KDA\/NOVA/i)).toBeInTheDocument();
        expect(utils.getByText(/sin fines de lucros/i)).toBeInTheDocument();
        expect(utils.getByText(/nintendo/i)).toBeInTheDocument();
    });

    it('Poder acceder a la galería desde el footer', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainFooter />
                        }
                    />
                    <Route
                        path="/galeria"
                        element={
                            <div>
                                Estás en la galería
                            </div>
                        }
                    />
                </Routes>
            </MemoryRouter>
        )

        const link = screen.getByRole('link', {
            name: content =>
                /ir|acceder|redireccionar/i.test(content)
                && /galería|imagenes|albún/i.test(content)
        })

        expect(link).toBeInTheDocument();

        await userEvent.setup().click(link);

        const gallery = screen.getByText('Estás en la galería')
        expect(gallery).toBeInTheDocument();
    });

    // it('Acceder a las páginas oficiales de Nintendo y Splatoon', () => {

    //     const t1 = screen.getByText('Descubre Splatoon');
    //     const t2 = screen.getByText('Descubre Nintendo');

    //     const tw = screen.getAllByRole('link', { name: 'Twitter' });

    //     const so = screen.getByRole('link', { name: 'Sitio Oficial' });
    //     const cj = screen.getByRole('link', { name: 'Comprar Juego' });

    //     const yt = screen.getByRole('link', { name: 'Youtube' });
    //     const nos = screen.getByRole('link', { name: 'Nintendo Oficial Site' });
    //     const wp = screen.getByRole('link', { name: 'Website Policy' });
    //     const ns = screen.getByRole('link', { name: 'Nintendo Switch' });


    //     expect(t1).toBeInTheDocument();
    //     expect(t2).toBeInTheDocument();

    //     for (const twitter of tw) {
    //         expect(twitter).toBeInTheDocument();
    //         expect(twitter).toHaveAttribute('target', '_blank');
    //     };
    //     expect(tw[0]).toHaveAttribute('href', 'https://x.com/SplatoonJP');
    //     expect(tw[1]).toHaveAttribute('href', 'https://x.com/Nintendo');

    //     expect(so).toBeInTheDocument();
    //     expect(so).toHaveAttribute('target', '_blank');
    //     expect(so).toHaveAttribute('href', 'https://www.nintendo.com/jp/character/splatoon/en/index.html');

    //     expect(cj).toBeInTheDocument();
    //     expect(cj).toHaveAttribute('target', '_blank');
    //     expect(cj).toHaveAttribute('href', 'https://www.nintendo.com/es-ar/store/products/splatoon-3-switch/');

    //     expect(yt).toBeInTheDocument();
    //     expect(yt).toHaveAttribute('target', '_blank');
    //     expect(yt).toHaveAttribute('href', 'https://www.youtube.com/@NintendoAmerica/videos');

    //     expect(nos).toBeInTheDocument();
    //     expect(nos).toHaveAttribute('target', '_blank');
    //     expect(nos).toHaveAttribute('href', 'https://www.nintendo.com/jp/index.html');

    //     expect(wp).toBeInTheDocument();
    //     expect(wp).toHaveAttribute('target', '_blank');
    //     expect(wp).toHaveAttribute('href', 'https://www.nintendo.com/jp/about_hp.html');

    //     expect(ns).toBeInTheDocument();
    //     expect(ns).toHaveAttribute('target', '_blank');
    //     expect(ns).toHaveAttribute('href', 'https://www.nintendo.com/es-ar/switch/');
    // });
})
