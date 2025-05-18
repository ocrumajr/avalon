class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
        <div class="header__content">
            <a href="default.html" class="logo">
                <img src="../img/logo/Avalon-Adventures-White-Logo.png" class="logo__img">\
                <p class="logo__title">AVALON ADVENTURES</p>
            </a>
            <nav aria-label="main menu" class="nav">
                <ul class="nav__list">
                    <li class="nav__items">
                        <a href="#" class="nav__link"><i class="uil uil-house-user"></i>Home</a>
                    </li>
                    <li class="nav__items">
                        <a href="#" class="nav__link"><i class="uil uil-cog"></i>Services</a>
                    </li>
                    <li class="nav__items">
                        <a href="#" class="nav__link"><i class="uil uil-file-alt"></i>About Us</a>
                    </li>
                    <li class="nav__items">
                        <a href="#" class="btn__contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
        `;
  }
}

customElements.define("site-header", siteHeader);

class siteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        `;
  }
}

customElements.define("site-footer", siteFooter);
