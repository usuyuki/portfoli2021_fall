/** @format */

export default function AboutMeFrame(props) {
  return (
    <div className=" flex justify-center my-12 ">
      <div className="lg:w-1/2 flex justify-center items-center flex-col lg:flex-row  mx-8 md:mx-0">
        <div className="lg:w-1/6 text-center lg:text-right lg:mr-6">
          <p className="mx-auto material-icons inline-block">{props.icon}</p>
        </div>
        <div className="lg:w-4/6">{props.children}</div>
        <div className="lg:w-1/6 text-center lg:text-right lg:mr-6"></div>
      </div>
    </div>
  );
}
