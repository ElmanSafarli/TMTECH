import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../include/Navbar";
import HomeContact from "../Parts/Home_contact";
import Footer from "../include/Footer";

// Images
import logo from "../../assets/TMTECH-Black.png";
import about1 from "../../assets/AboutP1.png";
import about2 from "../../assets/AboutP2.png";
import about3 from "../../assets/AboutP3.png";
import about4 from "../../assets/AboutP4.png";

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
            <img src={about2} alt="about" />
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
              <li>{t("about.role_additional")}</li>
            </ul>
          </div>
        </div>

        <div className="info">
          <div className="about-l">
            <h2>{t("about.services")}</h2>
            <p>{t("about.services_desc1")}</p>
            <ul>
              <li>
                <b>{t("about.integration_title")}</b> {t("about.integration")}
              </li>
              <li>
                <b>{t("about.processing_title")}</b> {t("about.processing")}
              </li>
              <li>
                <b>{t("about.monitoring_title")}</b> {t("about.monitoring")}
              </li>
            </ul>
          </div>
          <div className="about-r">
            <img src={about1} alt="about" />
          </div>
        </div>

        <div className="info">
          <div className="about-l">
            <img src={about4} alt="about" />
          </div>
          <div className="about-r">
            <h2>{t("about.advantages")}</h2>
            <ul>
              <li>
                <b>{t("about.reliability_title")}</b> {t("about.reliability")}
              </li>
              <li>
                <b>{t("about.speed_title")}</b> {t("about.speed")}
              </li>
              <li>
                <b>{t("about.flexibility_title")}</b> {t("about.flexibility")}
              </li>
              <li>
                <b>{t("about.scalability_title")}</b> {t("about.scalability")}
              </li>
            </ul>
          </div>
        </div>

        <div className="info">
          <div className="about-l">
            <h2>{t("about.applications")}</h2>
            <ul>
              <li>
                <b>{t("about.marketing_title")}</b> {t("about.marketing")}
              </li>
              <li>
                <b>{t("about.services_title")}</b> {t("about.services_desc2")}
              </li>
              <li>
                <b>{t("about.communication_title")}</b>{" "}
                {t("about.communication")}
              </li>
            </ul>
          </div>
          <div className="about-r">
            <img src={about3} alt="about" />
          </div>
        </div>
      </div>
      <HomeContact />
      <Footer />
    </>
  );
};

export default About;
