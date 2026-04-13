import { mountHeader } from "/components/header.tsx";

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-accent-strip"></div>
    <div class="footer-body">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="/logo.png" alt="Millz Grill Ltd" class="footer-logo" />
            <p class="footer-brand__tagline">Premium Jamaican &amp; Ugandan catering for weddings, corporate events and private parties across the UK.</p>
            <a href="/contact" class="footer-brand__cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
              Get a Free Quote
            </a>
            <div class="social-row">
              <a href="#" aria-label="Instagram">Ig</a>
              <a href="#" aria-label="Facebook">Fb</a>
              <a href="#" aria-label="TikTok">Tk</a>
            </div>
          </div>
          <nav class="footer-col" aria-label="Footer navigation">
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/menu">Our Menu</a>
            <a href="/events">Events</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </nav>
          <div class="footer-col">
            <h4>Services</h4>
            <span>Wedding Catering</span>
            <span>Corporate Events</span>
            <span>Private Parties</span>
            <span>Festival &amp; Outdoor</span>
            <span>Live Grill Stations</span>
            <span>Nationwide Delivery</span>
          </div>
          <div class="footer-col">
            <h4>Get in Touch</h4>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>hello@millzgrill.co.uk</span>
            </div>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.19 2 2 0 012 .02h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span>+44 0000 000 000</span>
            </div>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>London, UK &mdash; Nationwide</span>
            </div>
          </div>
        </div>
        <div class="footer-bar">
          <p>&copy; <span id="year"></span> Millz Grill Ltd. All rights reserved.</p>
          <div class="footer-bar__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <span class="footer-bar__badge">UK Registered Business</span>
        </div>
      </div>
    </div>
  </footer>`;
}

export function renderLayout(activePage) {
  const headerMount = document.getElementById("header-root");
  const footerMount = document.getElementById("footer-root");

  if (headerMount) {
    mountHeader(headerMount, activePage);
  }

  if (footerMount) {
    footerMount.innerHTML = renderFooter();
  }
}
