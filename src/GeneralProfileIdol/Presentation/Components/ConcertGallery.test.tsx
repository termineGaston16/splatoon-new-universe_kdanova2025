import { render, screen } from "@testing-library/react"
import ConcertGallery from "./ConcertGallery"

describe('ConcertGallery', () => {
    it('Renderizar título principal "Conciertos" ', () => {
        const mainTitle = '¡Conciertos!'

        render(
            <ConcertGallery
                concerts={[]}
                description=""
            />
        )

        expect(
            screen.getByText(mainTitle)
        ).toBeInTheDocument();
    })

    it('Renderizar la descripción para los conciertos', () => {
        const description = 'Las SquidSisters en Tokyo';

        render(
            <ConcertGallery
                description={description}
                concerts={[]}
            />
        )

        expect(
            screen.getByText(description)
        ).toBeInTheDocument();
    })

    it('Renderizar lista de conciertos', () => {
        const link1 = '';
        const coverUrl1 = '';
        const coverAlt1 = 'imagen 1';
        const nameConcert1 = 'sq 1';
        const dateConcert1 = '1';

        const link2 = '';
        const coverUrl2 = '';
        const coverAlt2 = 'imagen 2';
        const nameConcert2 = 'sq 2';
        const dateConcert2 = '2';

        const link3 = '';
        const coverUrl3 = '';
        const coverAlt3 = 'imagen 3';
        const nameConcert3 = 'sq 3';
        const dateConcert3 = '3';

        render(
            <ConcertGallery
                description=''
                concerts={[
                    {
                        link: link1,
                        coverUrl: coverUrl1,
                        coverAlt: coverAlt1,
                        nameConcert: nameConcert1,
                        dateConcert: dateConcert1
                    },
                    {
                        link: link2,
                        coverUrl: coverUrl2,
                        coverAlt: coverAlt2,
                        nameConcert: nameConcert2,
                        dateConcert: dateConcert2
                    },
                    {
                        link: link3,
                        coverUrl: coverUrl3,
                        coverAlt: coverAlt3,
                        nameConcert: nameConcert3,
                        dateConcert: dateConcert3
                    }
                ]}
            />
        )

        const img1 = screen.getByRole('img', {
            name: 'imagen 1'
        })
        const name1 = screen.getByText('sq 1');
        const date1 = screen.getByText('1');

        const img2 = screen.getByRole('img', {
            name: 'imagen 2'
        })
        const name2 = screen.getByText('sq 2');
        const date2 = screen.getByText('2');

        const img3 = screen.getByRole('img', {
            name: 'imagen 3'
        })
        const name3 = screen.getByText('sq 3');
        const date3 = screen.getByText('3');

        expect(img1).toBeInTheDocument();
        expect(name1).toBeInTheDocument();
        expect(date1).toBeInTheDocument();

        expect(img2).toBeInTheDocument();
        expect(name2).toBeInTheDocument();
        expect(date2).toBeInTheDocument();

        expect(img3).toBeInTheDocument();
        expect(name3).toBeInTheDocument();
        expect(date3).toBeInTheDocument();
    })
})