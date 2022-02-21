import { useState } from "react";
import * as React from "react";

import { ExampleTinyFrontendClient } from "~/exampleTinyFrontend/exampleTinyFrontend.client";
import { ExampleTinyFrontendServer } from "~/exampleTinyFrontend/exampleTinyFrontend.server";
import {Link} from "@remix-run/react";

export default function Ssr() {
    const ExampleTinyFrontend =
        ExampleTinyFrontendClient || ExampleTinyFrontendServer;

    const [counter, setCounter] = useState(0);

    return (
        <div className="space-y-4 md:space-y-6">
            <ExampleTinyFrontend name={"Remix"} onCounterChange={setCounter} />
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