import { render, screen } from "@testing-library/react";
import ProfileDataSelector from "./ProfileDataSelector";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('ProfileDataSelector', () => {
    it('Que el selector renderice la imagen pasada por promt', () => {

        const alt = 'Ir a Splatoon';

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileDataSelector
                    alt={alt}
                    url=''
                    ariaLabel=""
                    text=""
                    to=""
                />
            </MemoryRouter>
        )

        const img = screen.getByRole('img', {
            name: 'Ir a Splatoon'
        })
        expect(img).toBeInTheDocument();
    })

    it('Que el selector renderice el texto pasado por promt', () => {
        const text = 'Acerca de';

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileDataSelector
                    alt=''
                    url=''
                    text={text}
                    ariaLabel=""
                    to=""
                />
            </MemoryRouter>
        )

        const message = screen.getByText('Acerca de')
        expect(message).toBeInTheDocument();
    })

    it('Que el selector me mande a la sección esperada', async () => {
        const section = '#splatoon-1';
        const ariaLabel = 'Acceder a más información'

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileDataSelector
                    alt=''
                    url=''
                    text=''
                    to={section}
                    ariaLabel={ariaLabel}
                />
            </MemoryRouter>
        )

        const red = screen.getByRole('link', {
            name: 'Acceder a más información'
        })
        await userEvent.setup().click(red);

        expect(red).toHaveAttribute('href', '/#splatoon-1')
    })
})