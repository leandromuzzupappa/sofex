import { Footer } from "@components/Footer/Footer";
import { Playground } from "@pages/Playground/Playground";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/playground")({
  component: () => (
    <>
      <Playground />
      <Footer />
    </>
  ),
});
