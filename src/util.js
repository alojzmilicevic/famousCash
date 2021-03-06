const formatter = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
})

export function formatByCurrency(amount) {
  return formatter.format(amount);
}
