import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";

type Props = {} & BaseProps;

export const HistorySection = component$((props: Props) => {
  return (
    <section class={props.class}>
      <div class="headings">
        <h2>History</h2>
        <p>来歴</p>
      </div>
    </section>
  );
});
