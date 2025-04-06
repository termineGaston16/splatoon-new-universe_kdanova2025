import { render, screen } from "@testing-library/react";
import AlertInOnline from './AlertInOnline';

describe('AlertInOnline', () => {
    beforeEach(() => {
        render(<AlertInOnline />);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('La alerta debe contener el logo de exclamación.', () => {
        const iconAlert = screen.getByRole('img', { name: /alerta/i })
        expect(iconAlert).toBeInTheDocument();
    })
});
