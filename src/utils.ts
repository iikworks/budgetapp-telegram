export function formatCurrency(amount: number, currency: string) {
  const formatter = new Intl.NumberFormat('en-US', {
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
