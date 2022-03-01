import React, {useEffect, useState} from "react";
import {ReactMFEProps} from "../../contract/src/props";
import styles from "./index.module.css"

const ReactMFE: React.FC<ReactMFEProps> = ({
        name,
        onCounterChange,
    }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        onCounterChange?.(value)
    }, [value, onCounterChange]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{name}!</h1>

            <div>
                <p>
                    Button pressed: <strong>{value} times</strong>!
                </p>
            </div>

            <button onClick={() => {
                setValue((value) => value + 1)
            }}>Click</button>
        </div>
    );
};

export default ReactMFE;