import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import { ensureReactMFELoadedClient } from "~/reactMFE/reactMFE.client";

ensureReactMFELoadedClient().then(() =>
    hydrate(<RemixBrowser />, document)
);