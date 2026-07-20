"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const collections = [
  { img: "/images/lignemassif.png", alt: "Ligne Massif", cat: "tables", eyebrow: "Tables", h3: "Ligne Massif", p: "Plateaux en chêne massif, pieds chanfreinés à la main. Sur mesure de 4 à 12 couverts." },
  { img: "/images/lignebasse.png", alt: "Ligne Basse", cat: "tables", eyebrow: "Tables", h3: "Ligne Basse", p: "Tables basses en noyer, plateau flottant sur une seule pièce d'assemblage visible." },
  { img: "/images/lignecambrure.png", alt: "Ligne Cambrure", cat: "sieges", eyebrow: "Sièges", h3: "Ligne Cambrure", p: "Chaises et bancs à l'assise galbée, assemblés sans une seule vis apparente." },
  { img: "/images/ligneaccoudoir.png", alt: "Ligne Accoudoir", cat: "sieges", eyebrow: "Sièges", h3: "Ligne Accoudoir", p: "Fauteuils en frêne massif, assise en cuir tannage végétal cousu main." },
  { img: "/images/lignesillon.png", alt: "Ligne Sillon", cat: "rangements", eyebrow: "Rangements", h3: "Ligne Sillon", p: "Buffets et bibliothèques à charnières invisibles, pensés pour durer trois générations." },
  { img: "/images/lignesuspendue.png", alt: "Ligne Suspendue", cat: "rangements", eyebrow: "Rangements", h3: "Ligne Suspendue", p: "Étagères murales fixées sans équerre visible, structure entièrement en bois." },
  { img: "/images/ligneveine.png", alt: "Ligne Veine", cat: "luminaires", eyebrow: "Luminaires", h3: "Ligne Veine", p: "Suspensions en placage fin, la lumière traverse le grain du bois comme un filigrane." },
  { img: "/images/ligneapplique.png", alt: "Ligne Applique", cat: "luminaires", eyebrow: "Luminaires", h3: "Ligne Applique", p: "Appliques murales tournées à la main, une pièce unique par exemplaire." },
];

export default function Collections() {
  const { t } = useLang();

  return (
    <>
      <ClientEffects />
      <Header />
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
              <article className="coll-card" data-cat={c.cat} key={i}>
                <div className="coll-swatch">
                  <Image src={c.img} alt={c.alt} width={400} height={260} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="coll-info">
                  <span className="eyebrow">{c.eyebrow}</span>
                  <h3>{c.h3}</h3>
                  <p>{c.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="wrap">
          <h2>{t("cta3_title")}</h2>
          <p>{t("cta3_p")}</p>
          <Link href="/contact" className="cta-btn filled">{t("cta3_btn")}</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
