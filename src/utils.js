export const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export function shuffleArray(array) {
  let newArray = Array.from(array);
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
}
