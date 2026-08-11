export function randomNumberPromise() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (number > 5) {
        resolve(number);
      } else {
        reject(new Error("Error"));
      }
    }, 500);
  });
}
