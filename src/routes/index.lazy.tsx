import { createLazyFileRoute } from "@tanstack/react-router";
import { Homepage } from "@pages/Homepage/Homepage";

export const Route = createLazyFileRoute("/")({
  component: () => <Homepage />,
});
