"use client";

import Link from "next/link";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const serviceCards = [
  {
    id: "mobilier-sur-mesure",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    titleKey: "service1_title",
    descKey: "service1_desc",
    items: ["service1_li1", "service1_li2", "service1_li3", "service1_li4", "service1_li5"],
  },
  {
    id: "restauration",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    titleKey: "service2_title",
    descKey: "service2_desc",
    items: ["service2_li1", "service2_li2", "service2_li3", "service2_li4", "service2_li5"],
  },
  {
    id: "conseil-design",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
    titleKey: "service3_title",
    descKey: "service3_desc",
    items: ["service3_li1", "service3_li2", "service3_li3", "service3_li4", "service3_li5"],
  },
];

const processSteps = [
  { numKey: "step_a1_num", titleKey: "step_a1_title", descKey: "step_a1_desc" },
  { numKey: "step_a2_num", titleKey: "step_a2_title", descKey: "step_a2_desc" },
  { numKey: "step_a3_num", titleKey: "step_a3_title", descKey: "step_a3_desc" },
  { numKey: "step_a4_num", titleKey: "step_a4_title", descKey: "step_a4_desc" },
];

const testimonials = [
  { quoteKey: "test1_quote", author1Key: "test1_author_1", author2Key: "test1_author_2" },
  { quoteKey: "test2_quote", author1Key: "test2_author_1", author2Key: "test2_author_2" },
  { quoteKey: "test3_quote", author1Key: "test3_author_1", author2Key: "test3_author_2" },
  { quoteKey: "test4_quote", author1Key: "test4_author_1", author2Key: "test4_author_2" },
];

export default function Services() {
  const { t } = useLang();

  return (
    <>
      <ClientEffects />
      <Header />

      <section className="page-hero photo" style={{ backgroundImage: "linear-gradient(180deg, rgba(26,23,20,0.3) 0%, rgba(26,23,20,0.85) 80%), url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?fm=jpg&q=60&w=1200&auto=format&fit=crop')" }}>
        <div className="wrap">
          <span className="eyebrow">{t("services_eyebrow")}</span>
          <h1 style={{ marginTop: 16 }}>{t("services_title")}<em>{t("services_title_em")}</em>{t("services_title_2")}</h1>
          <p>{t("services_p")}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t("services_head_eyebrow")}</span>
            <h2>{t("services_head_title")}</h2>
            <p>{t("services_head_p")}</p>
          </div>
          <div className="services-grid">
            {serviceCards.map((card, i) => (
              <div className="service-card reveal" id={card.id} key={i}>
                <div className="service-icon">{card.icon}</div>
                <h3>{t(card.titleKey)}</h3>
                <p>{t(card.descKey)}</p>
                <ul>
                  {card.items.map((itemKey, j) => (
                    <li key={j}>{t(itemKey)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t("process_eyebrow")}</span>
            <h2>{t("process_title")}</h2>
            <p>{t("process_p")}</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <div className="process-step reveal" key={i}>
                <div className="process-step-num">{t(step.numKey)}</div>
                <h4>{t(step.titleKey)}</h4>
                <p>{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{t("testimonials_eyebrow")}</span>
            <h2>{t("testimonials_title")}</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((test, i) => (
              <div className="testimonial-card reveal" key={i}>
                <blockquote>{t(test.quoteKey)}</blockquote>
                <div className="testimonial-author">
                  <b>{t(test.author1Key)}</b><span>{t(test.author2Key)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <span className="eyebrow reveal">Prêt à commencer ?</span>
          <h2 className="reveal" style={{ marginTop: 16 }}>{t("services_cta_title")}</h2>
          <p className="reveal">{t("services_cta_p")}</p>
          <Link href="/contact" className="cta-btn filled reveal">{t("services_cta_btn")}</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
