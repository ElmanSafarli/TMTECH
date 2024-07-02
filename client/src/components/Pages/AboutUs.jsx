import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../include/Navbar";
import HomeContact from "../Parts/Home_contact";
import Footer from "../include/Footer";

// Images
import logo from "../../assets/TMTECH-Black.png";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="main">
          <div className="about-l">
            <span>{t("about.title")}</span>
            <h1>{t("about.description")}</h1>
          </div>
          <div className="about-r">
            <img src={logo} alt="about" />
          </div>
        </div>

        <div className="info">
          <div className="about-l">
            <img src="" alt="about" />
          </div>
          <div className="about-r">
            <h2>{t("about.role_title")}</h2>
            <p>{t("about.role_description")}</p>
            <ul>
              <li>Telegram</li>
              <li>WhatsApp</li>
              <li>Mail.ru</li>
              <li>Odnoklassniki</li>
              <li>Facebook</li>
              <li>{t("about.role_description")}</li>
            </ul>
          </div>
        </div>

        <div className="info">
          <div className="about-l">
            <h2>{t("about.services")}</h2>
            <p>{t("about.integration")}</p>
            <ul>
              <li>
                <b>{t("about.integration")}</b> {t("about.integration")}
              </li>
              <li>
                <b>{t("about.processing")}</b> {t("about.processing")}
              </li>
              <li>
                <b>{t("about.monitoring")}</b> {t("about.monitoring")}
              </li>
            </ul>
          </div>
          <div className="about-r"></div>
        </div>

        <div className="info">
          <div className="about-l">
            <img src="" alt="about" />
          </div>
          <div className="about-r">
            <h2>{t("about.advantages")}</h2>
            <ul>
              <li>
                <b>{t("about.reliability")}</b> {t("about.reliability_desc")}
              </li>
              <li>
                <b>{t("about.speed")}</b> {t("about.speed_desc")}
              </li>
              <li>
                <b>{t("about.flexibility")}</b> {t("about.flexibility_desc")}
              </li>
              <li>
                <b>{t("about.scalability")}</b> {t("about.scalability_desc")}
              </li>
            </ul>
          </div>
        </div>

        <div className="info">
          <div className="about-l">
            <h2>{t("about.applications")}</h2>
            <ul>
              <li>
                <b>{t("about.marketing")}</b> {t("about.marketing_desc")}
              </li>
              <li>
                <b>{t("about.services_desc")}</b> {t("about.services_desc")}
              </li>
              <li>
                <b>{t("about.communication")}</b>{" "}
                {t("about.communication_desc")}
              </li>
            </ul>
          </div>
          <div className="about-r">
            <img src="" alt="about" />
          </div>
        </div>
      </div>
      <HomeContact />
      <Footer />
    </>
  );
};

export default About;
