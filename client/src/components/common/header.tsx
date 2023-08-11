import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";

export const Header = component$((props: BaseProps) => {
  return <header class={props.class}></header>;
});
