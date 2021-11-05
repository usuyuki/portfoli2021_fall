/** @format */
import Link from "next/link";
export default function WorksCards(props) {
  let counter_for_meta = 0;
  return (
    <div className="flex justify-center flex-wrap">
      {props.content.data.map((value, key) => {
        return (
          <div className="cursor-pointer link-item m-12" key={key}>
            <Link href={"/works/" + value.id}>
              <a>
                <div key={(counter_for_meta += 1)}>
                  <img
                    className="top-image "
                    src={props.image_urls[counter_for_meta]}
                  />
                  <div className="flex justify-center">
                    <p className="my-2 mx-4 text-2xl">
                      {value.attributes.title}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
            <div className="flex justify-center mt-4">
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
          </div>
        );
      })}
    </div>
  );
}
