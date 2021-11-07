/** @format */

export default function CreditFrame(props) {
  return (
    <div className="flex justify-center flex-col mt-2 mb-16 mx-4">
      <h4 className="text-center text-2xl font-bold">{props.title}</h4>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.productLink}
        className="text-center"
      >
        <p>{props.productLink}</p>
      </a>
      <p className="text-center text-lg mt-2 mb-6">{props.description}</p>

      {props.copyright == "" ? (
        ""
      ) : (
        <p className="p text-center text-xs">{props.copyright}</p>
      )}

      <p className="text-center px-4 mt-2">
        License
        <span className="border-2 border-u_c_2 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.licenseLink}
            className="text-center"
          >
            {props.license}
          </a>
        </span>
        {props.license == "GNU General Public License v2.0" ? (
          <p className="text-center text-xs mt-2 ">
            ※GNUライセンスですが、今回の使用用途としてはライセンス違反に抵触しません。
          </p>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
