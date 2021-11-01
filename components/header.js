/** @format */
import Link from "next/link";
export default function Header(props) {
  return (
    <header>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/works">
        <a>Works</a>
      </Link>
      <Link href="/works/web">
        <a>web</a>
      </Link>
      <Link href="/works/video">
        <a>video</a>
      </Link>
      <Link href="/works/microcomputer">
        <a>マイコン</a>
      </Link>
      <Link href="/links">
        <a>Links</a>
      </Link>
    </header>
  );
}
