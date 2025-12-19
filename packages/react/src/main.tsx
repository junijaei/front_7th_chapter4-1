import { App } from "./App";
import { ClientRouter, RouterProvider } from "./router";
import { initRoutes } from "./routes";
import { BASE_URL } from "./constants.ts";
import { createRoot } from "react-dom/client";
import type { FunctionComponent } from "react";

const enableMocking = () =>
  import("./mocks/browser").then(({ worker }) =>
    worker.start({
      serviceWorker: {
        url: `${BASE_URL}mockServiceWorker.js`,
      },
      onUnhandledRequest: "bypass",
    }),
  );

function main() {
  const router = new ClientRouter<FunctionComponent>(BASE_URL);
  initRoutes(router);
  router.start();

  const rootElement = document.getElementById("root")!;
  createRoot(rootElement).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
  );
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
