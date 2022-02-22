import {
    ReactMFEType,
    loadReactMFEClient
} from "react-mfe-contract"
import { useEffect, useState } from "react"
import {Link} from "@remix-run/react"

export default function ClientSideOnly() {
    const [ExampleTinyFrontend, setExampleTinyFrontend] =
        useState<ReactMFEType>();

    const [counter, setCounter] = useState(0);

    const loadTinyFrontend = async () => {
        const ExampleTinyFrontend = await loadReactMFEClient(
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