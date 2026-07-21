"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const collections = [
  { img: "/images/lignemassif.png", alt: "Ligne Massif", cat: "tables", eyebrow: "Tables", h3: "Ligne Massif", p: "Plateaux en chêne massif, pieds chanfreinés à la main. Sur mesure de 4 à 12 couverts.", price: "À partir de 380 000 DA", details: ["Chêne massif séché 24 mois", "Pieds chanfreinés à la main", "Finition huile naturelle", "Sur mesure de 4 à 12 couverts", "Délai : 10 à 14 semaines"] },
  { img: "/images/lignebasse.png", alt: "Ligne Basse", cat: "tables", eyebrow: "Tables", h3: "Ligne Basse", p: "Tables basses en noyer, plateau flottant sur une seule pièce d'assemblage visible.", price: "À partir de 260 000 DA", details: ["Noyer massif huilé", "Plateau flottant", "Assemblage visible en queue d'aronde", "3 longueurs disponibles", "Délai : 8 à 12 semaines"] },
  { img: "/images/lignecambrure.png", alt: "Ligne Cambrure", cat: "sieges", eyebrow: "Sièges", h3: "Ligne Cambrure", p: "Chaises et bancs à l'assise galbée, assemblés sans une seule vis apparente.", price: "À partir de 95 000 DA", details: ["Frêne massif", "Assise galbée sculptée", "Assemblage tenon-mortaise", "Sans vis apparente", "Délai : 6 à 10 semaines"] },
  { img: "/images/ligneaccoudoir.png", alt: "Ligne Accoudoir", cat: "sieges", eyebrow: "Sièges", h3: "Ligne Accoudoir", p: "Fauteuils en frêne massif, assise en cuir tannage végétal cousu main.", price: "À partir de 190 000 DA", details: ["Frêne massif + cuir tannage végétal", "Cousu main à l'atelier", "Structure ergonomique", "Coussin amovible", "Délai : 10 à 14 semaines"] },
  { img: "/images/lignesillon.png", alt: "Ligne Sillon", cat: "rangements", eyebrow: "Rangements", h3: "Ligne Sillon", p: "Buffets et bibliothèques à charnières invisibles, pensés pour durer trois générations.", price: "À partir de 440 000 DA", details: ["Chêne et noyer massif", "C charnières invisibles", "Tiroirs à coulisses en bois", "Finition cire d'abeille", "Délai : 12 à 16 semaines"] },
  { img: "/images/lignesuspendue.png", alt: "Ligne Suspendue", cat: "rangements", eyebrow: "Rangements", h3: "Ligne Suspendue", p: "Étagères murales fixées sans équerre visible, structure entièrement en bois.", price: "À partir de 130 000 DA", details: ["Frêne massif", "Fixation invisible", "Structure 100% bois", "Modulable à volonté", "Délai : 6 à 8 semaines"] },
  { img: "/images/ligneveine.png", alt: "Ligne Veine", cat: "luminaires", eyebrow: "Luminaires", h3: "Ligne Veine", p: "Suspensions en placage fin, la lumière traverse le grain du bois comme un filigrane.", price: "À partir de 65 000 DA", details: ["Placage de chêne ou noyer", "Éclairage LED intégré", "Câble réglable en hauteur", "Ambiance chaleureuse", "Délai : 4 à 6 semaines"] },
  { img: "/images/ligneapplique.png", alt: "Ligne Applique", cat: "luminaires", eyebrow: "Luminaires", h3: "Ligne Applique", p: "Appliques murales tournées à la main, une pièce unique par exemplaire.", price: "À partir de 44 000 DA", details: ["Bois tourné à la main", "Chaque pièce est unique", "Doucle E27 LED", "Montage mural simple", "Délai : 3 à 5 semaines"] },
];

export default function Collections() {
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

  const openCard = (i: number) => setSelected(i);
  const closeCard = () => setSelected(null);

  return (
    <>
      <ClientEffects />
      <Header />
      <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{t("collections_eyebrow")}</span>
          <h1>{t("collections_title")}</h1>
          <p>{t("collections_p")}</p>
        </div>
      </section>
      <section style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="filter-bar">
            <button className="active" data-filter="all">{t("filter_tout")}</button>
            <button data-filter="tables">{t("filter_tables")}</button>
            <button data-filter="sieges">{t("filter_sieges")}</button>
            <button data-filter="rangements">{t("filter_rangements")}</button>
            <button data-filter="luminaires">{t("filter_luminaires")}</button>
          </div>
          <div className="grid-cards">
            {collections.map((c, i) => (
              <article className="coll-card" data-cat={c.cat} key={i} onClick={() => openCard(i)} style={{ cursor: "pointer" }}>
                <div className="coll-swatch">
                  <Image src={c.img} alt={c.alt} width={400} height={260} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="coll-info">
                  <span className="eyebrow">{c.eyebrow}</span>
                  <h2>{c.h3}</h2>
                  <p>{c.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div className="detail-overlay" onClick={closeCard}>
          <div className="detail-card" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close" onClick={closeCard} aria-label="Fermer">&times;</button>
            <div className="detail-layout">
              <div className="detail-img">
                <Image
                  src={collections[selected].img}
                  alt={collections[selected].alt}
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="detail-body">
                <span className="eyebrow">{collections[selected].eyebrow}</span>
                <h2>{collections[selected].h3}</h2>
                <p className="detail-desc">{collections[selected].p}</p>
                <div className="detail-price">{collections[selected].price}</div>
                <ul className="detail-list">
                  {collections[selected].details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <Link href="/contact#contact-form" className="cta-btn filled" onClick={closeCard}>
                  {t("cta3_btn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="cta-section">
        <div className="wrap">
          <h2>{t("cta3_title")}</h2>
          <p>{t("cta3_p")}</p>
          <Link href="/contact#contact-form" className="cta-btn filled">{t("cta3_btn")}</Link>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
