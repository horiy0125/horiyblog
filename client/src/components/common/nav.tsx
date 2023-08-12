import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";
import { Link } from "./link";
import { pageRoutes } from "~/config/pageRoutes";
import { classes } from "~/utils/classes";

type Props = {} & BaseProps;

export const Nav = component$((props: Props) => {
  return (
    <nav class={classes(props.class, "container-fluid")}>
      <ul>
        <li>
          <Link href={pageRoutes.index}>horiyblog</Link>
        </li>
      </ul>
    </nav>
  );
});
