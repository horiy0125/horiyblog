import { component$ } from "@builder.io/qwik";
import { CareerSection } from "~/components/about/career";
import { HistorySection } from "~/components/about/history";
import { ProfileSection } from "~/components/about/profile";
import { Link } from "~/components/link";
import { pageRoutes } from "~/config/pageRoutes";

export default component$(() => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link href={pageRoutes.index}>horiyblog</Link>
          </li>
          <li>
            <Link href={pageRoutes.about}>About</Link>
          </li>
        </ul>
      </nav>

      <h1>About Me</h1>

      <ProfileSection />
      <hr />
      <CareerSection />
      <hr />
      <HistorySection />
    </div>
  );
});
