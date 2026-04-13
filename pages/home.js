export function renderPage(main) {
  main.innerHTML = `
    <!-- TICKER -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker__track">
        <span>Weddings</span><span>Corporate Events</span><span>Private Parties</span><span>Festival Catering</span><span>Jamaican Cuisine</span><span>Ugandan Cuisine</span><span>Live Grill Stations</span><span>500+ Events Catered</span>
        <span>Weddings</span><span>Corporate Events</span><span>Private Parties</span><span>Festival Catering</span><span>Jamaican Cuisine</span><span>Ugandan Cuisine</span><span>Live Grill Stations</span><span>500+ Events Catered</span>
      </div>
    </div>

    <section class="home-hero" aria-label="Home hero">
      <div class="container">
        <div class="home-hero__inner">
          <div class="home-hero__text reveal">
            <p class="label">Premium Catering</p>
            <h1 class="home-hero__heading">Catering that turns <em>events</em> into memories.</h1>
            <p class="home-hero__sub">Millz Grill delivers premium Jamaican and Ugandan menus for weddings, private functions, and corporate events across the UK.</p>
            <div class="home-hero__actions">
              <a href="/contact" class="btn btn--fill btn--lg">Request a Quote</a>
              <a href="/menu" class="btn btn--outline btn--lg">Explore Menu</a>
            </div>
          </div>
          <div class="home-hero__img reveal">
            <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80&auto=format&fit=crop" alt="Catering setup" />
            <div class="home-hero__badge"><strong>500+</strong> Events catered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- NUMBERS STRIP -->
    <div class="numbers-strip" aria-label="Key stats">
      <div class="container">
        <div class="numbers-grid">
          <div class="num-card"><span class="num-card__figure" data-count="500">0</span><span class="num-card__plus">+</span><span class="num-card__label">Events Catered</span></div>
          <div class="num-card"><span class="num-card__figure" data-count="12">0</span><span class="num-card__plus">+</span><span class="num-card__label">Years Experience</span></div>
          <div class="num-card"><span class="num-card__figure" data-count="98">0</span><span class="num-card__plus">%</span><span class="num-card__label">Client Satisfaction</span></div>
          <div class="num-card"><span class="num-card__figure" data-count="30">0</span><span class="num-card__plus">+</span><span class="num-card__label">Menu Items</span></div>
        </div>
      </div>
    </div>

    <!-- HIGHLIGHTS -->
    <section class="home-services" aria-label="Highlights">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">Why Choose Us</p>
          <h2>Why clients choose Millz Grill</h2>
        </div>
        <div class="svc-grid">
          <article class="svc-item reveal"><h3>Authentic Flavour</h3><p>Traditional recipes passed through generations, prepared with modern technique and premium ingredients sourced fresh.</p></article>
          <article class="svc-item reveal"><h3>Reliable Service</h3><p>Punctual setup, trained front-of-house staff, and smooth service from arrival to final plate.</p></article>
          <article class="svc-item reveal"><h3>Flexible Menus</h3><p>Bespoke options for dietary requirements, themed events, buffet spreads, and large guest lists of any size.</p></article>
          <article class="svc-item reveal"><h3>Jamaican Cuisine</h3><p>From jerk chicken to braised oxtail — bold Caribbean flavours that guests always remember.</p></article>
          <article class="svc-item reveal"><h3>Ugandan Cuisine</h3><p>Luwombo, matoke, and groundnut stew — rich East African dishes with deep, comforting flavour profiles.</p></article>
          <article class="svc-item reveal"><h3>Live Grill Stations</h3><p>Interactive cooking experiences that create atmosphere and theatre at weddings and festivals alike.</p></article>
        </div>
      </div>
    </section>

    <!-- WHY US SPLIT -->
    <section class="home-why" aria-label="Our commitment">
      <div class="container">
        <div class="home-why__grid">
          <div class="home-why__img reveal">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop" alt="Chef plating food" />
            <div class="home-why__stat"><strong>98%</strong><span>Repeat bookings</span></div>
          </div>
          <div class="home-why__copy reveal">
            <p class="label">Our Commitment</p>
            <h2>Premium food, dependable delivery</h2>
            <p>Every event is different — we build menus and service formats around your needs, not the other way around.</p>
            <div class="why-points">
              <div class="why-point">
                <div class="why-point__icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
                <div><h4>Tasting sessions available</h4><p>Try before you commit — we offer dedicated tasting events for weddings and large bookings.</p></div>
              </div>
              <div class="why-point">
                <div class="why-point__icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
                <div><h4>Fully staffed service</h4><p>Experienced service staff included for plated events — no third-party coordination required.</p></div>
              </div>
              <div class="why-point">
                <div class="why-point__icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
                <div><h4>Allergy-aware menus</h4><p>All menus can be adapted for allergies, dietary restrictions, and specific cultural requirements.</p></div>
              </div>
            </div>
            <a href="/about" class="btn btn--outline" style="margin-top:2rem">Meet the team</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED DISHES -->
    <section class="home-dishes" aria-label="Featured dishes">
      <div class="container">
        <div class="section-head section-head--light reveal">
          <p class="label label--light">Signature Dishes</p>
          <h2>Our most-loved dishes</h2>
        </div>
        <div class="dishes-carousel">
          <article class="dish-card reveal"><div class="dish-card__img"><img src="https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80&auto=format&fit=crop" alt="Jerk chicken" /></div><div class="dish-card__body"><h3>Jerk Chicken</h3><p>Smoky pimento-grilled chicken with island spice and scotch bonnet heat.</p><span class="dish-card__tag">Jamaican</span></div></article>
          <article class="dish-card reveal"><div class="dish-card__img"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&auto=format&fit=crop" alt="Oxtail" /></div><div class="dish-card__body"><h3>Braised Oxtail</h3><p>Slow-cooked rich gravy with butter beans, served with rice and peas.</p><span class="dish-card__tag">Jamaican</span></div></article>
          <article class="dish-card reveal"><div class="dish-card__img"><img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80&auto=format&fit=crop" alt="Ugandan dish" /></div><div class="dish-card__body"><h3>Luwombo</h3><p>Classic Ugandan banana-leaf stew packed with depth and rich spice.</p><span class="dish-card__tag">Ugandan</span></div></article>
          <article class="dish-card reveal"><div class="dish-card__img"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop" alt="Curried goat" /></div><div class="dish-card__body"><h3>Curried Goat</h3><p>Tender goat slow-cooked in aromatic spices, a Caribbean centrepiece dish.</p><span class="dish-card__tag">Jamaican</span></div></article>
          <article class="dish-card reveal"><div class="dish-card__img"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop" alt="Grilled meats" /></div><div class="dish-card__body"><h3>Live Grill Set</h3><p>Interactive grilled meats and plantain at the station — perfect for festivals.</p><span class="dish-card__tag">Signature</span></div></article>
        </div>
        <div class="home-dishes__cta"><a href="/menu" class="btn btn--outline-light">View Full Menu</a></div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="home-testimonials" aria-label="Client reviews">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">Reviews</p>
          <h2>What clients say</h2>
        </div>
        <div class="test-scroll">
          <div class="test-card reveal"><blockquote>"The food at our wedding was absolutely outstanding. Guests are still talking about the jerk chicken months later."</blockquote><footer>Stephanie &amp; Marcus <span>Wedding, London</span></footer></div>
          <div class="test-card reveal"><blockquote>"Millz Grill handled our entire corporate launch dinner. Seamless setup, excellent food, and brilliant service."</blockquote><footer>James Okafor <span>Corporate Event, Birmingham</span></footer></div>
          <div class="test-card reveal"><blockquote>"The live grill station was the highlight of our festival. High volume, great quality, and the team were fantastic."</blockquote><footer>Kezia Thompson <span>Festival, Manchester</span></footer></div>
          <div class="test-card reveal"><blockquote>"Every detail was considered — from allergy menus to presentation. Truly a premium catering experience."</blockquote><footer>Priya &amp; David <span>Private Party, Bristol</span></footer></div>
        </div>
      </div>
    </section>

    <!-- PROMISE PARALLAX -->
    <section class="home-promise" aria-label="Our promise">
      <div class="home-promise__bg">
        <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=80&auto=format&fit=crop" alt="" data-parallax="0.25" />
        <div class="home-promise__overlay"></div>
      </div>
      <div class="container">
        <div class="home-promise__content reveal">
          <p class="label label--light">Our Promise</p>
          <h2>Every event deserves food that impresses.</h2>
          <p>From 20 guests to 2,000 — we scale our service without compromising the quality or care in every dish.</p>
          <a href="/contact" class="btn btn--glass btn--lg">Start Planning Your Event</a>
        </div>
      </div>
    </section>

    <!-- SERVICE AREAS -->
    <section class="home-areas" aria-label="Service areas">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">Locations</p>
          <h2>We cater across the UK</h2>
          <p class="section-head__sub">Based in London, we travel nationwide for the right event.</p>
        </div>
        <div class="areas-grid">
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>London</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Birmingham</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Manchester</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Bristol</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Leeds</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Edinburgh</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Liverpool</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Nationwide</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Worldwide</div>
          <div class="area-pill"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>On Request</div>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="cta-band" aria-label="Call to action">
      <div class="container cta-band__inner reveal">
        <h2>Planning an event soon?</h2>
        <p>Tell us your date, guest count, and location. We will send a custom quote within 24 hours.</p>
        <a href="/contact" class="btn btn--fill btn--lg">Start Your Booking</a>
      </div>
    </section>
  `;
}
