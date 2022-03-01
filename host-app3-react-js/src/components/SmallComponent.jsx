import React from 'react'
import regeneratorRuntime from "regenerator-runtime"
import {
    loadReactMFEClient,
} from "react-mfe-contract"
import { useEffect, useState } from "react"

const SmallComponent = () => {
    const [MFE, setMFE] = useState();

    const [counter, setCounter] = useState(0)

    const loadMFE = async () => {
        const loadedMFE = await loadReactMFEClient(
            "http://localhost:5555"
        )
        setMFE(() => loadedMFE);
    }

    useEffect(() => {
        console.log('Gonna load MFE...')
        loadMFE()
        console.log('MFE loaded!')
        return () => {
            console.log('Cleaning state on unMount...')
            setMFE(null)
            setCounter(0)
        }
    }, [])

    return (
        <div>
            {MFE ? (
                <MFE name="React MFE" onCounterChange={(count) => {
                    console.log(`onCounterChange in host app - count: ${count}`)
                    setCounter(count)
                }} />
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