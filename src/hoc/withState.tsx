import React, {ComponentType} from 'react';

export type StateGenerator<P, S> = (props: P) => S;

export default function withState<P extends object, S extends object>(Component: ComponentType<S>, state: StateGenerator<P, S>) {
    return (props: P) => <Component {...state(props)} />;
}
