/** @format */
/**
 * 
 * import removeHTMLTag from "../../lib/removeHTMLTag";
 * 
        <p>{removeHTMLTag(data.data.attributes.body.value)} </p>
 */
export default function removeHTMLTag(value) {
  return value
    .replace("</p>", "\n")
    .replace("<br />", "\n")
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
    .replace("&nbsp;", " ");
}
