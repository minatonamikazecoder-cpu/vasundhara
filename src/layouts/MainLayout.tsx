import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useRef, useState, lazy, Suspense } from "react";
import PopupSearch from "@/shared/PopupSearch";
import Header1 from "@/shared/header/Header1";
import Footer1 from "@/shared/footer/Footer1";
import SideBar from "@/shared/sidebar/SideBar";
import { MobileMenuCloneProvider } from "@/shared/mobile-menu/MobileMenuCloneContext";
import GlobalEffects from "@/shared/effects/GlobalEffects";
import ThemeRouteSync from "@/shared/effects/ThemeRouteSync";
import BackToTop from "@/shared/elements/BackToTop";
import SmoothScrollEffect from "@/shared/effects/SmoothScrollEffect";

// Lazy load unused headers to keep main bundle size minimal
const Header2 = lazy(() => import("@/shared/header/Header2"));
const Header3 = lazy(() => import("@/shared/header/Header3"));
const Header4 = lazy(() => import("@/shared/header/Header4"));
const Header5 = lazy(() => import("@/shared/header/Header5"));
const Header7 = lazy(() => import("@/shared/header/Header7"));
const Header8 = lazy(() => import("@/shared/header/Header8"));
const Header9 = lazy(() => import("@/shared/header/Header9"));
const Header10 = lazy(() => import("@/shared/header/Header10"));
const Header12 = lazy(() => import("@/shared/header/Header12"));
const Header13 = lazy(() => import("@/shared/header/Header13"));
const Header14 = lazy(() => import("@/shared/header/Header14"));
const Header15 = lazy(() => import("@/shared/header/Header15"));

// Lazy load unused footers
const Footer2 = lazy(() => import("@/shared/footer/Footer2"));
const Footer3 = lazy(() => import("@/shared/footer/Footer3"));
const Footer4 = lazy(() => import("@/shared/footer/Footer4"));
const Footer5 = lazy(() => import("@/shared/footer/Footer5"));
const Footer6 = lazy(() => import("@/shared/footer/Footer6"));
const Footer7 = lazy(() => import("@/shared/footer/Footer7"));
const Footer8 = lazy(() => import("@/shared/footer/Footer8"));
const Footer9 = lazy(() => import("@/shared/footer/Footer9"));
const Footer10 = lazy(() => import("@/shared/footer/Footer10"));
const Footer11 = lazy(() => import("@/shared/footer/Footer11"));
const Footer12 = lazy(() => import("@/shared/footer/Footer12"));
const Footer13 = lazy(() => import("@/shared/footer/Footer13"));
const Footer14 = lazy(() => import("@/shared/footer/Footer14"));
const Footer15 = lazy(() => import("@/shared/footer/Footer15"));

type HeaderHandlers = {
  onOpenSearch?: () => void;
  onToggleSidebar?: () => void;
  onOpenHamburgerMenu?: () => void;
  style?: string;
};

const HEADER_COMPONENTS: Record<number, React.ComponentType<HeaderHandlers>> = {
  1: Header1,
  2: Header2,
  3: Header3,
  4: Header4,
  5: Header5,
  6: Header1, // fallback
  7: Header7,
  8: Header8,
  9: Header9,
  10: Header10,
  11: Header1, // fallback
  12: Header12,
  13: Header13,
  14: Header14,
  15: Header15,
};

const FOOTER_COMPONENTS: Record<number, React.ComponentType> = {
  1: Footer1,
  2: Footer2 as unknown as React.ComponentType,
  3: Footer3,
  4: Footer4,
  5: Footer5,
  6: Footer6,
  7: Footer7,
  8: Footer8,
  9: Footer9,
  10: Footer10,
  11: Footer11,
  12: Footer12,
  13: Footer13,
  14: Footer14,
  15: Footer15,
};

export type MainLayoutProps = {
  headerStyle?: number;
  footerStyle?: number;
  noFooter?: boolean;
  mainClass?: string;
  headerProps?: { style?: string };
};

export default function MainLayout({
  headerStyle = 1,
  footerStyle = 1,
  noFooter = false,
  mainClass = "bg-neutral-0",
  headerProps,
}: MainLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const handlers = useMemo(
    () => ({
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      toggleSidebar: () => setSidebarOpen((v) => !v),
      openSidebar: () => setSidebarOpen(true),
      closeSidebar: () => setSidebarOpen(false),
      openHamburgerMenu: () => setHamburgerMenuOpen(true),
      closeHamburgerMenu: () => setHamburgerMenuOpen(false),
      closeAllMenus: () => {
        setSidebarOpen(false);
        setHamburgerMenuOpen(false);
      },
    }),
    [],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSidebarOpen(false);
        setHamburgerMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bridge DOM class triggers (used by Header4-15 ported from Next.js) to MainLayout state.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      if (t.closest(".at-search-click, .search-btn")) {
        e.preventDefault();
        setSearchOpen(true);
        return;
      }
      if (t.closest(".at-header-sidebar-btn, .navbar-toggler, .at-menu-bar")) {
        e.preventDefault();
        setSidebarOpen(true);
        return;
      }
      if (t.closest(".at-header-menu-btn")) {
        e.preventDefault();
        const btn = (t.closest(".at-header-menu-btn") as HTMLElement) ?? null;
        const header = btn?.closest("header");
        if (header) {
          const isOpen = header.classList.contains("is-menu-open");
          header.classList.toggle("is-menu-open", !isOpen);
          btn?.setAttribute("aria-expanded", String(!isOpen));
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Sticky header on scroll (mirrors useHeaderInteractive behaviour for all headers)
  useEffect(() => {
    const el = document.getElementById("header-sticky");
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY ?? window.pageYOffset;
      el.classList.toggle("header-sticky", y >= 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const HeaderComponent = HEADER_COMPONENTS[headerStyle] ?? Header1;
  const FooterComponent = FOOTER_COMPONENTS[footerStyle] ?? Footer1;
  const isFooterFloating = footerStyle === 2;

  return (
    <MobileMenuCloneProvider>
      <div className="px-blur-bottom" />
      <SmoothScrollEffect />
      <GlobalEffects />
      <ThemeRouteSync />
      <Suspense fallback={null}>
        <HeaderComponent
          {...(headerProps ?? {})}
          onOpenSearch={handlers.openSearch}
          onToggleSidebar={handlers.toggleSidebar}
          onOpenHamburgerMenu={handlers.openHamburgerMenu}
        />
      </Suspense>
      <SideBar open={sidebarOpen} hamburgerOpen={hamburgerMenuOpen} onClose={handlers.closeAllMenus} />
      <PopupSearch open={searchOpen} onClose={handlers.closeSearch} />

      <div id="smooth-wrapper">
        <div id="smooth-content" className="z-index-3">
          <main className={mainClass}>
            <Outlet />
          </main>
          {!noFooter && isFooterFloating ? <div className="footer-placeholder" aria-hidden="true" /> : null}
          {!noFooter && !isFooterFloating ? (
            <Suspense fallback={null}>
              <FooterComponent />
            </Suspense>
          ) : null}
        </div>
        {!noFooter && isFooterFloating ? (
          <Suspense fallback={null}>
            <Footer2 ref={footerRef} />
          </Suspense>
        ) : null}
      </div>

      <BackToTop />
    </MobileMenuCloneProvider>
  );
}
