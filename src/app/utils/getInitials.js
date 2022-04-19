export function getInitials(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}
