/** @format */
import removeHTMLTag from "../../lib/removeHTMLTag";
export default function TimelineLayout(props) {
  return (
    <div className="container">
      <div className="flex flex-col lg:grid grid-cols-9 mx-auto p-2 text-usuyuki-white">
        {props.content.map((value, key) => {
          return (
            <div className="flex lg:contents " key={key}>
              <div className="col-start-5 col-end-6 mr-10 lg:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-u_c_1 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-u_c_2 shadow"></div>
              </div>
              <div className="bg-u_c_2 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1">{value[0]}</h3>
                <h3 className="font-semibold text-lg mb-1">{value[1]}</h3>
                <p className="leading-tight text-justify break-all">
                  {removeHTMLTag(value[2])}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
