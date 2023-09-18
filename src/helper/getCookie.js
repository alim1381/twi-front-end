export function getCookie() {
  const object = {};
  const arry = document.cookie.split("; ");
  if (arry.length > 1) {
    arry.map((cookie) => {
      const keyArray = cookie.split("=");
      if (["token", "refreshToken" ,"username", "name", "avatar" ,"id"].includes(keyArray[0])) {
        object[keyArray[0]] = keyArray[1];
      }
    });
    if (object.token) {
      return object;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
