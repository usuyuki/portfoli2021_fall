/** @format */

/**
 *
 * drupal apiでのuidを名前に変換する(タイトルなどで使用、api叩く数を減らす代替手段として)
 */
export default function changeUidToName(uid) {
  let name = "";
  switch (uid) {
    case "91dafdb4-e3b7-4993-960a-b388eec2185e":
      name = "web";
      break;
    case "e9fc047c-4c12-4ce0-a2a2-45d6d900153a":
      name = "video";
      break;
    case "e96bb5b5-a9a5-457a-a45b-cfcfd0840ab0":
      name = "マイコン";
      break;
    case "":
      name = "";
      break;
    case "":
      name = "";
      break;
    case "":
      name = "";
      break;
    case "":
      name = "";
      break;
    case "":
      name = "";
      break;
    default:
      name = "genres";
      break;
  }
  return "works/" + name;
}
