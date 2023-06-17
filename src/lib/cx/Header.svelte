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
    top: 1.5rem;
    left: 12px;
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
    height: 3.5rem;
    background: var(--color-header-bg);
    color: var(--color-header-text);
    padding: .25rem 40px;
    font-size: 125%;
    z-index: 100;
  }

  #menu {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 200px;
    height: 100%;
    margin: 0;
    padding: 3rem 0;
    list-style: none;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
    line-height: 1;
    background: var(--color-menu-bg);
  }

  #menu > li {
    padding: 4px 8px;
    transition-duration: .25s;
  }

  .phone-home {
    display: block;
    margin-top: 4px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img.badge {
    display: inline;
    width: 2rem;
    margin-right: .125rem;
  }

  @media (min-width: 640px) {
    header {
      padding: .25rem 8px;
    }
    .phone-home {
      display: none;
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
      background: none;
    }
    #menu > li:not(:first-child):not(:last-child) {
      padding-top: .6667rem;
    }
    #menu > li:last-child {
      position: absolute;
      right: 0;
      padding-top: .5rem;
    }
    img.badge {
      margin-right: 0.5rem;
    }
  }

  img.logo {
    height: 2em;
    vertical-align: middle;
    transform: rotate(-11.1deg);
  }
</style>

<header>
  <input id="menu-check" type="checkbox">
  <label id="menu-button" for="menu-check">
    <span></span>
  </label>
  <a href="/" class="phone-home">
    <img src="/Unaccessible-white-128.png" class="logo" alt="Logo">
    Unaccessible
  </a>
  <ul id="menu" role="navigation" on:click={closeMenu} on:keydown={menuKeyDown}>
    <li><a href="/">
        <span class="phone">Home</span>
        <span class="nophone">
          <img src="/Unaccessible-white-128.png" class="logo" alt="Logo"
            title="Home">
          Unaccessible
        </span>
    </a></li>
    <li><a href="/clips">Clips</a></li>
    <li><a href="/updates">Updates</a></li>
    <li><a href="/team">Team</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <a href="https://www.patreon.com/unaccessible" target="_blank"
        rel="noreferrer">
        <img src="/Digital-Patreon-Logo_FieryCoral.png" alt="Patreon"
          class="badge" title="Patreon">
      </a>
      <a href="https://www.gofundme.com/unaccessible" target="_blank"
        rel="noreferrer">
        <img src="/GoFundMe-Logo.png" alt="GoFundMe" class="badge" title="GoFundMe">
      </a>
      <a href="https://www.instagram.com/unaccessiblefilm" target="_blank"
        rel="noreferrer">
        <img src="/Instagram_Glyph_Gradient.png" alt="Instagram" class="badge"
          title="Instagram">
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <img src="/f_logo_RGB-Blue_1024.png" alt="Facebook" class="badge"
          title="Facebook">
      </a>
    </li>
  </ul>
</header>
