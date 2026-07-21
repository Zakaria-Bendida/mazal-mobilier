import Link from "next/link";
import { GrainSvg } from "./GrainSvg";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: 20 }}>
              <GrainSvg size={24} />
              MAZAL
            </Link>
            <p style={{ fontSize: "0.85rem", color: "var(--charcoal-muted)", maxWidth: 280, lineHeight: 1.7 }}>
              Manufacture de mobilier massif façonné à la main dans notre atelier d&apos;Alger.
            </p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h3>Navigation</h3>
              <Link href="/collections">Collections</Link>
              <Link href="/savoir-faire">Savoir-faire</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/journal">Journal</Link>
            </div>
            <div className="foot-col">
              <h3>Services</h3>
              <Link href="/services#mobilier-sur-mesure">Mobilier sur mesure</Link>
              <Link href="/services#restauration">Restauration</Link>
              <Link href="/services#conseil-design">Conseil design</Link>
              <Link href="/contact#contact-form">Contact</Link>
            </div>
            <div className="foot-col">
              <h3>Contact</h3>
              <a href="tel:+213555000000">+213 555 00 00 00</a>
              <a href="mailto:DevForge@gmail.com">DevForge@gmail.com</a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Alger, Algérie</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 MAZAL Mobilier. Tous droits réservés.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/mentions">Mentions légales</Link>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
