export function renderPage(main) {
  main.innerHTML = `
    <section class="page-banner" aria-label="Menu banner">
      <div class="container page-banner__inner">
        <p class="label">Our Menu</p>
        <h1>Food Categories &amp; Pricing</h1>
        <p class="page-banner__sub">Authentic Jamaican and Ugandan dishes crafted for events of any scale.</p>
        <div class="page-banner__tags">
          <span>Jamaican</span><span>Ugandan</span><span>Vegetarian Options</span><span>Allergen-Aware</span><span>Buffet &amp; Plated</span>
        </div>
      </div>
    </section>

    <section class="menu-filter" aria-label="Filter menu">
      <button class="menu-filter__btn active" data-filter="all">All Dishes</button>
      <button class="menu-filter__btn" data-filter="jamaican">Jamaican</button>
      <button class="menu-filter__btn" data-filter="ugandan">Ugandan</button>
      <button class="menu-filter__btn" data-filter="sides">Sides</button>
      <button class="menu-filter__btn" data-filter="packages">Packages</button>
    </section>

    <section class="menu-showcase" aria-label="Menu dishes">
      <div class="container">
        <div class="menu-grid">
          <article class="spotlight-card spotlight-card--feature" data-category="jamaican">
            <div class="spotlight-card__glow"></div>
            <div class="spotlight-card__img"><img src="https://images.unsplash.com/photo-1432139509613-5c4255815697?w=1000&q=80&auto=format&fit=crop" alt="Jerk Chicken" /></div>
            <span class="spotlight-card__badge">Bestseller</span>
            <h3>Jerk Chicken</h3>
            <p>Smoky pimento-grilled chicken marinated for 24 hours with a scotch bonnet and allspice rub. Served with rice and peas.</p>
            <div class="spotlight-card__price">from £18 / head</div>
          </article>
          <article class="spotlight-card" data-category="jamaican">
            <div class="spotlight-card__glow"></div>
            <h3>Braised Oxtail</h3>
            <p>Slow-cooked rich gravy with butter beans, Scotch bonnet, and thyme. A true Caribbean centrepiece.</p>
            <div class="spotlight-card__price">from £22 / head</div>
          </article>
          <article class="spotlight-card" data-category="jamaican">
            <div class="spotlight-card__glow"></div>
            <h3>Curried Goat</h3>
            <p>Tender goat in a slow-cooked aromatic curry sauce. A wedding and celebration staple.</p>
            <div class="spotlight-card__price">from £20 / head</div>
          </article>
          <article class="spotlight-card" data-category="jamaican">
            <div class="spotlight-card__glow"></div>
            <h3>Ackee &amp; Saltfish</h3>
            <p>Jamaica's national dish — ackee sautéed with salt cod, onions, scotch bonnet and sweet peppers.</p>
            <div class="spotlight-card__price">from £16 / head</div>
          </article>
          <article class="spotlight-card" data-category="ugandan">
            <div class="spotlight-card__glow"></div>
            <span class="spotlight-card__badge">Ugandan</span>
            <h3>Luwombo</h3>
            <p>Classic Ugandan stew steamed in banana leaves — smoky, rich, and deeply flavourful.</p>
            <div class="spotlight-card__price">from £19 / head</div>
          </article>
          <article class="spotlight-card" data-category="ugandan">
            <div class="spotlight-card__glow"></div>
            <h3>Matoke</h3>
            <p>Green banana cooked in a savoury sauce — a staple East African comfort dish.</p>
            <div class="spotlight-card__price">from £14 / head</div>
          </article>
          <article class="spotlight-card" data-category="ugandan">
            <div class="spotlight-card__glow"></div>
            <h3>Groundnut Stew</h3>
            <p>Rich peanut-based stew with chicken and aromatic spices. Warming and deeply satisfying.</p>
            <div class="spotlight-card__price">from £17 / head</div>
          </article>
          <article class="spotlight-card" data-category="ugandan">
            <div class="spotlight-card__glow"></div>
            <h3>Rolex</h3>
            <p>Ugandan street-food classic — eggs and vegetables wrapped in a chapati. Great for casual events.</p>
            <div class="spotlight-card__price">from £12 / head</div>
          </article>
          <article class="spotlight-card spotlight-card--sides" data-category="sides">
            <div class="spotlight-card__glow"></div>
            <h3>Sides &amp; Extras</h3>
            <p>Complement any main with our full sides selection.</p>
            <div class="sides-cloud">
              <span>Rice &amp; Peas</span><span>Fried Plantain</span><span>Festival Dumplings</span><span>Coleslaw</span><span>Corn on the Cob</span><span>Hard Dough Bread</span><span>Sweet Potato</span><span>Garden Salad</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="menu-pricing" aria-label="Service tiers">
      <div class="container">
        <div class="section-head reveal"><p class="label">Pricing</p><h2>Service tiers</h2><p class="section-head__sub">All packages include setup, service, and teardown. Prices vary by guest count and location.</p></div>
        <div class="pricing-grid">
          <article class="price-card reveal"><h3>Buffet</h3><p class="price-card__amount">from £22 / guest</p><p>Ideal for casual gatherings, corporate lunches, and mid-sized celebrations. 2 mains + 3 sides.</p></article>
          <article class="price-card reveal"><h3>Plated Service</h3><p class="price-card__amount">from £35 / guest</p><p>Premium plated menu with uniformed service staff. Perfect for weddings and formal dinners.</p></article>
          <article class="price-card reveal"><h3>Live Grill Station</h3><p class="price-card__amount">from £48 / guest</p><p>Interactive cooking station with live grilling. High-impact for festivals, launches, and outdoor events.</p></article>
        </div>
      </div>
    </section>

    <section class="cta-band" aria-label="Menu CTA">
      <div class="container cta-band__inner reveal">
        <h2>Want a custom menu for your event?</h2>
        <p>We build bespoke menus around your theme, guest count, and dietary needs. Get in touch to start the conversation.</p>
        <a href="/contact" class="btn btn--fill btn--lg">Request a Custom Menu</a>
      </div>
    </section>
  `;
}
