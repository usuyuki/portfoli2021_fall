/** @format */
import Link from "next/link";
import styles from "../styles/leftNav.module.css";
export default function LeftNav(props) {
  return (
    <div>
      {/* スマホのためのメニュー開閉 */}

      <input
        type="checkbox"
        id="menu_opener"
        className={styles.nav_button_hidden}
      />
      <label className={styles.nav_button} htmlFor="menu_opener"></label>

      {/* メニュー */}
      <div className={styles.portfolio_menu}>
        <div className={styles.leftNav_line}></div>
        <nav className="flex flex-col text-xl text-u_c_5 mt-4 ">
          <Link href="/">
            <a className="my-2">Home</a>
          </Link>
          <Link href="/profile">
            <a className="my-2">Profile</a>
          </Link>
          <div className="flex flex-col text-lg ml-4">
            <Link href="/profile#info">
              <a className="">情報</a>
            </Link>
            <Link href="/profile#like">
              <a className="">好み</a>
            </Link>
            <Link href="/profile#history">
              <a className="">経歴</a>
            </Link>
            <Link href="/profile#tech">
              <a className="">技術</a>
            </Link>
            <Link href="/profile#hobby">
              <a className="">趣味</a>
            </Link>
          </div>
          <Link href="/works">
            <a className="my-2">Works</a>
          </Link>
          <div className="flex flex-col text-lg ml-4">
            <Link href="/works/genre/91dafdb4-e3b7-4993-960a-b388eec2185e">
              <a className="">web</a>
            </Link>
            <Link href="/works/genre/e9fc047c-4c12-4ce0-a2a2-45d6d900153a">
              <a className="">映像制作</a>
            </Link>
            <Link href="/works/genre/e96bb5b5-a9a5-457a-a45b-cfcfd0840ab0">
              <a className="">マイコン</a>
            </Link>
          </div>
          <Link href="/links">
            <a className="my-2">Links</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
