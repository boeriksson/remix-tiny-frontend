import {
    ReactMFEType,
    loadReactMFEServer,
} from "react-mfe-contract";

export let ReactMFEServer: ReactMFEType;

export const ensureReactMFELoadedServer =
    async (): Promise<string> => {
        const tinyFrontendServerResponse = await loadReactMFEServer(
            "http://localhost:5555"
        );

        ReactMFEServer = tinyFrontendServerResponse.tinyFrontend;
        return tinyFrontendServerResponse.tinyFrontendStringToAddToSsrResult;
    };