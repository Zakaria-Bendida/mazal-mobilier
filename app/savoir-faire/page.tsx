"use client";

import Link from "next/link";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

export default function SavoirFaire() {
  const { t } = useLang();

  return (
    <>
      <ClientEffects />
      <Header />

      <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{t("savoir_eyebrow")}</span>
          <h1>{t("savoir_title")}</h1>
          <p>{t("savoir_p")}</p>
        </div>
      </section>

      <section className="process" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="proc-list">
            {[
              { num: t("step1_num"), title: t("step1_title"), desc: t("step1_desc"), tags: [t("step1_tag1"), t("step1_tag2"), t("step1_tag3")] },
              { num: t("step2_num"), title: t("step2_title"), desc: t("step2_desc"), tags: [t("step2_tag1"), t("step2_tag2")] },
              { num: t("step3_num"), title: t("step3_title"), desc: t("step3_desc"), tags: [t("step3_tag1"), t("step3_tag2")] },
              { num: t("step4_num"), title: t("step4_title"), desc: t("step4_desc"), tags: [t("step4_tag1"), t("step4_tag2")] },
            ].map((step, i) => (
              <div className="proc-item reveal" key={i}>
                <div className="proc-num">{step.num}</div>
                <div className="proc-title"><h2>{step.title}</h2></div>
                <div className="proc-desc">
                  <p>{step.desc}</p>
                  <div className="tags">
                    {step.tags.filter(Boolean).map((tag, j) => <span key={j}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <svg className="grain-divider" viewBox="0 0 1200 64" preserveAspectRatio="none">
        <path d="M0,32 C150,10 250,54 400,32 C550,10 650,54 800,32 C950,10 1050,54 1200,32" />
        <path className="a2" d="M0,40 C150,20 250,60 400,40 C550,20 650,60 800,40 C950,20 1050,60 1200,40" />
      </svg>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t("mat_eyebrow")}</span>
            <h2>{t("mat_title")}</h2>
            <p>{t("mat_p")}</p>
          </div>
          <div className="materials-grid">
            <div className="material-card reveal">
              <div className="swatch-dot" style={{ background: "linear-gradient(155deg,#8a552f,#5c3a1e)" }} />
              <h3>{t("mat1_title")}</h3>
              <p>{t("mat1_desc")}</p>
            </div>
            <div className="material-card reveal">
              <div className="swatch-dot" style={{ background: "linear-gradient(155deg,#5c4530,#2c2015)" }} />
              <h3>{t("mat2_title")}</h3>
              <p>{t("mat2_desc")}</p>
            </div>
            <div className="material-card reveal">
              <div className="swatch-dot" style={{ background: "linear-gradient(155deg,#c2a173,#7a5c34)" }} />
              <h3>{t("mat3_title")}</h3>
              <p>{t("mat3_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="wrap phil-grid">
          <p className="phil-quote reveal">
            « On forme un compagnon en <span>quatre ans</span>, pas en quatre semaines. »
          </p>
          <div className="phil-body reveal">
            <p>L&apos;atelier compte sept personnes : trois ébénistes, deux apprentis, une designer et Julien, qui dessine chaque collection. Personne ne touche une commande client avant d&apos;avoir passé au moins un an sur les pièces d&apos;exposition.</p>
            <p>Nous formons nos propres apprentis parce qu&apos;aucune école ne peut enseigner la manière MAZAL de lire une planche.</p>
            <div className="phil-sign"><span className="dot" />Julien Roussel, fondateur &amp; ébéniste</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <h2>{t("cta2_title")}</h2>
          <p>{t("cta2_p")}</p>
          <Link href="/contact" className="cta-btn filled">{t("cta2_btn")}</Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
