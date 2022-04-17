<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  export let Source:string;
</script>

<SvelteMarkdown {Source}/>
