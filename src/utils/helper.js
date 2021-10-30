export const filterPrices = [
  {
    start: 0,
    end: 80,
  },
  {
    start: 80,
    end: 200,
  },
  {
    start: 200,
    end: 500,
  },
  {
    start: 500,
    end: 1000,
  },
  {
    start: 1000,
    end: 99999,
  },
];

export const formatAddress = (string) => {
  const index = string.indexOf("/");
  return string.slice(index + 1);
};
