import React, {MouseEventHandler} from 'react';

export interface ButtonProps {
    label: string;
    backgroundColor?: string;
    onClick: MouseEventHandler;
}

export default function Button({label, backgroundColor, onClick}: ButtonProps) {
    let style = {};

    if (backgroundColor) {
        style = {...style, backgroundColor};
    }

    return <button onClick={onClick} style={style}>{label}</button>;
}
