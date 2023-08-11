import { component$ } from "@builder.io/qwik";
import { CareerSection } from "~/components/about/career";

export default component$(() => {
  return (
    <div>
      <h1>About Me</h1>

      <CareerSection />
    </div>
  );
});
