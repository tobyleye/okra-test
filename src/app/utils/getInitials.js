export function getInitials(string,length) {
  return string
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0,length)
    .join("")
    .toUpperCase();
}
