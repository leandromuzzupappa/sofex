import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "@assets/styles/global.css";

const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
