import { act, render, screen } from "@testing-library/react";
import AlertInOnline from './AlertInOnline';

describe('AlertInOnline', () => {
    beforeEach(() => {
        render(<AlertInOnline />);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    // it('La alerta debe contener el logo de exclamación.', () => {
    //     const iconAlert = screen.getByRole('img', { name: /alerta/i })
    //     expect(iconAlert).toBeInTheDocument();
    // })

    it('Cuando se monta el componente no debería aparecer ninguna alerta', () => {
        const alert = screen.queryByText(/conexión/i)
        expect(alert).not.toBeInTheDocument();
    })

    it('Cuando el usuario pierde/recupera la conexión a internet debe mostrarse la alerta por 3 segundos', () => {
        vi.useFakeTimers();

        act(() => {
            window.dispatchEvent(new Event('offline'));
        })

        const alert = screen.getByText(/conexión|sin|perdida|perdido|internet/i);
        expect(alert).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(3000);
        });

        const disappearedAlert = screen.queryByText(/conexión|sin|perdida|perdido|internet/i);
        expect(disappearedAlert).not.toBeInTheDocument();

        vi.useRealTimers();
    })
});
