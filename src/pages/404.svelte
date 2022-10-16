<script lang="ts">
  import {push} from 'svelte-spa-router';
  setTimeout(() => {
    push(`/`)
  }, 3000);
</script>
<h1>ページが見つかりませんでした</h1>
<h2>
  3秒後に自動的にトップページに戻ります
</h2>
<style>
  h1{
    font-size: large;
    text-align: center;
  }
  h2{
    text-align: center;
    font-size: medium;
  }
</style>


