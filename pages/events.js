export function renderPage(main) {
  main.innerHTML = `
    <section class="page-banner" aria-label="Events banner">
      <div class="container page-banner__inner">
        <p class="label">Events</p>
        <h1>Event Catering <em>for every occasion</em></h1>
        <p class="page-banner__sub">From intimate weddings to large-scale festivals, we tailor food and service to your exact format and guest count.</p>
        <div class="page-banner__actions">
          <a href="/contact" class="btn btn--fill">Book a Consultation</a>
          <a href="/menu" class="btn btn--glass">View Menu</a>
        </div>
      </div>
    </section>

    <section class="events-types" aria-label="Event types">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">What We Cater</p>
          <h2>Every type of event, every scale</h2>
          <p class="section-head__sub">We adapt our service format to suit the occasion — formal or relaxed, intimate or large.</p>
        </div>
        <div class="event-type-grid">
          <article class="et-card reveal">
            <div class="et-card__img"><img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop" alt="Wedding catering" /></div>
            <div class="et-card__body">
              <h3>Weddings</h3>
              <p>Custom menus, tasting sessions, full plated service, and uniformed staff. We handle every food and service detail so you don't have to.</p>
              <ul class="et-card__pills"><li>Tasting session included</li><li>Custom menu design</li><li>Plated &amp; buffet options</li></ul>
            </div>
          </article>
          <article class="et-card reveal">
            <div class="et-card__img"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80&auto=format&fit=crop" alt="Corporate event" /></div>
            <div class="et-card__body">
              <h3>Corporate Events</h3>
              <p>Reliable, on-time delivery for product launches, networking events, team lunches, and conferences. Multiple format options available.</p>
              <ul class="et-card__pills"><li>Buffet &amp; box lunch</li><li>Same-day delivery</li><li>Branded setups available</li></ul>
            </div>
          </article>
          <article class="et-card reveal">
            <div class="et-card__img"><img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop" alt="Private party" /></div>
            <div class="et-card__body">
              <h3>Private Parties</h3>
              <p>Birthdays, anniversaries, graduations — flexible formats for any celebration. We bring the restaurant experience to your venue.</p>
              <ul class="et-card__pills"><li>From 20 guests</li><li>Flexible menus</li><li>Themed service options</li></ul>
            </div>
          </article>
          <article class="et-card reveal">
            <div class="et-card__img"><img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80&auto=format&fit=crop" alt="Festival catering" /></div>
            <div class="et-card__body">
              <h3>Festivals &amp; Outdoor</h3>
              <p>High-volume live grill stations designed for festivals, outdoor events, and large gatherings. Queue management and premium quality at scale.</p>
              <ul class="et-card__pills"><li>Live grill stations</li><li>High-volume capacity</li><li>Outdoor setup included</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="events-process" aria-label="How it works">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">The Process</p>
          <h2>How booking works</h2>
        </div>
        <div class="step-line">
          <div class="step-line__connector"></div>
          <div class="step-line__item reveal"><div class="step-line__num">1</div><h3>Get in Touch</h3><p>Send us your event date, location, guest count, and any key requirements.</p></div>
          <div class="step-line__item reveal"><div class="step-line__num">2</div><h3>Menu Consultation</h3><p>We discuss menu options and service format. Tasting sessions available for weddings.</p></div>
          <div class="step-line__item reveal"><div class="step-line__num">3</div><h3>Confirm &amp; Plan</h3><p>A tailored proposal is agreed, deposit taken, and logistics finalised with our ops team.</p></div>
          <div class="step-line__item reveal"><div class="step-line__num">4</div><h3>Event Day</h3><p>We arrive, set up, serve, and handle teardown. You focus entirely on your guests.</p></div>
        </div>
      </div>
    </section>

    <section class="events-included" aria-label="What is included">
      <div class="container">
        <div class="included-split reveal">
          <div class="included-split__media"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop" alt="Event service in action" /></div>
          <div>
            <p class="label">What Is Included</p>
            <h2>Everything handled end-to-end</h2>
            <p>Every booking includes everything needed for a seamless catering experience — no hidden extras.</p>
            <ul class="check-list check-list--lg">
              <li>Trained service staff for the full event duration</li>
              <li>Setup and full teardown of catering area</li>
              <li>All plates, cutlery, and serving equipment</li>
              <li>Allergen information for all dishes served</li>
              <li>Dedicated point of contact throughout</li>
              <li>Full food safety compliance and insurance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="events-packages" aria-label="Packages">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">Packages</p>
          <h2>Ready-made event packages</h2>
          <p class="section-head__sub">Starting points that we can fully customise to your requirements.</p>
        </div>
        <div class="packages-grid">
          <article class="pkg-card reveal">
            <div class="pkg-card__top"><span class="pkg-card__tier">Essential</span><h3>The Buffet Package</h3><p class="pkg-card__desc">Perfect for Corporate Events and private parties.</p></div>
            <ul class="pkg-card__list"><li>2 mains + 3 sides</li><li>Service staff included</li><li>Setup and teardown</li><li>Allergen info provided</li><li>Min. 20 guests</li></ul>
            <a href="/contact" class="btn btn--outline">from £22 / guest</a>
          </article>
          <article class="pkg-card pkg-card--featured reveal">
            <div class="pkg-card__top"><span class="pkg-card__tier pkg-card__tier--accent">Most Popular</span><h3>The Wedding Package</h3><p class="pkg-card__desc">Full plated service for your most important day.</p></div>
            <ul class="pkg-card__list"><li>Dedicated tasting session</li><li>Custom menu design</li><li>3 courses + sides</li><li>Uniformed service team</li><li>Day-of event coordinator</li><li>Min. 50 guests</li></ul>
            <a href="/contact" class="btn btn--fill">from £35 / guest</a>
          </article>
          <article class="pkg-card reveal">
            <div class="pkg-card__top"><span class="pkg-card__tier">Premium</span><h3>Live Grill Package</h3><p class="pkg-card__desc">Interactive grilling for festivals and outdoor events.</p></div>
            <ul class="pkg-card__list"><li>Live grill station setup</li><li>Dedicated grill chef</li><li>Full outdoor equipment</li><li>High-volume capacity</li><li>Min. 100 guests</li></ul>
            <a href="/contact" class="btn btn--outline">from £48 / guest</a>
          </article>
        </div>
      </div>
    </section>

    <section class="cta-band" aria-label="Events CTA">
      <div class="container cta-band__inner reveal">
        <h2>Got an event in mind?</h2>
        <p>Share your brief with us and we will plan the right service format and menu for your guests.</p>
        <a href="/contact" class="btn btn--fill btn--lg">Book a Consultation</a>
      </div>
    </section>
  `;
}
