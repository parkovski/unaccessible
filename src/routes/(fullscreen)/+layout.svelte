<script>
  import '$lib/styles/style.css';
  import Header from '$lib/cx/Header.svelte';
</script>

<style>
  footer {
    margin-top: -2rem;
    color: var(--color-header-text);
  }
</style>

<Header/>

<main>
  <slot/>
</main>

<footer>Copyright &copy; Hayden Snell</footer>
