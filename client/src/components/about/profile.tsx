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
        <div class="grid">
          <div>
            <hgroup>
              <h3>堀内 凱登（Kaito Horiuchi）</h3>
              <h4>@horiy0125</h4>
            </hgroup>

            <nav>
              <ul>
                <li>
                  <Link
                    isExternalLink
                    openInNewTab
                    href="https://github.com/horiy0125"
                  >
                    <img
                      src="https://static.horiy.dev/favicon/github"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    isExternalLink
                    openInNewTab
                    href="https://twitter.com/horiy0125"
                  >
                    <img
                      src="https://static.horiy.dev/favicon/twitter"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    isExternalLink
                    openInNewTab
                    href="https://qiita.com/horiy0125"
                  >
                    <img
                      src="https://static.horiy.dev/favicon/qiita"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    isExternalLink
                    openInNewTab
                    href="https://note.com/horiy0125"
                  >
                    <img
                      src="https://static.horiy.dev/favicon/note"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
              </ul>
            </nav>

            <h5>🐹</h5>
          </div>

          <img
            src="https://static.horiy.dev/avatar/me"
            width={1600}
            height={1200}
          />
        </div>
      </article>
    </section>
  );
});
