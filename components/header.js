/** @format */
import Link from "next/link";
export default function Header(props) {
  return (
    <div>
      <header className="flex justify-center items-center">
        <p>{props.pageTitle}</p>
      </header>
    </div>
  );
}
