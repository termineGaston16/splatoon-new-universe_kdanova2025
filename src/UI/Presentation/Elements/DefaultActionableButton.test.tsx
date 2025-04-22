import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import DefaultActionableButton from "./DefaultActionableButton";
import { MemoryRouter } from "react-router-dom";

describe('DefaultActionableButton', () => {
    afterEach(() => vi.clearAllMocks());

    it('El botón debe mostrar el texto e imagen pasado por props', () => {

        const text = 'VOLVER';
        const alt = 'Flecha hacia arriba'

        render(
            <DefaultActionableButton
                altDefaultActionableButton={alt}
                textDefaultActionableButton={text}
                onClickDefaultActionableButton={() => { }}
            />
        );

        const textBtn = screen.getByText('VOLVER');
        const imgBtn = screen.getByRole('img', { name: 'Flecha hacia arriba' });

        expect(textBtn).toBeInTheDocument();
        expect(imgBtn).toBeInTheDocument();
    })

    it('El botón debe ejecutar el callback cuando se hace click', async () => {
        const handleClick = vi.fn();

        render(
            <DefaultActionableButton
                textDefaultActionableButton={'VOLVER'}
                altDefaultActionableButton={'Flecha hacia arriba'}
                onClickDefaultActionableButton={handleClick}
            />
        );

        const btn = screen.getByRole('button', {
            name: 'Abrir Menú Lateral'
        })
        await userEvent.setup().click(btn);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it('Abrir/Cerrar el menú lateral', async () => {
        render(
            <MemoryRouter>
                {/* <CompleteMainSidebar /> */}
            </MemoryRouter>
        )

        const btnOpenMenu = screen.getByRole('button', {
            name: 'Abrir Menú Lateral'
        })

        expect(
            screen.queryByRole('link', {
                name: 'Acceder al perfil Splatoon desde el menú desplegable'
            })
        ).not.toBeInTheDocument();

        await userEvent.setup().click(btnOpenMenu);

        expect(
            screen.getByRole('link', {
                name: 'Acceder al perfil Splatoon desde el menú desplegable'
            })
        ).toBeInTheDocument();

        await userEvent.setup().click(btnOpenMenu);

        expect(
            screen.queryByRole('link', {
                name: 'Acceder al perfil Splatoon desde el menú desplegable'
            })
        ).not.toBeInTheDocument();
    })
});