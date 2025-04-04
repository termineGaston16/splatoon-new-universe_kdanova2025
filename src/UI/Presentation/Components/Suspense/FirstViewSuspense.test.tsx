import { render } from '@testing-library/react';
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

    it('Rne')
})