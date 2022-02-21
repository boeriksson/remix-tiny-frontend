import {
    ExampleTinyFrontendType,
    loadExampleTinyFrontendClient,
} from "@tiny-frontend/example-tiny-frontend-contract";
import { useEffect, useState } from "react";
import * as React from "react";
import {Link} from "@remix-run/react";

export default function ClientSideOnly() {
    const [ExampleTinyFrontend, setExampleTinyFrontend] =
        useState<ExampleTinyFrontendType>();

    const [counter, setCounter] = useState(0);

    const loadTinyFrontend = async () => {
        const ExampleTinyFrontend = await loadExampleTinyFrontendClient(
            "http://localhost:5555"
        );

        setExampleTinyFrontend(() => ExampleTinyFrontend);
    };

    useEffect(() => {
        loadTinyFrontend();
    }, []);

    return (
        <div className="space-y-4 md:space-y-6">
            {ExampleTinyFrontend ? (
                <ExampleTinyFrontend name="Remix" onCounterChange={setCounter} />
            ) : (
                <strong>Loading...</strong>
            )}
            <p>
                You have pressed the button inside the tiny frontend{" "}
                <strong>{counter} times</strong>.
            </p>
            <Link to={"/"} className="inline-block">
                ← Back to index
            </Link>
        </div>
    );
}