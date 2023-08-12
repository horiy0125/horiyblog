import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";

type Props = {} & BaseProps;

export const Link = component$((props: Props) => {
  const urls = [
    "https://static.horiy.dev",
    "https://static.horiy.dev/avatar/oretan",
    "https://static.horiy.dev/avatar/cocotan",
  ];
  const href = urls[Math.floor(Math.random() * urls.length)];

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      class={props.class}
    >
      🐹
    </a>
  );
});
