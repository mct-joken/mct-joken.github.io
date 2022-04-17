<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import Container from "../components/Container.svelte";

  const source:string = `
  ### 活動内容

  情報科学研究部では、活動を3つの班に分けて活動しています
  (班の掛け持ち可、出入り自由、班名は仮称)

  #### AP(アプリケーション)班
  - Webサイト開発
  - Webアプリケーション開発
  - その他ツール開発等

  #### GM(ゲーム)班
  - ゲーム開発

  #### MC(メディア)班
  - デジタル絵
  - DTM(音楽制作)
  - 3Dモデリング

  ### 活動日/時間
  活動日: 毎週火曜日、水曜日、木曜日
  活動時間: 16:30 〜 18:30

  ### 活動場所
  活動は基本的に校舎5号棟3階、データベース実験室を利用しています.

  ### 設備
  - デスクトップPC: 2台
    - Windows10 (CPU: AMD FX, GPU: NVIDIA GeForce)
    - Linux (Pop! OS) (CPU: Ryzen, GPU: AMD Radeon)
  - ノートPC: 1台
  - ペンタブレット(板タブ, WACOM製): 1個
  - 蔵書: 多数
  `
</script>

<Container title={"活動紹介"} color={"bg-teal-200"} description={"普段の活動を紹介します"}/>

<div class="mx-auto w-5/6">
  <SvelteMarkdown {source}/>
</div>
