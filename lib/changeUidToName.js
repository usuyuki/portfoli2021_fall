/** @format */

/**
 *
 * drupal apiでのuidを名前に変換する(タイトルなどで使用、api叩く数を減らす代替手段として)
 */
export default function changeUidToName(uid, genreName) {
  let name = "";
  switch (uid) {
    case "91dafdb4-e3b7-4993-960a-b388eec2185e":
      name = "web";
      break;
    case "e9fc047c-4c12-4ce0-a2a2-45d6d900153a":
      name = "映像制作";
      break;
    case "e96bb5b5-a9a5-457a-a45b-cfcfd0840ab0":
      name = "マイコン";
      break;
    case "fd03eba0-46e3-4534-8e9e-0207e35ed6a7":
      name = "その他";
      break;
    case "46f26c7d-9b0f-46af-9a44-9343721a74de":
      name = "イベント";
      break;
    case "d79dd12d-3e3d-44ba-b3c6-648a037e2839":
      name = "インターン最終発表";
      break;
    case "4449ee7f-a599-4d50-a8be-809619b11e77":
      name = "デザイン";
      break;
    case "022d85c6-0a96-4fec-9637-26cbf436db16":
      name = "ワールド制作";
      break;
    default:
      name = "genres";
      break;
  }
  return genreName + "/" + name;
}
