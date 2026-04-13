export function renderPage(main) {
  main.innerHTML = `
    <section class="page-banner" aria-label="Wedding catering banner">
      <div class="container page-banner__inner">
        <p class="label">Services</p>
        <h1>Wedding Catering</h1>
        <p class="page-banner__sub">Premium Jamaican and Ugandan menus tailored for your perfect wedding day. From intimate receptions to grand celebrations.</p>
        <div class="page-banner__actions">
          <a href="/contact" class="btn btn--fill">Request a Quote</a>
          <a href="/menu" class="btn btn--outline-light">View Menu</a>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg)">
      <div class="container">
        <div class="editorial-block editorial-block--right reveal">
          <div class="editorial-block__media"><img src="/service-wedding.png" onerror="if(this.src!=='https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop')this.src='https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop'" alt="Wedding catering setup" /></div>
          <div class="editorial-block__copy">
            <p class="label">Your Special Day</p>
            <h2>Food that makes your wedding unforgettable</h2>
            <p>We work closely with couples to design a menu that reflects your heritage, preferences, and story. From Jamaican jerk stations to elegant Ugandan spreads — we bring bold, authentic flavour to the most important day of your life.</p>
            <ul class="check-list">
              <li>Dedicated wedding menu consultation</li>
              <li>Tasting session available before your event</li>
              <li>Full front-of-house service team included</li>
              <li>Allergen menus and dietary catering</li>
              <li>Fully insured and food hygiene certified</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg-warm)">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">What's Included</p>
          <h2>Our wedding catering packages</h2>
        </div>
        <div class="packages-grid">
          <div class="pkg-card reveal">
            <div class="pkg-card__top"><span class="pkg-card__tier">Essential</span><h3>Classic Reception</h3><p class="pkg-card__desc">Perfect for smaller weddings and intimate receptions.</p></div>
            <ul class="pkg-card__list"><li>Buffet for up to 80 guests</li><li>Choice of 3 main dishes</li><li>2 side dishes</li><li>Service staff for 4 hours</li><li>Setup and breakdown included</li></ul>
            <a href="/contact" class="btn btn--outline">Get Quote</a>
          </div>
          <div class="pkg-card pkg-card--featured reveal">
            <div class="pkg-card__top"><span class="pkg-card__tier pkg-card__tier--accent">Most Popular</span><h3>Grand Wedding</h3><p class="pkg-card__desc">Our most popular package for 100–250 guests.</p></div>
            <ul class="pkg-card__list"><li>Full buffet or plated service</li><li>5 main courses</li><li>3 side dishes + salads</li><li>Live grill station option</li><li>Dedicated event coordinator</li><li>Full service team all day</li></ul>
            <a href="/contact" class="btn btn--fill">Get Quote</a>
          </div>
          <div class="pkg-card reveal">
            <div class="pkg-card__top"><span class="pkg-card__tier">Premium</span><h3>Luxury Experience</h3><p class="pkg-card__desc">The full Millz Grill experience for 250+ guests.</p></div>
            <ul class="pkg-card__list"><li>Full multi-course plated dinner</li><li>Bespoke menu creation</li><li>Live cooking stations</li><li>Full bar coordination</li><li>Pre-event site visit</li><li>Dedicated on-day team lead</li></ul>
            <a href="/contact" class="btn btn--outline">Get Quote</a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band__inner reveal">
        <h2>Ready to plan your wedding menu?</h2>
        <p>Share your date and guest count. We'll send a tailored proposal within 24 hours.</p>
        <div class="cta-band__actions">
          <a href="/contact" class="btn btn--fill btn--lg">Start Planning</a>
          <a href="/menu" class="btn btn--outline-light btn--lg">Browse Menu</a>
        </div>
      </div>
    </section>
  `;
}
