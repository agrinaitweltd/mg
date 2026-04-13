function o(t){t.innerHTML=`
    <section class="page-banner" aria-label="Gallery banner">
      <div class="container page-banner__inner">
        <p class="label">Gallery</p>
        <h1>Food, Events &amp; Moments</h1>
        <p class="page-banner__sub">A visual showcase of our dishes, event setups, and live service in action.</p>
        <div class="page-banner__counter">Across weddings, festivals, &amp; private events</div>
      </div>
    </section>

    <section class="gallery-filter" aria-label="Filter gallery">
      <button class="gallery-filter__btn active" data-filter="all">All</button>
      <button class="gallery-filter__btn" data-filter="food">Food</button>
      <button class="gallery-filter__btn" data-filter="events">Events</button>
      <button class="gallery-filter__btn" data-filter="setup">Setup</button>
    </section>

    <section class="gallery-masonry" aria-label="Photo gallery">
      <div class="masonry-full">
        <button class="masonry-full__item masonry-full__item--tall" data-lightbox data-category="food">
          <img src="https://images.unsplash.com/photo-1432139509613-5c4255815697?w=900&q=80&auto=format&fit=crop" alt="Jerk chicken closeup" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item" data-lightbox data-category="setup">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80&auto=format&fit=crop" alt="Live grill station" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item" data-lightbox data-category="food">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80&auto=format&fit=crop" alt="Food spread" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item masonry-full__item--wide" data-lightbox data-category="events">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop" alt="Wedding service table" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item" data-lightbox data-category="setup">
          <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80&auto=format&fit=crop" alt="Event setup" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item masonry-full__item--tall" data-lightbox data-category="events">
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80&auto=format&fit=crop" alt="Corporate event" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item" data-lightbox data-category="food">
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80&auto=format&fit=crop" alt="Braised oxtail" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item" data-lightbox data-category="events">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop" alt="Wedding reception" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item" data-lightbox data-category="food">
          <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=900&q=80&auto=format&fit=crop" alt="Ugandan dish" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
        <button class="masonry-full__item masonry-full__item--wide" data-lightbox data-category="setup">
          <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&q=80&auto=format&fit=crop" alt="Corporate buffet setup" />
          <div class="masonry-full__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        </button>
      </div>
    </section>

    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
      <button class="lightbox__close" aria-label="Close">&times;</button>
      <button class="lightbox__prev" aria-label="Previous">&lsaquo;</button>
      <button class="lightbox__next" aria-label="Next">&rsaquo;</button>
      <img class="lightbox__img" src="" alt="" />
    </div>

    <section class="cta-band" aria-label="Gallery CTA">
      <div class="container cta-band__inner reveal">
        <h2>Like what you see?</h2>
        <p>Get in touch to discuss how we can bring this quality to your event.</p>
        <a href="/contact" class="btn btn--fill btn--lg">Book Your Event</a>
      </div>
    </section>
  `}export{o as renderPage};
