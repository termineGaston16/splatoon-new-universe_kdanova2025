import { render, screen } from "@testing-library/react";
import FirstView from "./FirstView";

describe('FirstView', () => {
    beforeEach(() => render(<FirstView />));
    afterEach(() => vi.clearAllMocks());

    it('Renderizar el Logo Principal', () => {
        const mainLogo = screen.getByRole('img', {
            name: (content) =>
                /logo|logotipo|icon|/i.test(content)
                && /splatoon new universe/i.test(content)
        });

        expect(mainLogo).toBeInTheDocument();
    })

    it('Renderizar el video de presentación', () => {
        const presentationVideo = screen.getByRole('iframe', {
            name: 'Conmemoración del lanzamiento de Splatoon 3'
        })

        expect(presentationVideo).toBeInTheDocument();
    })

    it('Mostrar los créditos del video de presentación', () => {
        const videoName = screen.getByText(/SPLALBUM/i);
        const autorName = screen.getByText("Kirisame Rain");

        expect(videoName).toBeInTheDocument();
        expect(autorName).toBeInTheDocument();
    })
});