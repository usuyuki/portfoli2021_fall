/** @format */
import Link from "next/link";
export default function WorksCards(props) {
  let counter_for_meta = 0;
  return (
    <div className="flex justify-center flex-wrap">
      {props.content.data.map((value, key) => {
        return (
          <Link href={"/works/" + value.id} key={key}>
            <a>
              <div
                className="cursor-pointer link-item m-12"
                key={(counter_for_meta += 1)}
              >
                <img
                  className="top-image "
                  src={props.image_urls[counter_for_meta]}
                />
                <p> {value.attributes.title}</p>
                <p className="genre-tag">
                  {
                    props.genre_names[
                      value.relationships.field_works_genre.data[0].id
                    ]
                  }
                </p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
