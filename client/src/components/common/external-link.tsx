import { Slot, component$ } from "@builder.io/qwik";
import type { LinkProps } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

type Props = {
  openInNewTab?: boolean;
} & LinkProps;

export const ExternalLink = component$((props: Props) => {
  const target = props.openInNewTab === false ? undefined : "_blank";

  return (
    <Link {...props} rel="noopener noreferrer" target={target}>
      <Slot />
    </Link>
  );
});
