import React from "react";
import { useTranslation } from "react-i18next";

// Images
import aboutImg from "../../assets/3185942.jpg";
// import client_1 from "../../assets/client_1.png";
// import client_2 from "../../assets/client_2.png";
// import client_3 from "../../assets/client_3.png";
// import client_4 from "../../assets/client_4.png";
// import client_5 from "../../assets/client_5.png";
// import client_6 from "../../assets/client_6.png";

// const clients = [client_1, client_2, client_3, client_4, client_5, client_6];

// const ClientBox = ({ src, alt }) => (
//   <div className="client-box">
//     <img src={src} alt={alt} />
//   </div>
// );

const HomeAbout = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="about">
        <div className="about-content">
          <h1>
            {t("home_about.heading")}{" "}
            <span>{t("home_about.heading_span")}</span>
          </h1>
          <div className="info">
            <div className="main">
              <img
                className="fill-img"
                src={aboutImg}
                alt={t("home_about.alt_text", { defaultValue: "about" })}
              />
            </div>
            <div className="text">
              <p>
                {t("home_about.description")}{" "}
                <span>{t("home_about.description_span")}</span>{" "}
                {t("home_about.description_continued")}
              </p>
            </div>
          </div>
          {/* <div className="clients">
                        <div className="clients-group">
                            {clients.map((client, index) => (
                                <ClientBox key={index} src={client} alt={`client ${index + 1}`} />
                            ))}
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
