function calculateTotal(items) {
  // Seeded bug: ignores quantity, sums unit price only once per line item.
  return items.reduce((sum, item) => sum + item.price, 0);
}

module.exports = { calculateTotal };
