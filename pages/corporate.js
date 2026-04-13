export function renderPage(main) {
  main.innerHTML = `
    <section class="page-banner" aria-label="Corporate events banner">
      <div class="container page-banner__inner">
        <p class="label">Services</p>
        <h1>Corporate Events</h1>
        <p class="page-banner__sub">Professional catering for corporate dinners, product launches, team events, and client entertainment across the UK.</p>
        <div class="page-banner__actions">
          <a href="/contact" class="btn btn--fill">Request a Quote</a>
          <a href="/menu" class="btn btn--outline-light">View Menu</a>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg)">
      <div class="container">
        <div class="editorial-block editorial-block--left reveal">
          <div class="editorial-block__media"><img src="/service-corporate.png" onerror="if(this.src!=='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop')this.src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80&auto=format&fit=crop'" alt="Corporate event catering" /></div>
          <div class="editorial-block__copy">
            <p class="label">Built for Business</p>
            <h2>Impress clients. Reward your team.</h2>
            <p>Whether you're hosting a board dinner, an awards night, or a client entertainment event, Millz Grill delivers food and service that reflects your company's standards. We handle logistics so you can focus on your event.</p>
            <ul class="check-list">
              <li>Flexible buffet or plated service</li>
              <li>Branded menus and dietary labelling available</li>
              <li>Experienced, uniformed service team</li>
              <li>Fast setup — minimal disruption</li>
              <li>Invoicing and VAT receipts provided</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--bg-warm)">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">Corporate Solutions</p>
          <h2>We cater for every business occasion</h2>
        </div>
        <div class="svc-grid">
          <article class="svc-item reveal"><h3>Board Dinners</h3><p>Plated fine dining service for senior leadership, client hosting, and investor events.</p></article>
          <article class="svc-item reveal"><h3>Product Launches</h3><p>Canape and bowl food with live stations — perfect for high energy launch events.</p></article>
          <article class="svc-item reveal"><h3>Team Building Days</h3><p>Informal BBQ and grill packages for outdoor team days and company celebrations.</p></article>
          <article class="svc-item reveal"><h3>Awards Evenings</h3><p>Elegant multi-course dinners coordinated around your programme and timings.</p></article>
          <article class="svc-item reveal"><h3>Breakfast &amp; Lunch</h3><p>Healthy, high-quality catering for conferences, seminars, and all-day meetings.</p></article>
          <article class="svc-item reveal"><h3>Office Parties</h3><p>End-of-year and seasonal party catering for 20 to 500+ staff.</p></article>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-band__inner reveal">
        <h2>Corporate catering made easy</h2>
        <p>Tell us your requirements and we'll handle the rest — from menu design to service and breakdown.</p>
        <div class="cta-band__actions">
          <a href="/contact" class="btn btn--fill btn--lg">Get a Corporate Quote</a>
          <a href="/menu" class="btn btn--outline-light btn--lg">View Menu</a>
        </div>
      </div>
    </section>
  `;
}
