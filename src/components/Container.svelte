<script lang="ts">
  import {Link} from "svelte-routing";
  export let title:string,description:string, bgImage:boolean = false, color:string, linkTo:string;
</script>

{#if linkTo===undefined || linkTo === ""}
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center titleContainer container text-center flex justify-center {color} {bgImage === true ? 'bImage' : '' }" style="" >

  <div>
      <!-- リンク先が指定されていない場合はリンク自体を張らない -->
      <h1 class="text-3xl">{title}</h1>

    {#if description === undefined || description === ""}

    {:else}
      <h2 class="text-xl">{description}</h2>
    {/if}

  </div>

</div>

{:else}
  <Link to={linkTo}>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center titleContainer container text-center flex justify-center {color} {bgImage === true ? 'bImage' : '' }" style="" >

      <div>
        <h1 class="text-3xl">{title}</h1>

        {#if description === undefined || description === ""}

       {:else}
         <h2 class="text-xl">{description}</h2>
        {/if}

      </div>

    </div>
  </Link>
{/if}

<style>
    .titleContainer {
      height: 256px;
      z-index: 1;
    }

    .bImage {
      background-image: url('/room.png');
      background-size: 100% 100%;
      overflow: hidden;
      background-repeat: no-repeat;
    }
</style>

