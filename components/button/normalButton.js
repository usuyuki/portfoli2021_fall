/** @format */
import Link from "next/link";
export default function NormalButton(props) {
  return (
    <div className="text-center mt-8">
      <Link
        className="inline-block m-4 p-4 text-center rounded-xl bg-u_c_2 text-usuyuki_black text-xl link-button"
        href={props.href}
      >
        {props.title}
      </Link>
    </div>
  );
}
