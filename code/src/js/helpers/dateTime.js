// console.log(date("de-DE"));
export function date(timezone) {
  const rawDate = new Date();
  const date = rawDate.toLocaleDateString(timezone);

  return date;
}

// console.log(time("de-DE"));
export function time(timezone) {
  const rawTime = new Date();
  const time = rawTime.toLocaleTimeString(timezone);

  return time;
}
