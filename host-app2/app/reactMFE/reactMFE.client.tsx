import {
    ReactMFEType,
    loadReactMFEClient,
} from "react-mfe-contract";

export let ReactMFEClient: ReactMFEType;

export const ensureReactMFELoadedClient = async () => {
    ReactMFEClient = await loadReactMFEClient(
        "http://localhost:5555"
    );
};