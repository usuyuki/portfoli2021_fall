/** @format */

export default function AboutMeFrame(props) {
  return (
    <div className=" flex justify-center my-12 ">
      <div className="md:w-1/3 flex justify-center items-center flex-col md:flex-row ">
        <div className="md:w-1/6 text-center md:text-right md:mr-6">
          <p className="mx-auto material-icons inline-block">{props.icon}</p>
        </div>
        <div className="md:w-4/6">{props.children}</div>
        <div className="md:w-1/6 text-center md:text-right md:mr-6"></div>
      </div>
    </div>
  );
}
