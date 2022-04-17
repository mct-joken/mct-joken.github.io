<script lang="ts">
  import Container from "../components/Container.svelte";
</script>

<Container title={"松江高専 情報科学研究部"} color={"text-white"} bgImage={true} />
<Container title={"活動"} color={"bg-red-200"} linkTo={"activity"} description={"普段の活動内容"} />
<Container title={"実績"} color={"bg-cyan-200"} linkTo={"achievement"} description={"部の活動実績"} />
<Container title={"制作物"} color={"bg-indigo-200"} linkTo={"works"} description={"部員の制作したものなど"} />
<Container title={"部員一覧"} color={"bg-red-200"} linkTo={"members"} description={"所属している部員の一覧"}  />
<Container title={"入部希望の方へ"} color={"bg-green-200"} linkTo={"join"} />
