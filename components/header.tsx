import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// Native anchor wrapper — triggers real browser navigation instead of in-memory SPA routing
const Link = ({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> }) => (
  <a href={to} className={className} onClick={onClick}>{children}</a>
);
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Search,
  Accessibility,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const pagePathMap = {
  home: '/',
  about: '/about',
  menu: '/menu',
  events: '/events',
  gallery: '/gallery',
  contact: '/contact',
};

interface SubmenuItem {
  name: string;
  path: string;
}

interface DropdownItem {
  name: string;
  path?: string;
  children?: SubmenuItem[];
}

interface NavItem {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

const MAIN_LOGO_SRC = '/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isMobileCleaningOpen, setIsMobileCleaningOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDesktopSearchFocused, setIsDesktopSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const allServices = [
    { name: 'Wedding Catering', path: '/services/wedding' },
    { name: 'Corporate Events', path: '/services/corporate' },
    { name: 'Private Parties', path: '/services/parties' },
    { name: 'Festival & Outdoor', path: '/services/festival' },
    { name: 'Live Grill Stations', path: '/services/live-grill' },
    { name: 'Nationwide Delivery', path: '/services/delivery' },
    { name: 'Jamaican Cuisine', path: '/menu' },
    { name: 'Ugandan Cuisine', path: '/menu' },
    { name: 'Jerk Chicken', path: '/menu' },
    { name: 'Curried Goat', path: '/menu' },
    { name: 'Menu Packages', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Get a Quote', path: '/contact' },
  ];

  const filteredServices = searchQuery.trim()
    ? allServices.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : allServices;

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setIsMobileCleaningOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Menu',
      path: '/menu',
      dropdown: [
        { name: 'All Dishes', path: '/menu' },
        { name: 'Jamaican Cuisine', path: '/menu?filter=jamaican' },
        { name: 'Ugandan Cuisine', path: '/menu?filter=ugandan' },
        { name: 'Sides & Extras', path: '/menu?filter=sides' },
        { name: 'Packages & Pricing', path: '/menu?filter=packages' },
      ],
    },
    {
      name: 'Services',
      path: '/services/wedding',
      dropdown: [
        { name: 'Wedding Catering', path: '/services/wedding' },
        { name: 'Corporate Events', path: '/services/corporate' },
        { name: 'Private Parties', path: '/services/parties' },
        { name: 'Festival & Outdoor', path: '/services/festival' },
        { name: 'Live Grill Stations', path: '/services/live-grill' },
        { name: 'Nationwide Delivery', path: '/services/delivery' },
      ],
    },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const hasActiveDropdownItem = (item: DropdownItem) => {
    if (item.path && isActive(item.path)) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => isActive(child.path));
    }
    return false;
  };

  const handleCompactMenuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="w-full z-[150] fixed top-0 left-0 bg-white border-b border-stone-200 font-google-sans"
      style={{
        ['--color-mg-yellow' as string]: '#f5c800',
        ['--color-mg-red' as string]: '#c8102e',
      }}
    >
      {/* Desktop top row */}
      <div className={`hidden lg:block border-b border-slate-200 overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0 border-b-0' : 'max-h-24 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-24 h-auto flex items-center justify-center overflow-hidden">
              <img
                src={MAIN_LOGO_SRC}
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

            <div className="flex flex-col items-end gap-1 text-[10px] font-bold text-stone-700 tracking-wide">
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="px-2.5 py-1.5 transition-colors flex items-center gap-1 text-stone-600 hover:text-[#c8102e]"
              >
                About us
              </Link>
              <Link
                to="/menu"
                className="px-2.5 py-1.5 transition-colors flex items-center gap-1 text-stone-600 hover:text-[#c8102e]"
              >
                Our menu
              </Link>
              <Link
                to="/events"
                className="px-2.5 py-1.5 transition-colors flex items-center gap-1 text-stone-600 hover:text-[#c8102e]"
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="px-2.5 py-1.5 transition-colors flex items-center gap-1 text-stone-600 hover:text-[#c8102e]"
              >
                Contact us
              </Link>
            </div>
            <div className="flex items-center gap-3 px-2.5">
              <a href="tel:+447749896334" className="hover:text-[#f5c800] transition-colors">+44 7749 896334</a>
              <span className="text-stone-300">|</span>
              <a href="mailto:hello@millzgrill.co.uk" className="hover:text-[#f5c800] transition-colors">hello@millzgrill.co.uk</a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop nav row */}
      <div className={`hidden lg:block bg-white transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-24 opacity-100 overflow-visible'}`}>
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    }
                  }}
                  className={`px-3.5 py-2 text-[15px] font-bold tracking-wide transition-colors flex items-center gap-1.5 ${
                    openDropdown === link.name
                      ? 'text-[#c8102e]'
                      : 'text-stone-800 hover:text-[#c8102e]'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 mt-2"
                      >
                        <div className="grid gap-1">
                          {link.dropdown.map((sub) => (
                            sub.children ? (
                              <div
                                key={sub.name}
                                className="relative"
                                onMouseEnter={() => setIsMobileCleaningOpen(true)}
                                onMouseLeave={() => setIsMobileCleaningOpen(false)}
                              >
                                <button
                                  type="button"
                                  className="w-full px-4 py-3 rounded-xl text-[13px] font-semibold transition-all flex items-center justify-between text-stone-700 hover:text-[#c8102e]"
                                  onClick={() => setIsMobileCleaningOpen((open) => !open)}
                                >
                                  {sub.name}
                                  <ChevronRight size={14} className={`transition-transform ${isMobileCleaningOpen ? 'translate-x-0.5' : ''}`} />
                                </button>

                                <AnimatePresence>
                                  {isMobileCleaningOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 8, scale: 0.98 }}
                                      animate={{ opacity: 1, x: 0, scale: 1 }}
                                      exit={{ opacity: 0, x: 8, scale: 0.98 }}
                                      className="absolute top-0 left-full z-30"
                                    >
                                      <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3">
                                        <div className="flex flex-col gap-1">
                                          {sub.children.map((child) => (
                                            <Link
                                              key={child.name}
                                              to={child.path}
                                              className="w-full px-4 py-3 rounded-xl text-[13px] font-semibold transition-all flex items-center justify-between group/sub text-stone-700 hover:text-[#c8102e]"
                                            >
                                              {child.name}
                                              <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                key={sub.name}
                                to={sub.path || '/services'}
                                className="px-4 py-3 rounded-xl text-[13px] font-semibold transition-all flex items-center justify-between group/sub text-stone-700 hover:text-[#c8102e]"
                              >
                                {sub.name}
                                <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

            <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu, pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsDesktopSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsDesktopSearchFocused(false), 150)}
                className="w-64 h-11 rounded-lg border border-slate-200 bg-white pl-4 pr-10 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <AnimatePresence>
                {isDesktopSearchFocused && searchQuery.trim().length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-[300]"
                  >
                    {filteredServices.length > 0 ? (
                      filteredServices.map((s) => (
                        <a
                          key={s.name + s.path}
                          href={s.path}
                          className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-yellow-50 hover:text-slate-900 transition-colors border-b border-slate-50 last:border-0"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => { setSearchQuery(''); setIsDesktopSearchFocused(false); }}
                        >
                          <span>{s.name}</span>
                          <ArrowRight size={14} className="text-slate-300" />
                        </a>
                      ))
                    ) : (
                      <div className="px-4 py-5 text-sm text-slate-400 text-center">No results for &ldquo;{searchQuery}&rdquo;</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/contact"
              className="px-4 h-11 rounded-lg bg-stone-900 text-[#f5c800] text-xs font-bold tracking-wide hover:bg-black transition-colors inline-flex items-center gap-2"
            >
              Book Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop compact row on scroll */}
      <div className={`hidden lg:block overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="w-20 h-auto flex items-center justify-center overflow-hidden">
              <img
                src={MAIN_LOGO_SRC}
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

          <button
            type="button"
            onClick={handleCompactMenuClick}
            className="h-8 px-4 border border-stone-800 text-stone-800 text-[11px] font-black uppercase tracking-[0.16em] inline-flex items-center gap-1 hover:bg-stone-900 hover:text-[#f5c800] transition-colors"
          >
            Menu
            <ChevronUp size={12} />
          </button>
        </div>
      </div>

      {/* Mobile Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="lg:hidden bg-white border-b border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-3">
          <Link to="/" className="flex items-center">
            <div className="w-20 sm:w-24 h-auto flex items-center justify-center overflow-hidden">
              <img
                src={MAIN_LOGO_SRC}
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-stone-700 bg-white transition-all duration-300 active:scale-95"
              aria-label="Accessibility"
            >
              <Accessibility size={22} />
            </button>
            <button
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-stone-700 bg-white transition-all duration-300 active:scale-95"
              aria-label="Search services"
              onClick={() => {
                setIsSearchOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <Search size={22} />
            </button>
            <button
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-stone-700 bg-white transition-all duration-300 active:scale-95"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Search Overlay — portalled to body to escape header stacking context */}
      {createPortal(
        <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[250] bg-[#0a0a0a] lg:hidden flex flex-col"
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/15">
              <Search size={20} className="text-white/60 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu..."
                className="flex-1 bg-transparent text-white text-lg placeholder-white/40 outline-none font-medium"
              />
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3">
              {filteredServices.length > 0 ? (
                <div className="space-y-1">
                  {filteredServices.map((service, i) => (
                    <motion.div
                      key={service.path + service.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                    >
                      <Link
                        to={service.path}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center justify-between px-4 py-4 rounded-xl text-white hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-[15px] font-medium">{service.name}</span>
                        <ArrowRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search size={40} className="text-white/20 mx-auto mb-4" />
                  <p className="text-white/50 text-sm font-medium">No services found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}

      {/* Mobile Nav — portalled to body to escape header stacking context */}
      {createPortal(
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[74px] bottom-0 z-[200] bg-[#0a0a0a] lg:hidden overflow-y-auto"
          >
            <div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i }}
                  className="border-b border-white/15"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between text-white uppercase px-5 py-5"
                      >
                        <span className="text-[15px] font-semibold tracking-[0.12em]">
                          {link.name}
                        </span>
                        <ChevronRight size={20} className={`text-white/70 transition-transform ${openMobileDropdown === link.name ? 'rotate-90' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {openMobileDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-[#111]"
                          >
                            {link.dropdown.map((sub) => (
                              sub.children ? (
                                <div key={sub.name} className="border-t border-white/10">
                                  <button
                                    type="button"
                                    className="w-full flex items-center justify-between text-white uppercase px-7 py-4"
                                    onClick={() => setIsMobileCleaningOpen((open) => !open)}
                                  >
                                    <span className="text-[13px] font-semibold tracking-[0.1em]">
                                      {sub.name}
                                    </span>
                                    <ChevronRight size={18} className={`text-white/60 transition-transform ${isMobileCleaningOpen ? 'rotate-90' : ''}`} />
                                  </button>

                                  <AnimatePresence>
                                    {isMobileCleaningOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden bg-[#1a1a1a]"
                                      >
                                        {sub.children.map((child) => (
                                          <Link
                                            key={child.name}
                                            to={child.path}
                                            className="block px-9 py-3.5 text-white/90 text-[13px] font-medium border-t border-white/8"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {child.name}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  key={sub.name}
                                  to={sub.path || '/services'}
                                  className="block px-7 py-4 text-white text-[13px] font-semibold uppercase tracking-[0.1em] border-t border-white/10"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-5 py-5 text-white text-[15px] font-semibold uppercase tracking-[0.12em]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  );
};

export default Header;

export function mountHeader(container: HTMLElement, activePage: string) {
  const location = pagePathMap[activePage as keyof typeof pagePathMap] || '/';
  const root = createRoot(container);
  root.render(
    <MemoryRouter initialEntries={[location]}>
      <Header />
    </MemoryRouter>
  );
}
