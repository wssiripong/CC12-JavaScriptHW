function myFunc(str) {
  let result = str.split('-').map((item,index) => {
    if(index === 0) {
      return item;
    } else {
      let str2 = item.slice(0,1).toUpperCase()
      let str3 = item.slice(1);
      return str2 + str3;
    }
  })
  return result.join(``)
}

console.log(myFunc('background-color'))