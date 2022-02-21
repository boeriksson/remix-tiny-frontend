import {
    ExampleTinyFrontendType,
    loadExampleTinyFrontendClient,
} from "@tiny-frontend/example-tiny-frontend-contract";

export let ExampleTinyFrontendClient: ExampleTinyFrontendType;

export const ensureExampleTinyFrontendLoadedClient = async () => {
    ExampleTinyFrontendClient = await loadExampleTinyFrontendClient(
        "http://localhost:5555"
    );
};