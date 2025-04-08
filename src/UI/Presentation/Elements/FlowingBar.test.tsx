import { render, screen } from "@testing-library/react"
import FlowingBar from "./FlowingBar"
import { MemoryRouter } from "react-router-dom";

describe('FlowingBar', () => {
    afterEach(() => vi.clearAllMocks());

    it('Debe renderizar el titulo y el subtitulo pasado', () => {
        const title = 'TITULO';
        const subT = 'subtitulo'

        render(
            <FlowingBar
                title={title}
                subT={subT}
                links={[]}
            />
        )

        expect(screen.getByText('TITULO')).toBeInTheDocument();
        expect(screen.getByText('subtitulo')).toBeInTheDocument();
    })

    it('Debe tener una dirección dinámica', () => {
        const ariaLabel = 'Dirigirse hacia el footer';

        render(
            <MemoryRouter>
                <FlowingBar
                    title={'TITULO'}
                    subT={'subtitulo'}
                    ariaLabelBar="Lista de coberturas disponibles"
                    links={[
                        {
                            ariaLabelLink: ariaLabel
                        }
                    ]}
                />
            </MemoryRouter>
        )

        const linkFound = screen.getAllByRole('link');

        expect(linkFound).toHaveLength(1);
        expect(linkFound[0]).toHaveAttribute('aria-label', 'Dirigirse hacia el footer');
    })

    it('Debe tener tres direcciones dinámicas', () => {

        const ariaLabels = [
            'Link 1', 'Link 2', 'Link 3'
        ]

        render(
            <MemoryRouter>
                <FlowingBar
                    title={'TITULO'}
                    subT={'subtitulo'}
                    ariaLabelBar="Lista de coberturas disponibles"
                    links={[
                        {
                            ariaLabelLink: ariaLabels[0]
                        },
                        {
                            ariaLabelLink: ariaLabels[1]
                        },
                        {
                            ariaLabelLink: ariaLabels[2]
                        }
                    ]}
                />
            </MemoryRouter>
        )

        const linkFound = screen.getAllByRole('link');

        expect(linkFound).toHaveLength(3);

        for (const index in linkFound) {
            expect(linkFound[index]).toHaveAttribute('aria-label', ariaLabels[index]);
        };

    })

    it('Si no hay direcciones dinámicas que no renderice la lista', () => {
        render(
            <MemoryRouter>
                <FlowingBar
                    title={'TITULO'}
                    subT={'subtitulo'}
                    links={[]}
                />
            </MemoryRouter>
        )

        const linkFound = screen.queryAllByRole('link');
        expect(linkFound).toHaveLength(0);
    })
})