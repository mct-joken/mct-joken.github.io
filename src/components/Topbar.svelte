<script lang="ts">
  import {push} from "svelte-spa-router";
</script>

<header class="topBar w-full z-40 bg-gray-900 mx-auto rounded-t shadow border-b border-gray-200">
  <div class="container mx-auto px-6 h-16 flex justify-between items-center">
    <span class="font-semibold text-xl text-white tracking-tight" on:click={() => push("/")}>
        松江高専 情報科学研究部
    </span>
  </div>
</header>


