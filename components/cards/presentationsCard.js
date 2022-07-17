/** @format */
import Link from "next/link";
import Image from "next/image";
export default function PresentationsCard(props) {
  let counter_for_meta = 0;
  return (
    <div className="flex justify-center flex-wrap">
      {props.content.data.map((value, key) => {
        return (
          <div
            className="cursor-pointer link-item p-4 w-full md:w-1/3 lg:w-1/5"
            key={key}
          >
            <Link href={"/presentations/" + value.id}>
              <a>
                <div key={(counter_for_meta += 1)}>
                  <div className="archive-thumbnail">
                    <Image
                      width={150}
                      height={150}
                      src={props.image_urls[counter_for_meta]}
                    />
                  </div>
                  <div className="flex justify-center">
                    <h4 className="my-2 px-4 text-2xl break-all">
                      {value.attributes.title}
                    </h4>
                  </div>
                </div>
              </a>
            </Link>
            <div className="flex justify-center mt-4">
              <p className="genre-tag">
                <Link
                  href={
                    "/presentations/genre/" +
                    value.relationships.field_presentation_genre.data.id
                  }
                >
                  <a>
                    {
                      props.genre_names[
                        value.relationships.field_presentation_genre.data.id
                      ]
                    }
                  </a>
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
