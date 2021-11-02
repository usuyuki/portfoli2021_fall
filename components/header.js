/** @format */
import Link from "next/link";
export default function Header(props) {
  return (
    <header className="flex justify-center items-center">
      <p>{props.pageTitle}</p>
    </header>
  );
}
