"use client";

import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const portfolioItems = [
  { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Table basse Massif", cat: "salon", eyebrow: "Salon · Bab Ezzouar", h3: "Table basse Massif", p: "Chêne massif, pieds en acier brossé. Pièce unique pour un appartement haussmannien.", year: "2024" },
  { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Îlot de cuisine Noyer", cat: "cuisine", eyebrow: "Cuisine · Villeurbanne", h3: "Îlot de cuisine Noyer", p: "Noyer massif, plan de travail intégré. Collaboration avec un architecte d'intérieur.", year: "2024" },
  { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Lit frame Frêne", cat: "chambre", eyebrow: "Chambre · Caluire", h3: "Lit frame Frêne", p: "Frêne clair, tête de lit capitonnée. Design épuré, fabrication entièrement manuelle.", year: "2023" },
  { img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Bureau de direction", cat: "bureau", eyebrow: "Bureau · Hydra", h3: "Bureau de direction", p: "Noyer et acier noir. Tiroirs intégrés, cable management dissimulé.", year: "2023" },
  { img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Étagère murale", cat: "salon", eyebrow: "Salon · Villefranche", h3: "Étagère murale", p: "Chêne et tiges laquées noires. Structure modulable, 3 mètres de large.", year: "2023" },
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Table de jardin", cat: "terrasse", eyebrow: "Terrasse · Kouba", h3: "Table de jardin Noyer", p: "Noyer huilé, pliable. Résiste aux intempéries, design intemporel.", year: "2024" },
  { img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Plan de travail", cat: "cuisine", eyebrow: "Cuisine · Sainte-Foy", h3: "Plan de travail Chêne", p: "Chêne massif, finition huile. Bords arrondis, évidement pour évier intégré.", year: "2024" },
  { img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Commode 6 tiroirs", cat: "chambre", eyebrow: "Chambre · Bron", h3: "Commode 6 tiroirs", p: "Noyer massif, poignées intégrées. Finition cire, tiroirs en bois massif.", year: "2023" },
  { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Bibliothèque sur mesure", cat: "salon", eyebrow: "Salon · Hussein Dey", h3: "Bibliothèque sur mesure", p: "Chêne clair, structure métallique. 4 mètres de haut, 6 mètres de large.", year: "2024" },
];

export default function Portfolio() {
  const { t } = useLang();

  return (
    <>
      <ClientEffects />
      <Header />

      <section className="page-hero photo" style={{ backgroundImage: "linear-gradient(180deg, rgba(26,23,20,0.3) 0%, rgba(26,23,20,0.85) 80%), url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?fm=jpg&q=70&w=1800&auto=format&fit=crop')" }}>
        <div className="wrap">
          <span className="eyebrow">{t("portfolio_eyebrow")}</span>
          <h1 style={{ marginTop: 16 }}>{t("portfolio_title")}<em>{t("portfolio_title_em")}</em>{t("portfolio_title_2")}</h1>
          <p>{t("portfolio_p")}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="filter-bar reveal">
            <button className="active" data-filter="all">{t("filter_all")}</button>
            <button data-filter="salon">{t("filter_salon")}</button>
            <button data-filter="cuisine">{t("filter_cuisine")}</button>
            <button data-filter="chambre">{t("filter_chambre")}</button>
            <button data-filter="bureau">{t("filter_bureau")}</button>
            <button data-filter="terrasse">{t("filter_terrasse")}</button>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div className="portfolio-item reveal" data-category={item.cat} key={i}>
                <div className="portfolio-img">
                  <img src={item.img} alt={item.alt} loading="lazy" />
                </div>
                <div className="portfolio-meta">
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                  <span className="portfolio-date">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <span className="eyebrow reveal">Votre projet</span>
          <h2 className="reveal" style={{ marginTop: 16 }}>{t("cta3_title")}</h2>
          <p className="reveal">{t("cta3_p")}</p>
          <a href="/contact" className="cta-btn filled reveal">{t("cta3_btn")}</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
