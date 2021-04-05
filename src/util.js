const formatter = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
})

export function format(amount) {
  return formatter.format(amount);
}
