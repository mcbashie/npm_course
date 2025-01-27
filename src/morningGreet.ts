const preX = ["X1", "X2"];

export const morningGreet = (name: string) => {
  let greet = "Good morning";
  if (preX.includes(name)) {
    greet = greet+" preX ";
  }
  greet = greet + name;
  return greet;
};
