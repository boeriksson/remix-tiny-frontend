import {
    ExampleTinyFrontendType,
    loadExampleTinyFrontendServer,
} from "@tiny-frontend/example-tiny-frontend-contract";

export let ExampleTinyFrontendServer: ExampleTinyFrontendType;

export const ensureExampleTinyFrontendLoadedServer =
    async (): Promise<string> => {
        const tinyFrontendServerResponse = await loadExampleTinyFrontendServer(
            "http://localhost:5555"
        );

        ExampleTinyFrontendServer = tinyFrontendServerResponse.tinyFrontend;
        return tinyFrontendServerResponse.tinyFrontendStringToAddToSsrResult;
    };