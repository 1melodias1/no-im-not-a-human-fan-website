import styles from "./page.module.scss";
import PopupMenu from "@/app/popupmenu/popupmenu";
export default function Home() {
  return (
    <>
      <PopupMenu />
      <div className={styles.bgcontainer}>
        <img src="/bg.png" alt="Background" className={styles.bg} />
      </div>
      <div className={styles.page}>
        <div className={styles.intro}>
          <div className={styles.logocont}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <h1 className={styles.introtext}>
            Paranoid Horror Survival. Lock your doors, shutter your windows, and
            trust no one. A world of relentless fear awaits at the end of time.
          </h1>
          <div className={styles.playcont}>
            <div className={styles.game_logo_cont}>
              <img src="/ps logo.png" alt="pslogo" />
              <img src="/xbox logo.png" alt="xboxlogo" />
              <img src="/steam logo.png" alt="steamlogo" />
              <img src="/egs logo.png" alt="egslogo" />
            </div>
            <button>
              <a href="/play-no-im-not-a-human">PLAY NOW</a>
            </button>
          </div>
        </div>
        <div className={styles.news}>
          <hr className={styles.bghr}></hr>
          <img src="/bg2.png" alt="Background" className={styles.bg} />
          <h1 className={styles.newst}>News</h1>
          <div className={styles.newslist}>
            <div className={styles.infonewslist}>
              <img src="/patch2.png" alt="infonews" className={styles.list} />
              <h1 className={styles.listmaint}>Game Patch #2</h1>
              <hr className={styles.listhr} />
              <p className={styles.listt}>
                The tall man no longer appears during the tutorial, game
                optimization has been improved, and some sounds have been fixed.
              </p>
              <a href="./" className={styles.listbtn}>
                Read More
              </a>
            </div>
            <div className={styles.infonewslist}>
              <img src="/patch1.png" alt="infonews" className={styles.list} />
              <h1 className={styles.listmaint}>Game Patch #1</h1>
              <hr className={styles.listhr} />
              <p className={styles.listt}>
                Many bugs have been fixed, HDR can now be configured, and
                cutscenes no longer cause the game to crash.
              </p>
              <a href="./" className={styles.listbtn}>
                Read More
              </a>
            </div>
            <div className={styles.infonewslist}>
              <img src="/list1.png" alt="infonews" className={styles.list} />
              <h1 className={styles.listmaint}>No, I’m Not a Human Out Now</h1>
              <hr className={styles.listhr} />
              <p className={styles.listt}>
                The release is here! No, I’m Not a Human is now available on all
                platforms. You can now purchase the game on your preferred
                platform and enjoy the experience.
              </p>
              <a href="./" className={styles.listbtn}>
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className={styles.ourgames}>
          <hr className={styles.bghr}></hr>
          <img src="/bg3.png" alt="Background" className={styles.bg} />
          <h1 className={styles.ourmaint}> Our other games</h1>
          <div className={styles.ourgameslistcont}>
            <div className={styles.gamelist}>
              <img
                src="/gameslist1.png"
                alt="gamelist"
                className={styles.list}
              />
              <h1 className={styles.gamelistmaint}>Lost in the Roots</h1>
              <hr className={styles.gamelisthr} />
              <p className={styles.gamelistt}>
                A 2D psychological thriller about guilt, fear, and escape. A
                little girl wakes up in a strange attic, but something lurks in
                the shadows. Full description below
              </p>
              <a
                href="https://store.steampowered.com/app/2872240/Lost_in_the_Roots/?curator_clanid=39433050"
                target="_blank"
                className={styles.gamelistbtn}
              >
                Check on Steam
              </a>
            </div>
            <div className={styles.gamelist}>
              <img
                src="/gameslist2.png"
                alt="gamelist"
                className={styles.list}
              />
              <h1 className={styles.gamelistmaint}>Violent Horror Stories 2</h1>
              <hr className={styles.gamelisthr} />
              <p className={styles.gamelistt}>
                A new collection of games from the creators of the short horrors
                *Violent Horror Stories*. More new stories gathered in one
                anthology, all united by a single theme — “locked in.”
              </p>
              <a
                href="https://store.steampowered.com/app/2872240/Lost_in_the_Roots/?curator_clanid=39433050"
                target="_blank"
                className={styles.gamelistbtn}
              >
                Check on Steam
              </a>
            </div>
            <div className={styles.gamelist}>
              <img
                src="/gameslist3.png"
                alt="gamelist"
                className={styles.list}
              />
              <h1 className={styles.gamelistmaint}>
                Violent Horror Stories: anthology
              </h1>
              <hr className={styles.gamelisthr} />
              <p className={styles.gamelistt}>
                4 short horror games from different creators and in different
                genres. Each game is an original take on the theme of “pursuit.”
              </p>
              <a
                href="https://store.steampowered.com/app/3080380/Violent_Horror_Stories_anthology/?curator_clanid=39433050"
                target="_blank"
                className={styles.gamelistbtn}
              >
                Check on Steam
              </a>
            </div>
          </div>
          <div className={styles.imp_cont}>
            <h1 className={styles.imp_text}>!READ!</h1>
            <p className={styles.imp_maintext}>
              This website was created solely as a portfolio project, a fan-made
              site for the game No, I’m Not a Human. If you are the developer of
              this studio, please contact me on DeviantArt using the button
              below, and I will remove this site at your request!
            </p>
            <a
              href="https://www.deviantart.com/amnessiiaa"
              target="_blank"
              className={styles.impt_btn}
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
