import { render, screen } from "@testing-library/react"
import ProfileSideBar from "./ProfileSidebar"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe('ProfileSidebar', () => {
    it('Renderizar 2 selectores', () => {
        const text1 = 'selector1'
        const text2 = 'selector2'

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileSideBar
                    selectors={[
                        {
                            alt: '',
                            url: '',
                            text: text1,
                            to: '',
                            ariaLabel: ''
                        },
                        {
                            alt: '',
                            url: '',
                            text: text2,
                            to: '',
                            ariaLabel: ''
                        }
                    ]}
                ></ProfileSideBar>
            </MemoryRouter>
        )

        expect(
            screen.getByText('selector1')
        ).toBeInTheDocument();
        expect(
            screen.getByText('selector2')
        ).toBeInTheDocument();
    })

    it('Que los selectores redireccionen a las distintas secciones.', async () => {
        const sel1 = 'Acerca de';
        const sel2 = 'Jugabilidad';
        const sel3 = 'Lore';

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileSideBar
                    selectors={[
                        {
                            alt: '',
                            url: '',
                            text: sel1,
                            to: '#acerca-de',
                            ariaLabel: ''
                        },
                        {
                            alt: '',
                            url: '',
                            text: sel2,
                            to: '#jugabilidad',
                            ariaLabel: ''
                        }
                        ,
                        {
                            alt: '',
                            url: '',
                            text: sel3,
                            to: '#lore',
                            ariaLabel: ''
                        }
                    ]}
                ></ProfileSideBar>
            </MemoryRouter>
        )

        const bt1 = screen.getByRole('link', {
            name: 'Acerca de'
        });
        const bt2 = screen.getByRole('link', {
            name: 'Jugabilidad'
        });
        const bt3 = screen.getByRole('link', {
            name: 'Lore'
        });

        await userEvent.setup().click(bt1)
        expect(bt1).toHaveAttribute('href', '/#acerca-de');

        await userEvent.setup().click(bt2)
        expect(bt2).toHaveAttribute('href', '/#jugabilidad');

        await userEvent.setup().click(bt3)
        expect(bt3).toHaveAttribute('href', '/#lore');
    })
})