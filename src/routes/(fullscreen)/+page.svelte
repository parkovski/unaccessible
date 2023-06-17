<style>
  @font-face {
    font-family: 'Chalkduster';
    src: url('/Chalkduster.ttf') format('truetype');
  }

  .title {
    position: relative;
  }

  h1 {
    font-family: 'Chalkduster';
    font-size: 450%;
    font-weight: normal;
    color: var(--color-logo);
    transform: rotate(-11.1deg);
    margin: 4rem 0;
    text-shadow:
      #fff -2px -2px 8px,
      #fff -2px 2px 8px,
      #fff 2px -2px 8px,
      #fff 2px 2px 8px;
  }
  h1, h2 {
    position: relative;
    z-index: 10;
  }
  h1 > span {
    color: #111;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
    margin: 0 4px;
  }
  li img {
    width: 2rem;
  }

  .logo-wide {
    position: absolute;
    width: 720px;
    left: -120px;
    top: -124px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 250%;
    }

    .logo-wide {
      width: 400px;
      left: -48px;
      top: -40px;
    }
  }

  @media (max-width:360px) {
    h1 {
      font-size: 225%;
      margin: 3rem 0;
    }

    .logo-wide {
      width: 340px;
      left: -30px;
      top: -40px;
    }
  }
</style>

<div class="fullscreen">
  <div class="title">
    <img src="/Logo-wide.png" alt="Logo" class="logo-wide">
    <h1><span>UN</span>ACCESSIBLE</h1>
    <h2>A documentary by Hayden&nbsp;Snell</h2>
    <ul class="phone">
      <li>
        <a href="https://www.patreon.com/unaccessible" target="_blank" rel="noreferrer">
          <img src="/Digital-Patreon-Logo_FieryCoral.png" alt="Patreon"
            title="Patreon">
        </a>
      </li>
      <li>
        <a href="https://www.gofundme.com/unaccessible" target="_blank"
          rel="noreferrer">
          <img src="/GoFundMe-Logo.png" alt="GoFundMe" title="GoFundMe">
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/unaccessiblefilm" target="_blank" rel="noreferrer">
          <img src="/Instagram_Glyph_Gradient.png" alt="Instagram"
            title="Instagram">
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/f_logo_RGB-Blue_1024.png" alt="Facebook" title="Facebook">
        </a>
      </li>
    </ul>
  </div>
</div>
