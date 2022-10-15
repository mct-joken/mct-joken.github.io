<script lang="ts">
	import {push} from 'svelte-spa-router';

  export let title:string,description:string, bgImage:boolean = false, color:string, linkTo:string;
</script>

{#if linkTo===undefined || linkTo === ""}
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center titleContainer container text-center flex justify-center {color} {bgImage === true ? 'bImage' : '' }" style="" >

  <div>
      <h1 class="text-3xl">{title}</h1>
      <h2 class="text-xl">{description}</h2>
  </div>

</div>

{:else}
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center titleContainer container text-center flex justify-center {color} {bgImage === true ? 'bImage' : '' }" style=""  on:click = {() => push(`${linkTo}`)}>

      <div>
        <h1 class="text-3xl">{title}</h1>
         <h2 class="text-xl">{description}</h2>
      </div>

    </div>
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

