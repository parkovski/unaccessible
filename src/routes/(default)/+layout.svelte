<script>
  import '$lib/styles/style.css';
  import Header from '$lib/cx/Header.svelte';
</script>

<style>
  main {
    max-width: 960px;
    margin: 4.5rem auto 0;
    padding: 1px 1rem;
    border-radius: 5px;
    background: var(--color-content-bg);
  }

  @media (max-width: 640px) {
    main {
      border-radius: 0;
      margin-top: 3rem;
    }
  }
</style>

<Header/>

<main>
  <slot/>
</main>

<footer>Copyright &copy; Hayden Snell</footer>
