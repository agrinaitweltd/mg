import { renderLayout } from "/components/layout.js";

const pageLoaders = {
  home: () => import("/pages/home.js"),
  about: () => import("/pages/about.js"),
  menu: () => import("/pages/menu.js"),
  events: () => import("/pages/events.js"),
  gallery: () => import("/pages/gallery.js"),
  contact: () => import("/pages/contact.js"),
  wedding: () => import("/pages/wedding.js"),
  corporate: () => import("/pages/corporate.js"),
  parties: () => import("/pages/parties.js"),
  festival: () => import("/pages/festival.js"),
  'live-grill': () => import("/pages/live-grill.js"),
  delivery: () => import("/pages/delivery.js"),
};

const pathMap = {
  '/': 'home',
  '/about': 'about',
  '/about/': 'about',
  '/menu': 'menu',
  '/menu/': 'menu',
  '/events': 'events',
  '/events/': 'events',
  '/gallery': 'gallery',
  '/gallery/': 'gallery',
  '/contact': 'contact',
  '/contact/': 'contact',
  '/services/wedding': 'wedding',
  '/services/wedding/': 'wedding',
  '/services/corporate': 'corporate',
  '/services/corporate/': 'corporate',
  '/services/parties': 'parties',
  '/services/parties/': 'parties',
  '/services/festival': 'festival',
  '/services/festival/': 'festival',
  '/services/live-grill': 'live-grill',
  '/services/live-grill/': 'live-grill',
  '/services/delivery': 'delivery',
  '/services/delivery/': 'delivery',
};

async function bootstrap() {
  const page = pathMap[window.location.pathname] || 'home';
  const loader = pageLoaders[page];

  if (!loader) {
    throw new Error(`No page module configured for: ${page}`);
  }

  renderLayout(page);
  document.body.dataset.page = page;

  const main = document.getElementById("main-content");
  const module = await loader();
  module.renderPage(main);

  if (typeof module.initPage === 'function') {
    module.initPage(main);
  }

  await import("/script.js");
}

bootstrap().catch((error) => {
  console.error(error);
});
