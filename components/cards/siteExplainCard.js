export default function SiteExplainCard(props) {
  return (
    <a
      target="_blank"
      rel="loosener noreferrer"
      href={props.url}
      className="flex justify-center items-center flex-col mx-4 my-4 bg-u_c_4 rounded-2xl site-explain-card-a md:w-1/3 w-full"
    >
      <h2 className="text-center text-2xl mx-2 mt-2 mb-2">{props.title}</h2>
      <p className="mx-2 mb-4">{props.description}</p>
    </a>
  );
}
