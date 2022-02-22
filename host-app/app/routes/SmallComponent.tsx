import {
    ReactMFEType,
    loadReactMFEClient,
} from "react-mfe-contract"
import { useEffect, useState } from "react"

const SmallComponent = () => {
    const [MFE, setMFE] =
        useState<ReactMFEType>();

    const [counter, setCounter] = useState(0)

    const loadMFE = async () => {
        const loadedMFE = await loadReactMFEClient(
            "http://localhost:5555"
        );

        setMFE(() => loadedMFE);
    }

    useEffect(() => {
        loadMFE();
    }, [])

    return (
        <div>
            {MFE ? (
                <MFE name="React MFE" onCounterChange={setCounter} />
            ) : (
                <strong>Loading...</strong>
            )}
            <p>
                You have pressed the button inside the tiny frontend{" "}
                <strong>{counter} times</strong>.
            </p>
        </div>
    )
}

export default SmallComponent