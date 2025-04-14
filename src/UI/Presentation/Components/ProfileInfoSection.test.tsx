import { render, screen } from "@testing-library/react";
import ProfileInfoSection from "./ProfileInfoSection";

describe('ProfileInfoSection', () => {

    it('Renderizar Texto e Iframe pasado por param', () => {
        const info = 'Splatoon es un juego de Nintendo';

        const iframeArialLabel = 'Trailer 1';

        render(
            <ProfileInfoSection
                info={info}
                iframeUrl='url'
                iframeAriaLabel={iframeArialLabel}
            />
        )

        const iframe = screen.getByRole('iframe', {
            name: 'Trailer 1'
        });

        expect(
            screen.getByText(info)
        ).toBeInTheDocument();

        expect(iframe).toBeInTheDocument();
    });

    it('Renderizar imagen en vez de un Iframe', () => {
        const imgAlt = 'imagen 1';

        render(
            <ProfileInfoSection
                info=''
                imgAlt={imgAlt}
                imgUrl=''
            />
        )

        const img = screen.getByRole('img', {
            name: 'imagen 1'
        });
        expect(img).toBeInTheDocument();
    });
})