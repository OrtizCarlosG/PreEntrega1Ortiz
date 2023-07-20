import CartWidget from "../CartWidget/CartWidget";
function NavBar()
{
    return (
                <section class="hero is-primary is-medium">
                        <div class="hero-head">
                          <nav class="navbar">
                            <div class="container">
                              <div class="navbar-brand">
                                  <h1 className="title is-1">Ecomerce pre-entrega1</h1>
                                <span class="navbar-burger" data-target="navbarMenuHeroA">
                                </span>
                              </div>
                              <div id="navbarMenuHeroA" class="navbar-menu">
                                <div class="navbar-end">
                                  <a class="navbar-item is-active">
                                    Celulares
                                  </a>
                                  <a class="navbar-item">
                                    Tablets
                                  </a>
                                  <a class="navbar-item">
                                    Notebooks
                                  </a>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                    <CartWidget/>
                </section>
             );
}

export default NavBar