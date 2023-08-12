import { Slot, component$ } from "@builder.io/qwik";
import { type LinkProps, Link as QwikLink } from "@builder.io/qwik-city";
import type { BaseProps } from "~/types";

type Props = {
  isExternalLink?: boolean;
  openInNewTab?: boolean;
} & LinkProps &
  BaseProps;

export const Link = component$((props: Props) => {
  const rel = props.isExternalLink === true ? "noopener noreferrer" : undefined;
  const target =
    props.isExternalLink === true || props.openInNewTab === true
      ? "_blank"
      : undefined;

  return (
    <QwikLink rel={rel} target={target} {...props}>
      <Slot />
    </QwikLink>
  );
});
