/** @format */
import Link from "next/link";
export default function Footer(props) {
  return (
    <footer className="mt-4 lg:mt-24">
      <div className="text-right relative -top-4 -left-4">
        <Link href="#pageTop">
          <a className="">
            <span className="material-icons text-u_c_1 text-xl p-1   rounded-full bg-u_c_2 text-u_c_5">
              arrow_upward
            </span>
          </a>
        </Link>
      </div>
      <div className="pt-4 pb-2 flex justify-center items-center flex-wrap flex-col lg:flex-row ">
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
        copyright 2021~2022 usuyuki
      </p>
    </footer>
  );
}
