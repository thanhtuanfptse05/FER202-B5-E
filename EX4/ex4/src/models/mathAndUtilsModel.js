export const numbers = [1, 2, 3, 4];

export const sumNumbers = numbers.reduce((acc, value) => acc + value, 0);
export const productNumbers = numbers.reduce((acc, value) => acc * value, 1);

export const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

export const agesDescending = [...ages].sort((a, b) => b - a);
export const agesSum = ages.reduce((acc, age) => acc + age, 0);

export const sumAllNumbers = (...args) => args.reduce((sum, value) => sum + value, 0);

export const collectArguments = (...args) =>
  args.reduce(
    (result, value) =>
      Array.isArray(value) ? result.concat(value) : result.concat([value]),
    [],
  );

export const createCounter = () => {
  let count = 0;
  return () => count++;
};
export const counter = createCounter();

export const parseQueryParams = (url) => {
  const queryString = url.includes("?") ? url.split("?")[1].split("#")[0] : "";
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
};
