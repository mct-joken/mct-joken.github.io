<script lang="ts">
import Container from "../components/Container.svelte";  
import SvelteMarkdown from 'svelte-markdown';

  const source:string = `
  ## 部長  J3 山本崇人
  - 3年 6人
  - 2年 3人
  - 1年 5人
  `;
</script>

<Container title={"部員一覧"} color={"bg-teal-200"} linkTo={""} description={""} />
  <div class="mx-auto w-5/6">
    <SvelteMarkdown {source}/>
  </div>
