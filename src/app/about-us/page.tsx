"use client";

import styles from "./aboutus.module.scss";
import { useState } from "react";

export default function AboutUsPage() {
  const [copied, setCopied] = useState(false);

  const email = "yourmail@example.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Eror: ", err);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.bg_cont}>
        <img src="/bg3.png" alt="Background" className={styles.bg} />
      </div>

      <div className={styles.about_us}>
        <div className={styles.about_page}>
          <div className={styles.row}>
            <img src="/Trioskaz_LOGO.png" alt="Logo" className={styles.logo} />

            <div className={styles.textBlock}>
              <h1 className={styles.about_main_t}>About us</h1>
              <p className={styles.about_decrib_t}>
                Trioskaz is an independent game development studio founded in
                2021 by three friends based in Russia, developing a project for
                a contest and later uniting together to form the studio,
                creating games based on their own anxieties
              </p>
            </div>
          </div>
          <div className={styles.team_page}>
            <div className={styles.textBlock}>
              <h1 className={styles.team_main_t}>Our Team</h1>

              <p className={styles.team_describ_t}>
                <span className={styles.name_t}>Nikita Veter</span> - Founder,
                narrative designer, game designer
              </p>

              <p className={styles.team_describ_t}>
                <span className={styles.name_t}>Vladomir Svistunov</span> -
                Programmer, game designer
              </p>

              <p className={styles.team_describ_t}>
                <span className={styles.name_t}>Viola Chulyukanova</span> - 2D
                artist, animator
              </p>

              <p className={styles.team_describ_t}>
                <span className={styles.name_t}>Elisey Sinitsa</span> -
                Programmer, sound designer, project manager
              </p>

              <p className={styles.team_describ_t}>
                <span className={styles.name_t}>Olga Shkirando</span> - 2D/3D
                artist, level designer
              </p>
            </div>
            <div className={styles.work_page}>
              <div className={styles.textBlock}>
                <h1 className={styles.work_main_t}>Want work with us?</h1>
                <p className={styles.work_describ_t}>
                  We’re always on the lookout for new recruits in our mission to
                  create top-quality gaming experiences. If you’d like to join
                  us, send us an email at{" "}
                  <span className={styles.email} onClick={handleCopy}>
                    {copied ? "Copied!" : email}
                  </span>{" "}
                  and we’ll provide you with a resume form to complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
