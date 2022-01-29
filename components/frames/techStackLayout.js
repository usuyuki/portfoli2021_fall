/** @format */

export default function TechStackLayout(props) {
  return (
    <div className="flex  flex-wrap p-2  mx-4 lg:mx-80">
      {props.content.map((value, key) => {
        return (
          <div
            className="bg-u_c_2 p-4 rounded-xl m-4 shadow-md w-80 h-auto"
            key={key}
          >
            <div className="flex flex-row-reverse ">
              <div className="w-4 h-4 rounded-full bg-usuyuki_white shadow-inner"></div>
            </div>
            <h3 className="font-semibold text-3xl text-center mb-1">
              {value[0]}
            </h3>
            <div
              className="w-24 h-auto mx-auto"
              dangerouslySetInnerHTML={{
                __html: value[2],
              }}
            />
            <p className="mx-4 mb-2 mt-4">{value[1]}</p>
          </div>
        );
      })}
    </div>
  );
}
