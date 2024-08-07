export function extractTime(dateString) {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("en-GB", {
    hour12: true,
    timeStyle: "short",
  });

  return time.toUpperCase();
}
