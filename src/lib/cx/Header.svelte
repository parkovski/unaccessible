<script>
  function closeMenu() {
    document.getElementById('menu-check').checked = false;
    return true;
  }

  function menuKeyDown(e) {
    if (e.key === 'Enter') {
      closeMenu();
    }
  }
</script>

<style>
  #menu-check {
    display: none;
  }
  #menu-check:checked + #menu-button > span {
    transform: rotate(45deg);
  }
  #menu-check:checked + #menu-button > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu-check:checked + #menu-button > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu-check:checked ~ #menu {
    left: 0;
  }

  #menu-button {
    position: absolute;
    top: 28px;
    left: 8px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1;
  }

  #menu-button > span,
  #menu-button > span::before,
  #menu-button > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-text-hl);
    transition-duration: .25s;
  }
  #menu-button > span::before {
    content: '';
    top: -8px;
  }
  #menu-button > span::after {
    content: '';
    top: 8px;
  }

  header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--color-hl);
    color: var(--color-text-hl);
    padding: 1rem 40px;
    font-size: 125%;
  }

  #menu {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 250px;
    height: 100%;
    margin: 0;
    padding: 40px 0;
    list-style: none;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
    line-height: 1;
    background: var(--color-hl);
    color: var(--color-text-hl);
  }

  #menu > li > a {
    display: block;
    padding: 4px 8px;
    color: inherit;
    text-decoration: none;
    transition-duration: .25s;
  }

  #menu > li > a:hover {
    text-decoration: underline;
  }

  @media (min-width: 640px) {
    header {
      padding: 1rem 8px;
    }
    #menu-button {
      display: none;
    }
    #menu {
      position: relative;
      left: 0;
      width: 100%;
      display: flex;
      gap: 4px;
      transition-duration: 0s;
      padding: 0;
      box-shadow: none;
    }
  }
</style>

<header>
  <input id="menu-check" type="checkbox">
  <label id="menu-button" for="menu-check">
    <span></span>
  </label>
  <span class="phone">unaccessible</span>
  <ul id="menu" role="navigation" on:click={closeMenu} on:keydown={menuKeyDown}>
    <li><a href="/">[logo]unaccessible</a></li>
    <li><a href="/clips">clips</a></li>
    <li><a href="/updates">updates</a></li>
    <li><a href="/bio">bio</a></li>
    <li><a href="/about">about</a></li>
  </ul>
</header>
