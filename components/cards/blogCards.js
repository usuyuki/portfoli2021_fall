/** @format */
import Image from "next/image";
export default function BlogCards(props) {
  return (
    <div className="flex justify-center flex-wrap">
      {props.content.map((value, key) => {
        return (
          <div
            className="cursor-pointer link-item p-4 w-full md:w-1/3 lg:w-1/5 "
            key={key}
          >
            <a target="_blank" rel="noopener noreferrer" href={value.link}>
              <div>
                <div className="archive-thumbnail">
                  <Image width={150} height={150} src={value.thumbnail} />
                </div>
                <div className="flex justify-center">
                  <h4 className="my-2 mx-4 text-2xl break-all">
                    {value.title}
                  </h4>
                </div>
                <p className="text-center">
                  {value.date.replace(/T\d{2}:\d{2}:\d{2}/, "")}
                </p>
                {/* <p className="my-2 mx-8 ">{value.content}</p> */}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
