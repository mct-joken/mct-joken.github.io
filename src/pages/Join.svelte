<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import Container from "../components/Container.svelte";

  const source:string = `
  みなさんも参加してみませんか？

  ## FAQ(よくある質問)
  - Q: 自分のPCは必要ですか？
    - A: なくても活動自体は可能ですが、授業で使うと思うのであったほうがいいと思います
  - Q: プログラミングは未経験ですが大丈夫ですか？
    - A: 4~8月頃まで毎年プログラミング講習会を実施しています。それ以外にも部員同士で教え合うこともしているので未経験でも大丈夫です
  - Q: 他の部活と掛け持ちすることはできますか？
    - A: 掛け持ちする部活が掛け持ち可能であれば可能です
  - Q: 見学はいつでもできますか？
    - A: 活動日であればいつでも可能です、気軽にお越しください
  - Q: 活動場所がよくわかりません、どこですか？
    - A: 各棟の案内板を見てください。それでもわからないのであれば連絡してください  
    連絡先:me(at)laminne33569.net (atをアットマークに置換してください)
     
  - Q: 入部に手続きは必要ありますか？
    - A: 部活で使用しているチャットツール(Slack)に入ること以外に特段手続きはありません
  - Q: 部費の支払いはありますか？
    - A: 部員から部費を徴収することは今の所していません。大会参加費等のお金は随時発生する可能性があります

  `
</script>

<Container title={"入部希望の方へ"} color={"bg-teal-200"} linkTo={""} description={""}/>

<div class="mx-auto w-5/6">
  <SvelteMarkdown {source}/>
</div>

