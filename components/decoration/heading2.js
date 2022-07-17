/** @format */

export default function Heading2(props) {
  return (
    <div className="flex justify-center items-center mx-2 my-2">
      <style jsx>{`
        .heading-bar {
          background-color: var(--u_c_5);
          width: 80%;
          height: 2px;
        }
      `}</style>
      <h3 className="mt-10 mb-2 text-3xl">
        <span className="material-icons">{props.icon}</span>
        {props.title}
      </h3>
    </div>
  );
}
