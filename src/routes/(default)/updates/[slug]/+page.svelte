<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<article>
  <h1>{ data.title }</h1>
  <h2>Published on { data.date }</h2>
  <svelte:component this={data.content} />
</article>
