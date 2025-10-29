import styles from "./playpage.module.scss";

export default function PlayPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.bg_cont}>
        <img src="/bg3.png" alt="Background" className={styles.bg} />
      </div>

      <div className={styles.page_cont}>
        <div className={styles.pageinfo}>
          <div className={styles.logocont}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <h1 className={styles.logo_describ}>Select your platform</h1>
        </div>

        <div className={styles.lists_cont}>
          <div className={styles.platformlist}>
            <div className={styles.select_list}>
              <img src="/steambg.png" alt="Steam" className={styles.list} />
              <h1 className={styles.listmaint}>Steam</h1>
              <hr className={styles.listhr} />
              <a
                href="https://store.steampowered.com/app/3180070/No_Im_not_a_Human/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.listbtn}
              >
                Buy on Steam for 13,49 $
              </a>
            </div>

            <div className={styles.select_list}>
              <img src="/egsbg.png" alt="EpicGames" className={styles.list} />
              <h1 className={styles.listmaint}>EpicGames</h1>
              <hr className={styles.listhr} />
              <a href="#" className={styles.listbtn}>
                Coming soon
              </a>
            </div>

            <div className={styles.select_list}>
              <img src="/psbg.png" alt="PlayStation" className={styles.list} />
              <h1 className={styles.listmaint}>PlayStation</h1>
              <hr className={styles.listhr} />
              <a href="#" className={styles.listbtn}>
                Coming soon
              </a>
            </div>

            <div className={styles.select_list}>
              <img src="/xboxbg.png" alt="Xbox" className={styles.list} />
              <h1 className={styles.listmaint}>Xbox</h1>
              <hr className={styles.listhr} />
              <a href="#" className={styles.listbtn}>
                Coming soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
