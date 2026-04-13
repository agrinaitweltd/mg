export function renderPage(main) {
  main.innerHTML = `
    <section class="page-banner" aria-label="Contact banner">
      <div class="container page-banner__inner">
        <p class="label">Contact Us</p>
        <h1>Talk to our catering team</h1>
        <p class="page-banner__sub">Send your event brief and we will come back with menu recommendations and a custom quote.</p>
        <div class="page-banner__promise">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          We respond to all enquiries within 24 hours
        </div>
      </div>
    </section>

    <section class="contact-split" aria-label="Contact form and details">
      <div class="contact-split__form">
        <div class="contact-split__form-inner">
          <p class="label">Send an Enquiry</p>
          <h2 style="font-size:1.8rem;margin-bottom:.5rem">Get a tailored quote</h2>
          <p class="contact-split__sub">Fill in the form below and our team will put together a proposal for your event.</p>
          <form class="ct-form reveal" aria-label="Contact form" id="contact-form">
            <div class="form-field"><label for="ct-name">Full Name *</label><input id="ct-name" name="name" type="text" required placeholder="Your full name" /></div>
            <div class="form-field"><label for="ct-email">Email Address *</label><input id="ct-email" name="email" type="email" required placeholder="you@example.com" /></div>
            <div class="ct-form__row">
              <div class="form-field"><label for="ct-phone">Phone Number</label><input id="ct-phone" name="phone" type="tel" placeholder="+44 7700 000 000" /></div>
              <div class="form-field"><label for="ct-event">Event Type *</label><select id="ct-event" name="event" required><option value="">Select type…</option><option>Wedding</option><option>Corporate Event</option><option>Private Party</option><option>Festival / Outdoor</option><option>Other</option></select></div>
            </div>
            <div class="ct-form__row">
              <div class="form-field"><label for="ct-guests">Guest Count</label><input id="ct-guests" name="guests" type="number" min="1" placeholder="e.g. 80" /></div>
              <div class="form-field"><label for="ct-date">Event Date</label><input id="ct-date" name="date" type="date" /></div>
            </div>
            <div class="form-field"><label for="ct-message">Tell us about your event</label><textarea id="ct-message" name="message" rows="4" placeholder="Location, theme, dietary requirements, any special requests…"></textarea></div>
            <button type="submit" class="btn btn--fill btn--block">Send Enquiry</button>
            <p id="form-status" style="margin-top:.75rem;font-size:.85rem;color:var(--accent);display:none"></p>
          </form>
        </div>
      </div>
      <aside class="contact-split__info">
        <div class="contact-split__info-inner reveal">
          <p class="label">Our Details</p>
          <h3 style="color:#fff;margin-bottom:1.5rem">Millz Grill Ltd</h3>
          <div class="contact-split__detail">
            <svg class="contact-split__icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div><h3>Email</h3><p>hello@millzgrill.co.uk</p><small>We respond within 24 hours</small></div>
          </div>
          <div class="contact-split__detail">
            <svg class="contact-split__icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.19 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            <div><h3>Phone</h3><p>+44 0000 000 000</p><small>Mon–Fri 9am–6pm</small></div>
          </div>
          <div class="contact-split__detail">
            <svg class="contact-split__icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div><h3>Location</h3><p>London, UK</p><small>We travel nationwide for events</small></div>
          </div>
          <hr class="contact-split__rule" />
          <div class="contact-split__social">
            <p>Follow us</p>
            <div style="display:flex;gap:.75rem;margin-top:.5rem">
              <a href="#" aria-label="Instagram" style="display:flex;align-items:center;justify-content:center;width:38px;height:38px;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.7);transition:.2s;text-decoration:none;font-size:.75rem;font-weight:700">Ig</a>
              <a href="#" aria-label="Facebook" style="display:flex;align-items:center;justify-content:center;width:38px;height:38px;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.7);transition:.2s;text-decoration:none;font-size:.75rem;font-weight:700">Fb</a>
              <a href="#" aria-label="TikTok" style="display:flex;align-items:center;justify-content:center;width:38px;height:38px;border:1px solid rgba(255,255,255,.2);border-radius:50%;color:rgba(255,255,255,.7);transition:.2s;text-decoration:none;font-size:.75rem;font-weight:700">Tk</a>
            </div>
          </div>
        </div>
      </aside>
    </section>

    <section class="contact-reviews" aria-label="Client reviews">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">Reviews</p>
          <h2>Trusted by hundreds of clients</h2>
        </div>
        <div class="review-trio">
          <div class="review-card reveal"><p>"From the first enquiry through to the wedding day, the Millz Grill team were professional, responsive, and the food was exceptional."</p><footer><strong>Stephanie &amp; Marcus</strong><span>Wedding, London</span></footer></div>
          <div class="review-card reveal"><p>"We used Millz Grill for our annual company dinner. The setup was flawless and our team are still raving about the jerk chicken."</p><footer><strong>James Okafor</strong><span>Corporate Dinner, Birmingham</span></footer></div>
          <div class="review-card reveal"><p>"Booked them for my 40th birthday party — they completely exceeded expectations. The live grill station was an absolute showstopper."</p><footer><strong>Kezia Thompson</strong><span>Private Party, Manchester</span></footer></div>
        </div>
      </div>
    </section>

    <section class="contact-faq" aria-label="FAQ">
      <div class="container">
        <div class="section-head reveal">
          <p class="label">FAQs</p>
          <h2>Common questions</h2>
        </div>
        <div class="faq-wrap">
          <details class="faq reveal"><summary>How far in advance should I book?</summary><p>We recommend booking at least 8–12 weeks ahead for weddings and large events. For smaller bookings, 4 weeks is usually sufficient, though we do take last-minute enquiries subject to availability.</p></details>
          <details class="faq reveal"><summary>Do you cater for dietary requirements?</summary><p>Yes — all our menus can be adapted for vegan, vegetarian, gluten-free, halal, and other dietary requirements. We provide full allergen information for every dish served.</p></details>
          <details class="faq reveal"><summary>What is your minimum guest count?</summary><p>Our minimum is 20 guests for buffet bookings. Plated service and live grill packages start from 50 guests. Contact us to discuss smaller events.</p></details>
          <details class="faq reveal"><summary>Do you travel outside London?</summary><p>Yes — we cater events across the UK, including Birmingham, Manchester, Bristol, Leeds, and Edinburgh. Travel costs may apply for distance bookings.</p></details>
          <details class="faq reveal"><summary>Is a deposit required to confirm a booking?</summary><p>Yes, a 25% deposit is required to secure your date. The remaining balance is due 14 days before the event.</p></details>
        </div>
      </div>
    </section>
  `;

  // Simple form feedback (no actual backend — just UX polish)
  const form = main.querySelector('#contact-form');
  const status = main.querySelector('#form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.style.display = 'block';
      status.textContent = '✓ Thank you! We will be in touch within 24 hours.';
      form.reset();
    });
  }
}
