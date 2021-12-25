import clsx from "clsx";
import styles from "./MyComponent.module.css";
import withState from "../hoc/withState";
import {MyComponentState, useMyComponentState} from './MyComponent.state';
import React from "react";

export const MyComponent = (props: MyComponentState) => (
    <>
        <div
            className={clsx(styles.content, {
                [styles.show]: props.show
            })}
            ref={props.containerRef}
        >
            <h1>
                {props.header}: {props.counter}
            </h1>
        </div>
        <button onClick={() => props.setShow(!props.show)}>
            {props.show ? "Hide" : "Show"} Content
        </button>
    </>
);

export default withState(MyComponent, useMyComponentState);
