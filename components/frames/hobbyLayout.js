/** @format */

export default function HobbyLayout(props) {
  return (
    <div className="flex  flex-wrap justify-center p-2  mx-4 ">
      {props.content.map((value, key) => {
        return (
          <div
            className="border-u_c_5 border-4 p-4 rounded-xl m-4 shadow-md xl:w-1/3"
            key={key}
          >
            <h3 className="font-semibold text-3xl text-center mb-1">
              {value[0]}
            </h3>
            <p className="mx-4 mb-1 text-center">好き度:{value[1]}</p>
            <div
              className="mt-4 px-4 mb-2 h-auto mx-auto break-all"
              dangerouslySetInnerHTML={{
                __html: value[2],
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
