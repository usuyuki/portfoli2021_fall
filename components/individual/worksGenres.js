/** @format */
import Link from "next/link";
export default function WorksGenres(props) {
  let shifter = -50;
  return (
    <div className="mx-4 md:mx-8 my-4 inline-block">
      {/* ひし形によるまるみある三角形 */}
      <style jsx>{`
        .genre-wrapper {
          background-color: var(--u_c_4);
          display: flex;
          align-items: center;
          padding: 0.5em 1em;
          margin: 1em 10px;
        }
        .genre-wrapper p {
          font-size: 1.4em;
        }
        .genre-wrapper svg {
          padding-right: 1em;
        }

        .genre-wrapper:hover {
          color: initial;
        }
      `}</style>
      <p className="text-center my-2">Genre</p>
      {Object.keys(props.genre_names).map((key) => {
        shifter += 50;
        return (
          <Link href={`/works/genre/${key}`} key={key}>
            <a>
              <div
                className="genre-wrapper"
                style={{ marginLeft: shifter + "px" }}
              >
                <svg
                  width="40"
                  height="45"
                  viewBox="0 0 32 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.6414 14.5283C32.1628 16.9075 32.1628 22.0925 28.6414 24.4717L10.109 36.9926C6.12421 39.6848 0.75 36.8299 0.75 32.0209L0.75 6.9791C0.75 2.17013 6.12421 -0.684762 10.109 2.00743L28.6414 14.5283Z"
                    fill="#F2EE93"
                  />
                </svg>

                <p>{props.genre_names[key]}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
