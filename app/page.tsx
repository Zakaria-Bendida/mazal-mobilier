"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const homeCollections = [
  { img: "/images/lignemassif.png", alt: "Ligne Massif", eyebrow: "Tables", h3: "Ligne Massif", p: "Plateaux en chêne massif, pieds chanfreinés à la main. Sur mesure de 4 à 12 couverts.", price: "À partir de 380 000 DA", details: ["Chêne massif séché 24 mois", "Pieds chanfreinés à la main", "Finition huile naturelle", "Sur mesure de 4 à 12 couverts", "Délai : 10 à 14 semaines"] },
  { img: "/images/lignecambrure.png", alt: "Ligne Cambrure", eyebrow: "Sièges", h3: "Ligne Cambrure", p: "Chaises et bancs à l'assise galbée, assemblés sans une seule vis apparente.", price: "À partir de 95 000 DA", details: ["Frêne massif", "Assise galbée sculptée", "Assemblage tenon-mortaise", "Sans vis apparente", "Délai : 6 à 10 semaines"] },
  { img: "/images/lignesillon.png", alt: "Ligne Sillon", eyebrow: "Rangements", h3: "Ligne Sillon", p: "Buffets et bibliothèques à charnières invisibles, pensés pour durer trois générations.", price: "À partir de 440 000 DA", details: ["Chêne et noyer massif", "Charnières invisibles", "Tiroirs à coulisses en bois", "Finition cire d'abeille", "Délai : 12 à 16 semaines"] },
  { img: "/images/ligneveine.png", alt: "Ligne Veine", eyebrow: "Luminaires", h3: "Ligne Veine", p: "Suspensions en placage fin, la lumière traverse le grain du bois comme un filigrane.", price: "À partir de 65 000 DA", details: ["Placage de chêne ou noyer", "Éclairage LED intégré", "Câble réglable en hauteur", "Ambiance chaleureuse", "Délai : 4 à 6 semaines"] },
];

export default function Home() {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      const preventScroll = (e: TouchEvent) => {
        if (!(e.target as HTMLElement).closest(".detail-body")) {
          e.preventDefault();
        }
      };
      document.addEventListener("touchmove", preventScroll, { passive: false });
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.removeEventListener("touchmove", preventScroll);
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selected]);

  return (
    <>
      <ClientEffects />
      <Header />

      <main>
      {/* HERO */}
      <section className="hero">
        <svg className="rings-bg" viewBox="0 0 900 900" aria-hidden="true">
          <circle className="ring-draw" cx="450" cy="450" r="120" style={{ animationDelay: "0.1s" }} />
          <circle className="ring-draw" cx="450" cy="450" r="190" style={{ animationDelay: "0.25s" }} />
          <circle className="ring-draw accent" cx="450" cy="450" r="255" style={{ animationDelay: "0.4s" }} />
          <circle className="ring-draw" cx="450" cy="450" r="320" style={{ animationDelay: "0.55s" }} />
          <circle className="ring-draw" cx="450" cy="450" r="390" style={{ animationDelay: "0.7s" }} />
          <circle className="ring-draw accent" cx="450" cy="450" r="440" style={{ animationDelay: "0.85s" }} />
        </svg>
        <div className="hero-inner">
          <div className="wrap">
            <span className="eyebrow">{t("hero_eyebrow")}</span>
            <h1 style={{ marginTop: 20 }}>
              {t("hero_title_1")}<em>{t("hero_title_em")}</em><br />{t("hero_title_2")}
            </h1>
            <p className="lead">{t("hero_lead")}</p>
            <div className="hero-actions">
              <Link href="/collections" className="cta-btn filled">{t("hero_btn_collections")}</Link>
              <Link href="/savoir-faire" className="txt-link">{t("hero_link_savoir")}</Link>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span>{t("hero_scroll")}</span><span className="stem" aria-hidden="true" />
        </div>
      </section>

      <svg className="grain-divider" viewBox="0 0 1200 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C150,10 250,54 400,32 C550,10 650,54 800,32 C950,10 1050,54 1200,32" />
        <path className="a2" d="M0,40 C150,20 250,60 400,40 C550,20 650,60 800,40 C950,20 1050,60 1200,40" />
      </svg>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="wrap phil-grid">
          <p className="phil-quote reveal">
            {t("phil_quote_1")}<span>{t("phil_quote_em")}</span>{t("phil_quote_2")}
          </p>
          <div className="phil-body reveal">
            <p>{t("phil_p1")}</p>
            <p>{t("phil_p2")}</p>
            <div className="phil-sign">
              <span className="dot" aria-hidden="true" />{t("phil_sign")}
            </div>
          </div>
        </div>
      </section>

      <svg className="grain-divider" viewBox="0 0 1200 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C150,54 250,10 400,32 C550,54 650,10 800,32 C950,54 1050,10 1200,32" />
        <path className="a2" d="M0,24 C150,46 250,4 400,24 C550,46 650,4 800,24 C950,46 1050,4 1200,24" />
      </svg>

      {/* COLLECTIONS TEASER */}
      <section id="collections">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t("coll_eyebrow")}</span>
            <h2>{t("coll_title")}</h2>
            <p>Chaque collection porte le nom du geste qui la définit. Faites glisser pour parcourir l&apos;atelier.</p>
          </div>
          <div className="collections-scroll" id="collScroll">
            {homeCollections.map((c, i) => (
              <article className="coll-card" key={i} onClick={() => setSelected(i)} style={{ cursor: "pointer" }}>
                <div className="coll-swatch">
                  <img src={c.img} alt={c.h3} loading="lazy" width="340" height="300" />
                </div>
                <div className="coll-info">
                  <span className="eyebrow">{c.eyebrow}</span>
                  <h3>{c.h3}</h3>
                  <p>{c.p}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="coll-nav">
            <button id="collPrev" aria-label="Précédent">{t("coll_prev")}</button>
            <button id="collNext" aria-label="Suivant">{t("coll_next")}</button>
          </div>
          <div style={{ textAlign: "right", marginTop: 14 }}>
            <Link href="/collections" className="txt-link">{t("coll_btn")}</Link>
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className="detail-overlay" onClick={() => setSelected(null)}>
          <div className="detail-card" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close" onClick={() => setSelected(null)} aria-label="Fermer">&times;</button>
            <div className="detail-layout">
              <div className="detail-img">
                <img
                  src={homeCollections[selected].img}
                  alt={homeCollections[selected].alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="detail-body">
                <span className="eyebrow">{homeCollections[selected].eyebrow}</span>
                <h2>{homeCollections[selected].h3}</h2>
                <p className="detail-desc">{homeCollections[selected].p}</p>
                <div className="detail-price">{homeCollections[selected].price}</div>
                <ul className="detail-list">
                  {homeCollections[selected].details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <Link href="/contact#contact-form" className="cta-btn filled" onClick={() => setSelected(null)}>
                  {t("cta3_btn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <svg className="grain-divider" viewBox="0 0 1200 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C150,10 250,54 400,32 C550,10 650,54 800,32 C950,10 1050,54 1200,32" />
        <path className="a2" d="M0,40 C150,20 250,60 400,40 C550,20 650,60 800,40 C950,20 1050,60 1200,40" />
      </svg>

      {/* STATS */}
      <section className="stats">
        <svg className="stats-rings" viewBox="0 0 1100 1100" aria-hidden="true">
          <circle cx="550" cy="550" r="180" />
          <circle cx="550" cy="550" r="280" />
          <circle cx="550" cy="550" r="380" />
          <circle cx="550" cy="550" r="480" />
        </svg>
        <div className="wrap">
          <div className="stats-grid">
            <div className="reveal">
              <div className="stat-num"><span className="accent" data-count="1240">0</span>+</div>
              <div className="stat-label">{t("stat_1_label")}</div>
            </div>
            <div className="reveal">
              <div className="stat-num"><span data-count="14">0</span> ans</div>
              <div className="stat-label">{t("stat_2_label")}</div>
            </div>
            <div className="reveal">
              <div className="stat-num"><span data-count="26">0</span></div>
              <div className="stat-label">{t("stat_3_label")}</div>
            </div>
            <div className="reveal">
              <div className="stat-num"><span className="accent" data-count="98">0</span>%</div>
              <div className="stat-label">{t("stat_4_label")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="wrap test-wrap reveal">
          <span className="eyebrow">{t("test_eyebrow")}</span>
          <blockquote>{t("test_quote")}</blockquote>
          <div className="test-author">
            <b>{t("test_author_1")}</b><span>{t("test_author_2")}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap">
          <span className="eyebrow">{t("cta_eyebrow")}</span>
          <h2>{t("cta_title")}</h2>
          <p>{t("cta_p")}</p>
          <Link href="/contact" className="cta-btn filled">{t("cta_btn")}</Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
