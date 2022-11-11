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
        <nav className="flex flex-col text-xl mt-4 ">
          <Link className="my-2" href="/">
            Home
          </Link>
          <Link className="my-2" href="/profile">
            Profile
          </Link>
          <div className="flex flex-col text-lg ml-4">
            <Link href="/profile#info">情報</Link>
            <Link href="/profile#like">好み</Link>
            <Link href="/profile#history">経歴</Link>
            <Link href="/profile#tech">技術</Link>
            <Link href="/profile#hobby">趣味</Link>
          </div>
          <Link className="my-2" href="/works">
            Works
          </Link>
          <div className="flex flex-col text-lg ml-4">
            <Link href="/works/genre/91dafdb4-e3b7-4993-960a-b388eec2185e">
              web
            </Link>
            <Link href="/works/genre/e9fc047c-4c12-4ce0-a2a2-45d6d900153a">
              映像制作
            </Link>
            <Link href="/works/genre/e96bb5b5-a9a5-457a-a45b-cfcfd0840ab0">
              マイコン
            </Link>
          </div>
          <Link className="my-2" href="/blogs">
            Blogs
          </Link>
          <Link className="my-2" href="/presentations">
            Slides
          </Link>
          <Link className="my-2" href="/links">
            Links
          </Link>
        </nav>
      </div>
    </div>
  );
}
