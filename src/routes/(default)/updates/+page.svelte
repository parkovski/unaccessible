<script>
  export let data;
</script>

<h1>Updates</h1>

<ul>
  {#each data.posts as post}
    <li><a href={post.path}>{post.meta.title}</a></li>
  {/each}
</ul>
