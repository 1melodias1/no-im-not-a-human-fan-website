"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./popup.module.scss";

export default function PopupMenu() {
  const [visible, setVisible] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setVisible(true);


    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (visible) closeBtnRef.current?.focus();
  }, [visible]);

  const closePopup = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.popup}>
        <button
          ref={closeBtnRef}
          className={styles.closebtn}
          onClick={closePopup}
          aria-label="Close"
        >
          ✖
        </button>

        <h2>!READ!</h2>
        <p>
          This website was created solely as a portfolio project, a fan-made
          site for the game No, I’m Not a Human. If you are the owner of these
          games, please contact me on DeviantArt using the button below, and I
          will remove this site at your request!
        </p>
        <a
          href="https://www.deviantart.com/amnessiiaa"
          target="_blank"
          className={styles.popupbtn}
        >
          Contact me
        </a>
      </div>
    </div>
  );
}
