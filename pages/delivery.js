export function renderPage(main) {
  main.innerHTML = `
    <section class="page-banner" aria-label="Nationwide delivery banner">
      <div class="container page-banner__inner">
        <p class="label">Services</p>
        <h1>Nationwide Delivery</h1>
        <p class="page-banner__sub">Millz Grill travels across the UK for the right event. From London to Edinburgh — we bring our full service to you.</p>
        <div class="page-banner__actions">
          <a href="/contact" class="btn btn--fill">Check Availability</a>
          <a href="/menu" class="btn btn--outline-light">View Menu</a>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg)">
      <div class="container">
        <div class="editorial-block editorial-block--left reveal">
          <div class="editorial-block__media"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80&auto=format&fit=crop" alt="UK map nationwide service" /></div>
          <div class="editorial-block__copy">
            <p class="label">UK-Wide Coverage</p>
            <h2>We go where your event takes us</h2>
            <p>Based in London, we regularly travel to events across England, Scotland, and Wales. Our team travels with all equipment, staff, and supplies — so your local venue doesn't need to provide anything.</p>
            <ul class="check-list">
              <li>Full service team travels with us</li>
              <li>All equipment and supplies self-contained</li>
              <li>Travel costs quoted transparently upfront</li>
              <li>Available for multi-day bookings</li>
              <li>International travel available on request</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg-warm)">
      <div class="container">
        <div class="section-head reveal"><p class="label">Locations</p><h2>Where we regularly cater</h2></div>
        <div class="areas-grid" style="margin-top:2.5rem">
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>London</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Birmingham</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Manchester</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Bristol</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Leeds</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Edinburgh</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Liverpool</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Glasgow</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Cardiff</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>+ Worldwide</div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band__inner reveal">
        <h2>Not in London? No problem.</h2>
        <p>Tell us your location and event details. We'll confirm availability and provide a transparent travel quote.</p>
        <div class="cta-band__actions">
          <a href="/contact" class="btn btn--fill btn--lg">Check Availability</a>
          <a href="/about" class="btn btn--outline-light btn--lg">About Us</a>
        </div>
      </div>
    </section>
  `;
}
