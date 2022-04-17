<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import Container from "../components/Container.svelte";

  const source:string = `
  ## 年度ごとの活動実績

  ### 2021年度
  - JOI (日本情報オリンピック) 2021/2022
    - 本戦出場
  - 中国地区高専コンピュータフェスティバル 2022
    - メディアコンテンツ部門 3位
    - アプリケーション部門 3位

  ### 2020年度
  - 中高生国際 Ruby プログラミングコンテスト 2020 in Mitaka
    - ゲーム部門 最優秀賞
  - 第31回全国高等専門学校プログラミングコンテスト
    - 敢闘賞

  ### 2019年度
  - 中国地区高専コンピュータフェスティバル 2020
    - メディアコンテンツ部門 3位
  - 第30回全国高等専門学校プログラミングコンテスト
    - 敢闘賞

  ### 2018年度
  - 中国地区高専コンピュータフェスティバル 2019
    - ゲーム部門 最優秀賞
    - アプリケーション部門 最優秀賞&企業賞

  `
</script>

<Container title={"活動実績のページ"} color={"bg-teal-200"}/>

<div class="mx-auto w-5/6">
  <SvelteMarkdown {source}/>
</div>
