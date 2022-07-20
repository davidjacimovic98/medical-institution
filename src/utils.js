export function getCurrentDateAndTime() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const mins = newDate.getMinutes();

  return { date, month, year, hours, mins };
}
