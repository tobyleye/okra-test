const currency_symbols = {
  ngn: "₦",
  usd: "$",
};
export function formatBalance({ balance, currency }) {
  return [currency_symbols[currency], balance.toLocaleString()]
    .filter(Boolean)
    .join(" ");
}
