import { createLazyFileRoute } from "@tanstack/react-router";
import { Footer } from "@components/Footer/Footer";
import { Legalspage } from "@pages/Legalspage/Legalspage";

export const Route = createLazyFileRoute("/terminos-y-condiciones")({
  component: () => (
    <>
      <Legalspage />
      <Footer />
    </>
  ),
});
