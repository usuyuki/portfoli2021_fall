/** @format */

export default function Heading1(props) {
  return (
    <div className="text-center">
      <style jsx>{`
        .heading-bar {
          background-color: var(--u_c_5);
          width: 80%;
          height: 2px;
        }
      `}</style>
      <div className="flex my-12 mx-2 md:mx-20 items-center ">
        <h3 className="transform -rotate-45 text-3xl">{props.title}</h3>
        <div className="heading-bar"></div>
      </div>
    </div>
  );
}
