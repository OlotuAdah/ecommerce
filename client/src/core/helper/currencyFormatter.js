const currencyFormatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (number) => currencyFormatter.format(number);
