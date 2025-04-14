import { render, screen } from "@testing-library/react"
import GeneralProfileIdol from "./GeneralProfileIdol"

describe('GeneralProfileIdol', () => {
    it('Renderizar el encabezado principal', () => {
        const frontPageAlt = 'poster de las SquidSister'
        const frontPageUrl = ''

        const nameIdols = 'Squid Sisters'
        const descriptionIdols = 'Las mejores'

        render(
            <GeneralProfileIdol
                frontPageAlt={frontPageAlt}
                frontPageUrl={frontPageUrl}
                nameIdols={nameIdols}
                descriptionIdols={descriptionIdols}
                sections={[]}
            />
        )

        expect(
            screen.getByRole('img', {
                name: 'poster de las SquidSister'
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText('Squid Sisters')
        ).toBeInTheDocument();
        expect(
            screen.getByText('Las mejores')
        ).toBeInTheDocument();
    })

    it('Renderizar dos ProfileInfoSections', () => {

        const info1 = 'las Squid Sisters son las mejores';
        const imgAlt1 = 'imagen 1';

        const info2 = 'las Squid Sisters son las mejores 2';
        const imgAlt2 = 'imagen 2';

        render(
            <GeneralProfileIdol
                frontPageAlt=''
                frontPageUrl=''
                nameIdols=''
                descriptionIdols=''
                sections={[
                    {
                        info: info1,
                        imgAlt: imgAlt1,
                    },
                    {
                        info: info2,
                        imgAlt: imgAlt2,
                    }
                ]}
            />
        )

        expect(
            screen.getByText(info1)
        ).toBeInTheDocument();
        const img1 = screen.getByRole('img', {
            name: 'imagen 1'
        });
        expect(img1).toBeInTheDocument();

        expect(
            screen.getByText(info2)
        ).toBeInTheDocument();
        const img2 = screen.getByRole('img', {
            name: 'imagen 2'
        });
        expect(img2).toBeInTheDocument();
    })
})