let ageInDays = (year) => {
  let dayCount = 0;
  for (let i = year; i <= 2020; i++) {
    if (i % 100 === 0 && i % 400 === 0) {
      dayCount += 366;
    } else if (i % 4 === 0) {
      dayCount += 366;
    } else {
      dayCount += 365;
    }
  }
  return dayCount;
}

console.log(dayCount);