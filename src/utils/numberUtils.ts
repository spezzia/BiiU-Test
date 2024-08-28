export function TransformNumberToPriceFormat(amount: number) {
  if (isNaN(amount)) {
    return '$0.00'
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
