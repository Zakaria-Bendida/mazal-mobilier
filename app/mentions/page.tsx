"use client";

import { useLang } from "@/app/lib/LangContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ClientEffects } from "@/app/components/ClientEffects";

const legalStyles = {
  maxWidth: 760,
} as const;

const h3Style = {
  fontSize: "1.15rem",
  fontWeight: 500,
  marginTop: 40,
  marginBottom: 16,
  fontFamily: "var(--font-display)",
} as const;

const pStyle = {
  color: "var(--charcoal-light)",
  lineHeight: 1.85,
  marginBottom: 16,
  fontSize: "0.92rem",
} as const;

const ulStyle = {
  listStyle: "disc",
  paddingLeft: 20,
  marginBottom: 16,
} as const;

const liStyle = {
  color: "var(--charcoal-light)",
  lineHeight: 1.85,
  marginBottom: 6,
  fontSize: "0.92rem",
} as const;

export default function Mentions() {
  const { t } = useLang();

  return (
    <>
      <ClientEffects />
      <Header />

      <section className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="wrap">
          <span className="eyebrow">Informations légales</span>
          <h1 style={{ marginTop: 16 }}>{t("mentions_title")}</h1>
        </div>
      </section>

      <section>
        <div className="wrap" style={legalStyles}>
          <h3 style={h3Style}>{t("mentions_editeur")}</h3>
          <p style={pStyle}>
            MAZAL Mobilier<br/>
            SARL au capital de 10 000 &euro;<br/>
            Siège social : 14, Rue des Artisans, Bab Ezzouar, Alger<br/>
            RC Alger : 123 456 789<br/>
            NIF : 123456789012345<br/>
            N° TVA intracommunautaire : FR 12 345678900<br/>
            Directeur de la publication : [Nom du dirigeant]
          </p>

          <h3 style={h3Style}>{t("mentions_hebergeur")}</h3>
          <p style={pStyle}>
            [Nom de l&apos;hébergeur]<br/>
            [Adresse de l&apos;hébergeur]<br/>
            [Téléphone de l&apos;hébergeur]
          </p>

          <h3 style={h3Style}>{t("mentions_propriete")}</h3>
          <p style={pStyle}>
            L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, fichiers sons) est la propriété exclusive de MAZAL Mobilier ou de ses partenaires et est protégé par les lois algériennes et internationales relatives à la propriété intellectuelle.
          </p>
          <p style={pStyle}>
            Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable écrite de MAZAL Mobilier.
          </p>

          <h3 style={h3Style}>{t("mentions_donnees")}</h3>
          <p style={pStyle}>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez de droits sur vos données personnelles :
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Droit d&apos;accès à vos données</li>
            <li style={liStyle}>Droit de rectification</li>
            <li style={liStyle}>Droit à l&apos;effacement</li>
            <li style={liStyle}>Droit à la portabilité des données</li>
            <li style={liStyle}>Droit d&apos;opposition au traitement</li>
          </ul>
          <p style={pStyle}>
            Pour exercer ces droits, contactez-nous à : <a href="mailto:atelier@grain-mobilier.fr" style={{ color: "var(--accent)" }}>atelier@grain-mobilier.fr</a>
          </p>

          <h3 style={h3Style}>{t("mentions_cookies")}</h3>
          <p style={pStyle}>
            Ce site utilise des cookies strictement nécessaires à son bon fonctionnement. Il ne collecte aucune donnée de navigation à des fins publicitaires ou de mesure d&apos;audience sans votre consentement explicite.
          </p>

          <h3 style={h3Style}>{t("mentions_responsabilite")}</h3>
          <p style={pStyle}>
            MAZAL Mobilier s&apos;efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.
          </p>

          <h3 style={h3Style}>{t("mentions_droit")}</h3>
          <p style={pStyle}>
            Les présentes mentions légales sont régies par le droit algérien. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de MAZAL Mobilier.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
