import {
    loadTinyFrontendClient,
    loadTinyFrontendServer,
} from "@tiny-frontend/client";
import { TinyFrontendServerResponse } from "@tiny-frontend/client/dist/load.server";
import React from "react";

import type exportedModule from "../../app/lib/index";
import { tinyFrontendName, version } from "../package.json";

export type ReactMFEType = typeof exportedModule;

export const loadReactMFEServer = async (
    tinyApiEndpoint: string
): Promise<TinyFrontendServerResponse<ReactMFEType>> =>
    await loadTinyFrontendServer<ReactMFEType>({
        tinyApiEndpoint,
        name: tinyFrontendName,
        contractVersion: version,
        dependenciesMap: {
            react: React,
        },
    });

export const loadReactMFEClient = async (
    tinyApiEndpoint: string
): Promise<ReactMFEType> =>
    await loadTinyFrontendClient<ReactMFEType>({
        tinyApiEndpoint,
        name: tinyFrontendName,
        contractVersion: version,
        dependenciesMap: {
            react: React,
        },
    });