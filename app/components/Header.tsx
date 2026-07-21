"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/app/lib/LangContext";
import { GrainSvg } from "./GrainSvg";

const navLinks = [
  { href: "/", key: "nav_accueil" },
  { href: "/collections", key: "nav_collections" },
  { href: "/savoir-faire", key: "nav_savoir_faire" },
  { href: "/portfolio", key: "nav_portfolio" },
  { href: "/journal", key: "nav_journal" },
  { href: "/services", key: "nav_services" },
  { href: "/contact", key: "nav_contact" },
];

export function Header() {
  const { t, toggleLang, lang } = useLang();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 50);
      if (y > lastScroll && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        id="siteHeader"
        className={`${solid ? "solid" : ""}`}
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        <div className="wrap">
          <Link href="/" className="logo">
            <GrainSvg />
            MAZAL
          </Link>
          <nav className="links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
          <Link href="/contact#contact-form" className="cta-btn">
            {t("nav_rendez_vous")}
          </Link>
          <button className="lang-btn" onClick={toggleLang}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            className={`nav-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMobile}>
            {t(link.key)}
          </Link>
        ))}
        <Link
          href="/contact#contact-form"
          className="cta-btn filled"
          onClick={closeMobile}
        >
          {t("mobile_rendez_vous")}
        </Link>
        <button
          className="lang-btn"
          onClick={() => { toggleLang(); closeMobile(); }}
          style={{ alignSelf: "flex-start", marginTop: 20 }}
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </nav>
    </>
  );
}
