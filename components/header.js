/** @format */
import Link from "next/link";
export default function Header(props) {
  return (
    <div>
      <header className="flex justify-center mask-bg flex-wrap">
        <p className="delay-time04 flex justify-center items-center">
          {props.pageTitle}
        </p>
        <div></div>
      </header>
    </div>
  );
}
