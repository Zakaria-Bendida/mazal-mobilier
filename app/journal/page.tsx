"use client";

import Link from "next/link";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const articles = [
  { img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Le chêne", cat: "bois", eyebrow: "Bois", h3: "Le chêne : un compagnon pour les siècles", p: "Pourquoi le chêne reste le choix privilégié des ébénistes depuis des siècles, et comment nous le sélectionnons dans notre atelier.", read: "12 min de lecture", date: "Mars 2024" },
  { img: "https://images.unsplash.com/photo-1503602642458-232111445657?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Jointures", cat: "artisanat", eyebrow: "Artisanat", h3: "L'art de la jointure sans vis", p: "Les assemblages traditionnels qui font la solidité et la beauté de notre mobilier, du tenon-mortaise à la queue d'aronde.", read: "8 min de lecture", date: "Février 2024" },
  { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Tendances", cat: "design", eyebrow: "Design", h3: "Minimalisme : moins, mais mieux", p: "Comment le design scandinave influence notre approche du mobilier fonctionnel, sans tomber dans le dénuement.", read: "6 min de lecture", date: "Janvier 2024" },
  { img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "L'atelier", cat: "atelier", eyebrow: "Atelier", h3: "Une journée dans l'atelier MAZAL", p: "Suivez-nous pendant une journée type : de l'ouverture du atelier à la finition d'une table en noyer massif.", read: "10 min de lecture", date: "Décembre 2023" },
  { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Patine", cat: "bois", eyebrow: "Bois", h3: "La beauté de la patine naturelle", p: "Pourquoi le bois vieillit avec grâce, et comment accompagner ce processus pour un mobilier qui s'améliore avec le temps.", read: "7 min de lecture", date: "Novembre 2023" },
  { img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?fm=jpg&q=70&w=800&auto=format&fit=crop", alt: "Couleurs", cat: "design", eyebrow: "Design", h3: "Couleurs naturelles : la palette du bois", p: "Du blond au noir, en passant par les tons miel et cendre. Comment choisir la essence et la finition adaptées à votre intérieur.", read: "9 min de lecture", date: "Octobre 2023" },
];

export default function Journal() {
  const { t } = useLang();

  return (
    <>
      <ClientEffects />
      <Header />

      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{t("journal_eyebrow")}</span>
          <h1 style={{ marginTop: 16 }}>{t("journal_title")}<em>{t("journal_title_em")}</em>{t("journal_title_2")}</h1>
          <p>{t("journal_p")}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="filter-bar reveal">
            <button className="active" data-filter="all">{t("journal_filter_all")}</button>
            <button data-filter="bois">{t("journal_filter_bois")}</button>
            <button data-filter="artisanat">{t("journal_filter_artisanat")}</button>
            <button data-filter="design">{t("journal_filter_design")}</button>
            <button data-filter="atelier">{t("journal_filter_atelier")}</button>
          </div>
          <div className="journal-grid">
            {articles.map((a, i) => (
              <article className="journal-card reveal" data-category={a.cat} key={i}>
                <div className="journal-img">
                  <img src={a.img} alt={a.alt} loading="lazy" />
                </div>
                <div className="journal-body">
                  <span className="eyebrow">{a.eyebrow}</span>
                  <h3>{a.h3}</h3>
                  <p>{a.p}</p>
                  <div className="journal-meta">
                    <span>{a.read}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <span className="eyebrow reveal">Restez informé</span>
          <h2 className="reveal" style={{ marginTop: 16 }}>{t("cta5_title")}</h2>
          <p className="reveal">{t("cta5_p")}</p>
          <Link href="/contact" className="cta-btn filled reveal">{t("cta5_btn")}</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
