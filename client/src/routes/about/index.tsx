import { component$ } from "@builder.io/qwik";
import { CareerSection } from "~/components/about/career";
import { HistorySection } from "~/components/about/history";
import { ProfileSection } from "~/components/about/profile";

export default component$(() => {
  return (
    <div>
      <h1>About Me</h1>

      <ProfileSection />
      <hr />
      <CareerSection />
      <hr />
      <HistorySection />
    </div>
  );
});
