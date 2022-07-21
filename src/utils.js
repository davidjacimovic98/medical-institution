export function getCurrentDateAndTime() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const mins = newDate.getMinutes();

  return { date, month, year, hours, mins };
}

export function setDateTime(day, month, year, hours, mins) {
  return new Date(year, month, day, hours, mins);
}

export function formatDateTime(dateTime) {
  return dateTime.toLocaleString("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  });
}
