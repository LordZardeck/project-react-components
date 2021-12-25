import React, {useState} from 'react';
import {render, screen} from '@testing-library/react';
import {MyComponent} from './MyComponent';
import {MyComponentState, useCounterUpdateInterval, useMyComponentState} from './MyComponent.state';
import {renderHook} from '@testing-library/react-hooks';

const mockState: Omit<MyComponentState, 'header'> = {
    show: true,
    setShow: () => {
    },
    counter: 0,
    containerRef: () => {
    },
};

describe('MyComponent view', () => {
    it('renders with "Counter" header', () => {
        render(<MyComponent header="Counter" {...mockState}/>);
        const headerText = screen.getByText(/Counter/i);
        expect(headerText).toBeInTheDocument();
    });
});

describe('MyComponent state', () => {
    describe('counter interval', () => {
        it('should update the counter at the given interval', async () => {
            const {result, waitForNextUpdate} = renderHook(() => {
                const [counter, setCounter] = useState(0);
                useCounterUpdateInterval(setCounter, 500);

                return counter;
            });

            expect(result.current).toBe(0);

            await waitForNextUpdate();

            expect(result.current).toBe(1);

            await waitForNextUpdate();

            expect(result.current).toBe(2);
        });
    });

    it('should update counter every 500ms', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useMyComponentState({header: 'hello'}));

        expect(result.current.counter).toBe(0);

        await waitForNextUpdate();

        expect(result.current.counter).toBe(1);

        await waitForNextUpdate();

        expect(result.current.counter).toBe(2);
    });
});
