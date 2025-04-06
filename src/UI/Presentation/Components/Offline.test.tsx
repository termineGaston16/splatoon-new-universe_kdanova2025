import { fireEvent, render, screen } from "@testing-library/react"
import Offline from "./Offline"

describe('Offline', () => {
    beforeEach(() => {
        render(<Offline />)

    })
    afterEach(() => {
        vi.clearAllMocks();
    })

    it('Renderizar el cartel de alerta', () => {
        const sign = screen.getByRole('img', { name: /alerta|mensaje|notificación/i });
        expect(sign).toBeInTheDocument();
    })

    it('Renderizar el mensaje de alerta', () => {
        const alert = screen.getByText(/conexión|perdida|perdido|internet/i)
        expect(alert).toBeInTheDocument();
    })

    it('Renderizar el botón de recargar página', () => {
        const reloadBtn = screen.getByRole('button', { name: /reintentar|recargar|cargar/i })
        expect(reloadBtn).toBeInTheDocument();
    })

    // Un espía te permite verificar que cuando ocurre una acción (como un clic), se ejecuta una función específica.
    it('Debe recargar la página al hacer click en el botón', () => {
        const restore = mockReload();

        const reloadBtn = screen.getByRole('button', { name: /reintentar|recargar|cargar/i });
        fireEvent.click(reloadBtn);
        expect(window.location.reload).toHaveBeenCalled();

        restore();
    });


    it('Recarga la página automáticamente al volver el internet', () => {
        vi.useFakeTimers(); // <-- Activar los timers falsos.

        const restore = mockReload();

        // Simulamos el evento 'online' (cuando vuelve la conexión)
        window.dispatchEvent(new Event('online'));

        // Avanzamos el tiempo para que se ejecute el setTimeout
        vi.runAllTimers();

        expect(window.location.reload).toHaveBeenCalled();

        restore();
        vi.useRealTimers(); // Limpiar al final
    });


})


function mockReload() {
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
        value: {
            ...originalLocation,
            reload: vi.fn(),
        },
        writable: true,
    });
    return () => {
        Object.defineProperty(window, 'location', {
            value: originalLocation,
        });
    };
}


