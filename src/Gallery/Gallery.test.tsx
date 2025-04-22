import { screen, within } from "@testing-library/react"

describe('Gallery', () => {
    // beforeEach(() => render(<Gallery />));

    it('Implementar el título de la galería', () => {
        const title = screen.getByText((_, element) =>
            element?.tagName.toLocaleLowerCase() === 'h2');
        const content = within(title);


        expect(
            content.getByText(content =>
                /galería|albúm|lista/i.test(content)
            )).toBeInTheDocument();
    })

    it('Implementar información complementaria', () => {
        const labelP = screen.getByText((_, element) =>
            element?.tagName.toLocaleLowerCase() === 'p');
        const infoComplement = within(labelP);

        expect(
            infoComplement.getByText(content =>
                /diseños|imágenes|ilustraciones|arte/i.test(content)
                && /kda\/nova/i.test(content)
            )
        ).toBeInTheDocument();
    })

    // test('Monta y desmonta las figuras correctamente con useVirtual', async () => {
    //     const firstImage = await screen.findByRole('img', {
    //         name: 'Letra S de color blanco, con borde negro y una sombra de color verde lima y por encima la palabra new sobre una mancha de pintura color limón'
    //     });
    //     const firstText = await screen.findByText('Favicon');


    //     const lastImage = await screen.findByRole('img', {
    //         name: 'Logotipo circular en color blanco, con un bordeado de color azul, rojo y amarillo y rodeado de la pregunta: ¿Quiénes son?'
    //     })
    //     const lastText = await screen.findByText('Deep Cut Portada Individual');

    //     expect(firstImage).toBeInTheDocument();
    //     expect(firstText).toBeInTheDocument();

    //     expect(lastImage).not.toBeInTheDocument();
    //     expect(lastText).not.toBeInTheDocument();

    //     const gallery = screen.getByRole('list', {
    //         name: 'Galería de Ilustraciones'
    //     })

    //     act(() => {
    //         gallery.scrollTop = 5000;
    //         gallery.dispatchEvent(new Event('scroll'));
    //     });

    //     await waitFor(() => {
    //         const firstImage = await screen.findByRole('img', {
    //             name: 'Letra S de color blanco, con borde negro y una sombra de color verde lima y por encima la palabra new sobre una mancha de pintura color limón'
    //         });
    //         const firstText = await screen.findByText('Favicon');


    //         const lastImage = await screen.findByRole('img', {
    //             name: 'Logotipo circular en color blanco, con un bordeado de color azul, rojo y amarillo y rodeado de la pregunta: ¿Quiénes son?'
    //         })
    //         const lastText = await screen.findByText('Deep Cut Portada Individual');

    //         expect(firstImage).not.toBeInTheDocument();
    //         expect(firstText).not.toBeInTheDocument();

    //         expect(lastImage).toBeInTheDocument();
    //         expect(lastText).toBeInTheDocument();
    //     });
    // });
})

