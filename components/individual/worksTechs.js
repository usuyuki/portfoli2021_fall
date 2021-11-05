/** @format */
import Link from "next/link";
export default function WorksTechs(props) {
  return (
    <div className="mx-4 md:mx-8  flex flex-col items-center justify-center">
      <div>
        {Object.keys(props.tech_names).map((key) => {
          return (
            <Link href={`/works/tech/${key}`} key={key}>
              <a className="block">
                <p className="mx-4 mb-6 text-xl text-u_c_1 ">
                  <span className="material-icons">sell</span>
                  {props.tech_names[key]}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
