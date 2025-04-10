import { render, screen } from "@testing-library/react"
import ProfileSideBar from "./ProfileSidebar"
import { MemoryRouter } from "react-router-dom"

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

    it('Que los selectores me redireccionen a la sección especifica', () => {
        const section1 = '#acerca-de'
        const section2 = '#jugabilidad'
        const section3 = '#lore'

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileSideBar
                    selectors={[
                        {
                            alt: '',
                            url: '',
                            text: '',
                            to: 'section1',
                            ariaLabel: 'Acceder a la sección 1'
                        },
                        {
                            alt: '',
                            url: '',
                            text: '',
                            to: '',
                            ariaLabel: ''
                        },
                        {
                            alt: '',
                            url: '',
                            text: '',
                            to: '',
                            ariaLabel: ''
                        }
                    ]}
                ></ProfileSideBar>
            </MemoryRouter>
        )
    })
})