import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/TMTECH-Black.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <h4>{t("footer.item_1")}</h4>
              <p className="copyright">All right reserved - ©TMTECH 2024</p>
            </div>
            <div className="footer-item">
              <div className="footer-links-group">
                <div className="footer-links">
                  <h3>{t("footer.item_2")}</h3>
                  <ul>
                    <li>
                      <Link to="/about-us">{t("footer.item_3")}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t("footer.item_4")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>{t("footer.item_5")}</h3>
                  <ul>
                    <li>
                      <Link to="/product/a2-p">{t("footer.item_6")}</Link>
                    </li>
                    <li>
                      <Link to="/product/p2-p">{t("footer.item_7")}</Link>
                    </li>
                    <li>
                      <Link to="/product/p2-a">{t("footer.item_8")}</Link>
                    </li>
                    <li>
                      <Link to="/product/sip-trunking">
                        {t("footer.item_9")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/virtual-calls">
                        {t("footer.item_10")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>{t("footer.item_11")}</h3>
                  <ul>
                    <li>
                      <Link to="tel:+995593423949">+995593423949</Link>
                    </li>
                    <li>
                      <Link to="mailto:info@tmtech.pro">info@tmtech.pro</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>{t("footer.item_12")}</h3>
                  <ul>
                    <li>{t("footer.item_13")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
