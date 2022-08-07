function truncate(str, length) {
  if (str.length > length) {
    let modifyStr = str.slice(0, length) + "..."
    return modifyStr;
  } else {
    return str;
  }
}
