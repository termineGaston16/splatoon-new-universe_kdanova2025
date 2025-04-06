import { render, screen } from '@testing-library/react';
import FirstViewSuspense from './FirstViewSuspense';

describe("FirstViewSuspense", () => {
    beforeEach(() => {
        render(
            <FirstViewSuspense />
        )
    });

    afterEach(() => {
        vi.clearAllMocks();
    })

    it('Renderizar el Logo de carga mientras se monta el componente.', () => {
        const logo = screen.getByRole('img', { name: /logo.*carga/i })
        expect(logo).toBeInTheDocument();
    })

    it('Renderizar el mensaje mientras se monta el componente.', () => {
        const message = screen.getByText(/.*recursos/i)
        expect(message).toBeInTheDocument();
    })
})