import { render, screen } from "@testing-library/react"
import ProfileSection from "./ProfileSection"

describe('ProfileSection', () => {
    it('Renderizar el título principal', () => {
        const mainTitle = 'Acerca De'

        render(
            <ProfileSection
                mainTitle={mainTitle}
                sections={[]}
            />
        )

        expect(
            screen.getByText(mainTitle)
        ).toBeInTheDocument();
    })

    it('Renderizar dos ProfileInfoSection, uno con img y el otro con iframe', () => {
        const info1 = 'Splatoon es un juego';
        const alt1 = 'imagen 1'

        const info2 = 'La OctoExpación le gana a la Cara del orden'
        const ariaLabel = 'Nasty Majesty temardo'
        const url = 'url'

        render(
            <ProfileSection
                mainTitle={'Titulo Principal'}
                sections={[
                    {
                        info: info1,
                        imgAlt: alt1,
                        imgUrl: ''
                    },
                    {
                        info: info2,
                        iframeAriaLabel: ariaLabel,
                        iframeUrl: url
                    },
                ]}
            />
        )

        expect(
            screen.getByText(info1)
        ).toBeInTheDocument();
        expect(
            screen.getByRole('img', {
                name: 'imagen 1'
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(info2)
        ).toBeInTheDocument();
        expect(
            screen.getByRole('iframe', {
                name: 'Nasty Majesty temardo'
            })
        ).toBeInTheDocument();

    })
})