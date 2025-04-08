import { render, screen, waitFor } from "@testing-library/react"
import DefaultDynamicSuspension from "./DefaultDynamicSuspension"
import { FC, lazy, Suspense } from "react";

describe('DefaultDynamicSuspension', () => {
    afterEach(() => vi.clearAllMocks());

    it('Debe Renderizar 1 bloque de carga', () => {

        render(
            <DefaultDynamicSuspension
                countBlocks={1}
            />
        )

        const blocks = screen.getAllByTestId(/bloque|block|cargando|carga|load|loading/i)

        expect(blocks).toHaveLength(1);
    })

    it('Debe Renderizar 3 bloque de carga', () => {

        render(
            <DefaultDynamicSuspension
                countBlocks={3}
            />
        )

        const blocks = screen.getAllByTestId(/bloque|block|cargando|carga|load|loading/i)
        expect(blocks).toHaveLength(3);
    })

    it('Una vez que el componente original se haya cargado debe mostrarse a continuación y el suspense debe desaparecer', async () => {

        // Simula un componente que tarda en cargar
        const LazyComponent = lazy(() =>
            new Promise<{ default: FC }>(resolve =>
                setTimeout(() =>
                    resolve({
                        default: () => <div>¡Contenido Cargado!</div>
                    }), 100)
            )
        );

        render(
            <Suspense
                fallback={
                    <DefaultDynamicSuspension
                        countBlocks={1}
                    />
                }>
                <LazyComponent />
            </Suspense>
        )

        const blocks = screen.getAllByTestId("block-loading")
        expect(blocks).toHaveLength(1);

        await waitFor(() =>
            expect(screen.getByText('¡Contenido Cargado!')).toBeInTheDocument()
        )

        const notBlocks = screen.queryByRole(
            'status',
            { name: 'Contenido cargándose' }
        )
        expect(notBlocks).not.toBeInTheDocument();
    })
})