import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";
import { Link } from "../common/link";

type Props = {} & BaseProps;

export const ProfileSection = component$((props: Props) => {
  return (
    <section class={props.class}>
      <div class="headings">
        <h2>Profile</h2>
        <p>自己紹介</p>
      </div>

      <article>
        <h3>堀内 凱登 / Kaito Horiuchi</h3>

        <aside>
          <nav>
            <ul>
              <li>
                <Link
                  isExternalLink
                  openInNewTab
                  href="https://atcoder.jp/users/horiy0125"
                >
                  AtCoder
                </Link>
              </li>
              <li>
                <Link
                  isExternalLink
                  openInNewTab
                  href="https://github.com/horiy0125"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  isExternalLink
                  openInNewTab
                  href="https://twitter.com/horiy0125"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  isExternalLink
                  openInNewTab
                  href="https://qiita.com/horiy0125"
                >
                  Qiita
                </Link>
              </li>
              <li>
                <Link
                  isExternalLink
                  openInNewTab
                  href="https://note.com/horiy0125"
                >
                  note
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </article>
    </section>
  );
});
