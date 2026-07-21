"use client";

import { useState } from "react";
import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const project = data.get("project") || "";
    const message = data.get("message") || "";

    const body = `Nom: ${name}%0AEmail: ${email}%0AProjet: ${project}%0A%0A${message}`;
    window.location.href = `mailto:DevForge@gmail.com?subject=Demande de contact — ${project}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <>
      <ClientEffects />
      <Header />

      <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">{t("contact_eyebrow")}</span>
          <h1>{t("contact_title")}</h1>
          <p>{t("contact_p")}</p>
        </div>
      </section>

      <section id="contact-form" style={{ paddingTop: 40 }}>
        <div className="wrap contact-grid">
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("contact_form_name")}</label>
                <input type="text" id="name" name="name" required placeholder="Camille Dubreuil" />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t("contact_form_email")}</label>
                <input type="email" id="email" name="email" required placeholder="camille@exemple.fr" />
              </div>
              <div className="form-group">
                <label htmlFor="project">Type de projet</label>
                <input type="text" id="project" name="project" placeholder="Table sur mesure, 8 couverts" />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("contact_form_msg")}</label>
                <textarea id="message" name="message" required placeholder="Décrivez votre espace, vos délais, votre budget approximatif..." />
              </div>
              <button type="submit" className="cta-btn filled">{t("contact_form_btn")}</button>
              {sent && (
                <div className="form-success show">{t("contact_form_success")}</div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="info-block reveal">
              <h2>{t("contact_info_title")}</h2>
              <p>14, Rue des Artisans<br/>Bab Ezzouar, Alger</p>
            </div>
            <div className="info-block reveal">
              <h2>{t("contact_info_visit")}</h2>
              <p>{t("contact_info_visit_desc")}</p>
            </div>
            <div className="info-block reveal">
              <h2>{t("contact_info_hours")}</h2>
              <p>{t("contact_info_hours_desc")}</p>
            </div>
            <div className="info-block reveal">
              <h2>{t("contact_info_delay")}</h2>
              <p>{t("contact_info_delay_desc")}</p>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
