/** @format */
import Link from "next/link";
import Image from "next/image";
export default function FeatureWorksCards(props) {
  let counter_for_meta = 0;
  return (
    <div className="flex justify-center  flex-wrap flex-col">
      {props.content.data.map((value, key) => {
        return (
          <div
            className="w-4/5 flex justify-center items-center flex-wrap mx-auto  link-item p-4 "
            key={key}
          >
            <div className="md:w-1/5">
              <Link href={"/works/" + value.id}>
                <a key={(counter_for_meta += 1)}>
                  <div className="feature-image cursor-pointer">
                    <Image
                      width={150}
                      height={150}
                      src={props.image_urls_featured[counter_for_meta]}
                    />
                  </div>
                </a>
              </Link>
            </div>

            <div className="md:w-4/5 flex justify-center md:justify-start  flex-row flex-wrap items-center">
              <Link href={"/works/" + value.id}>
                <a>
                  <h4 className="my-2 px-4 text-2xl break-all">
                    {value.attributes.title}
                  </h4>
                </a>
              </Link>
              <div className="flex justify-center ">
                <p className="genre-tag">
                  <Link
                    href={
                      "/works/genre/" +
                      value.relationships.field_works_genre.data[0].id
                    }
                  >
                    <a>
                      {
                        props.genre_names[
                          value.relationships.field_works_genre.data[0].id
                        ]
                      }
                    </a>
                  </Link>
                </p>
              </div>
              <div
                className="p-4 w-full"
                dangerouslySetInnerHTML={{
                  __html: value.attributes.body.value,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
