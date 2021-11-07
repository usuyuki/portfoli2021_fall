/** @format */
import Link from "next/link";
export default function Footer(props) {
  return (
    <footer className="mt-4 md:mt-24">
      <div className="pt-4 pb-2 flex justify-center items-center flex-wrap flex-col md:flex-row ">
        <p className="mx-6 my-2">
          <Link href="/credit">
            <a>credit</a>
          </Link>
        </p>
        <p className="mx-6 my-2">
          <Link href="/aboutThisSite">
            <a>aboutThisSite</a>
          </Link>
        </p>
      </div>
      <p className="text-center pt-2 pb-6 text-sm text-u_c_5">
        copyright 2021 usuyuki
      </p>
    </footer>
  );
}
