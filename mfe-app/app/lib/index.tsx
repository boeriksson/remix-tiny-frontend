import React, {useEffect, useState} from "react";

import {ExampleTinyFrontendProps} from "../../contract/src/props";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
        name,
        onCounterChange,
    }) => {
    const [value, setValue] = useState(0);

    useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

    return (
        <div>
            <h1>Hello {name}!</h1>

            <div>
                <p>
                    I&apos;m a{" "}
                    <a
                        href="https://tiny-frontend.github.io"
                        target="_blank"
                        rel="noreferrer"
                    >
                        tiny frontend
                    </a>{" "}
                    🐰 , I was deployed from{" "}
                    <a
                        href="https://github.com/tiny-frontend/example-tiny-frontend"
                        target="_blank"
                        rel="noreferrer"
                    >
                        this git repository
                    </a>
                    . I&apos;m just a regular React component, but my implementation was
                    loaded at runtime!
                </p>
                <p>
                    You pressed my button <strong>{value} times</strong>!
                </p>
            </div>

            <button onClick={() => setValue((value) => value + 1)}>Press me!</button>
        </div>
    );
};

export default ExampleTinyFrontend;