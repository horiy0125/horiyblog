import { component$ } from "@builder.io/qwik";
import type { BaseProps } from "~/types";

type Props = {} & BaseProps;

export const CareerSection = component$((props: Props) => {
  return (
    <section class={props.class}>
      <h2>Career</h2>

      <article>
        <h3>2019.4</h3>
        <h4>九州大学 経済学部 経済工学科 入学</h4>
      </article>

      <article>
        <h3>2019.10 - 2020.10</h3>
        <h4>株式会社クアンド</h4>

        <p>
          Vue.js, DjangoでのFA（Factory Automation）Webシステム開発、Tensorflow,
          Kerasでの同システム向けCNNモデル開発、React.jsでの自社プロダクト開発、Gatsby.jsでの自社HP・LP開発に従事。
        </p>

        <p>
          ほかにも、RevPiなどを用いたFAシステムのハードウェア面にも携わった。
        </p>
      </article>

      <article>
        <h3>2020.11 - 2021.1</h3>
        <h4>株式会社Regnio</h4>

        <p>
          Gatsby.jsでの自社HP開発やWebViewを利用したモバイルアプリの開発、Raspberry
          Piクラスタやk3sを用いたFAシステムインフラ構築などに従事。
        </p>
      </article>

      <article>
        <h3>2021.2 - 2021.10</h3>
        <h4>note株式会社</h4>

        <p>
          Nuxt.js, Ruby on
          Railsを用いて、noteのフロントエンド・サーバサイド開発に従事。
        </p>

        <p>
          ほかにも、Next.js,
          Svelteを用いてフロントエンドApp分割などにも携わった。
        </p>
      </article>
    </section>
  );
});
