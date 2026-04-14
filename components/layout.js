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
            <p class="footer-brand__tagline">Premium Jamaican &amp; Ugandan catering for weddings, corporate events and private parties across England, Senegal and Uganda.</p>
            <a href="/contact" class="footer-brand__cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
              Get a Free Quote
            </a>
            <div class="social-row">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l.04-8.04a8.17 8.17 0 004.84 1.57V5.4a4.85 4.85 0 01-1.11-.71z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a href="https://x.com" aria-label="X (Twitter)" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
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
              <span>+44 7749 896334</span>
            </div>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>England &bull; Senegal &bull; Uganda</span>
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
