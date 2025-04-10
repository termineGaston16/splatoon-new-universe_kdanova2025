import { render, screen } from "@testing-library/react";
import ProfileDataSelector from "./ProfileDataSelector";
import { MemoryRouter } from "react-router-dom";

describe('ProfileDataSelector', () => {
    it('Que el selector renderice la imagen pasada por promt', () => {

        const alt = 'Ir a Splatoon';

        render(
            <MemoryRouter initialEntries={['/']}>
                <ProfileDataSelector
                    alt={alt}
                    url=''
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
                />
            </MemoryRouter>
        )

        const message = screen.getByText('Acerca de')
        expect(message).toBeInTheDocument();
    })

    // it('Que el selector me mande a la sección esperada', () => {
    //     const section = '#splatoon-2';

    //     render(
    //         <MemoryRouter initialEntries={['/']}>
    //             <ProfileDataSelector
    //                 alt=''
    //                 url=''
    //                 text=''
    //                 to={section}
    //             />

    //             <div>Seccion 1</div>
    //             <div id="splatoon-2">Seccion 2</div>
    //         </MemoryRouter>
    //     )

    //     const messageOne = screen.getByText('Seccion 1');
    //     const messageTwo = screen.queryByText('Seccion 2');

    //     expect(messageOne).toBeInTheDocument();
    //     expect(messageTwo).not.toBeInTheDocument();
    // })
})