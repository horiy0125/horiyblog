import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
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
            <Link href={pageRoutes.posts}>Posts</Link>
          </li>
        </ul>
      </nav>

      <h1>Blog Posts</h1>
    </div>
  );
});
