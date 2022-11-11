/** @format */
import Link from "next/link";
export default function WorksTechs(props) {
  return (
    <div className="mx-4 lg:mx-8  flex flex-col items-center justify-center">
      <div className="">
        {Object.keys(props.tech_names).map((key) => {
          return (
            <Link className="block" href={`/works/tech/${key}`} key={key}>
              <p className="lg:mx-4 mb-6 text-xl text-u_c_1 ">
                <span className="material-icons">local_offer</span>
                {props.tech_names[key]}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
