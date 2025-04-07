import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import DefaultActionableButton from "./DefaultActionableButton";

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

        const btn = screen.getByRole('button', { name: /volver/i });
        await userEvent.setup().click(btn);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});