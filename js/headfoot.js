class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
            <div class="social__container">
                <div class="social__content">
                    <ul class="social__list">
                        <li>
                            <a href="#"><i class="uil uil-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-instagram-alt"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav__container">
                <div class="nav__content">
                    <a href="default.html" class="logo">
                        <img src="../img/logo/Avalon-Adventures-White-Logo.png" class="logo__img">\
                        <p class="logo__title">AVALON ADVENTURES</p>
                    </a>
                    <nav aria-label="main menu" class="nav__main-menu">
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
