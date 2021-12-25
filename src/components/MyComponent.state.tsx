import {Dispatch, Ref, RefObject, SetStateAction, useEffect, useRef, useState} from 'react';

export interface MyComponentProps {
    header: string;
}

export interface MyComponentState extends MyComponentProps {
    show: boolean;
    setShow: (show: boolean) => void;
    counter: number;
    containerRef: Ref<HTMLDivElement>;
}

export function useWatchMouseMove(watchElementRef: RefObject<HTMLDivElement>) {
    useEffect(() => {
        function logMouseMove({pageX, pageY}: MouseEvent) {
            console.log(pageX, pageY);
        }

        if (watchElementRef.current === null) return;

        const ref = watchElementRef.current;

        ref.addEventListener('mousemove', logMouseMove);

        return () => ref.removeEventListener('mousemove', logMouseMove);
    }, [watchElementRef]);
}

export function useCounterUpdateInterval(setCounter: Dispatch<SetStateAction<number>>, interval: number) {
    useEffect(() => {
        const counterInterval = setInterval(
            () => setCounter((counter) => counter + 1),
            interval,
        );

        return () => clearInterval(counterInterval);
    }, [setCounter, interval]);
}

export function useMyComponentState(props: MyComponentProps): MyComponentState {
    const [show, setShow] = useState(true);
    const [counter, setCounter] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useCounterUpdateInterval(setCounter, 500);
    useWatchMouseMove(containerRef);

    return {
        show,
        setShow,
        counter,
        containerRef,
        ...props,
    };
}
