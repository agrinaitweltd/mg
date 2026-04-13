import { renderLayout } from "/components/layout.js";

const pageLoaders = {
  home: () => import("/pages/home.js"),
  about: () => import("/pages/about.js"),
  menu: () => import("/pages/menu.js"),
  events: () => import("/pages/events.js"),
  gallery: () => import("/pages/gallery.js"),
  contact: () => import("/pages/contact.js"),
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

  await import("/script.js");
}

bootstrap().catch((error) => {
  console.error(error);
});
