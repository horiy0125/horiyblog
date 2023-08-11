import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";

type Props = {} & BaseProps;

export const ProfileSection = component$((props: Props) => {
  return (
    <section class={props.class}>
      <div class="headings">
        <h2>Profile</h2>
        <p>自己紹介</p>
      </div>
    </section>
  );
});
