import { timer } from "../utils";

export default async function insertionSort(inputArr, setArr) {
  let arr = Array.from(inputArr);
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
      setArr([...arr]);
      await timer(100);
    }
    arr[j + 1] = current;
  }
}
