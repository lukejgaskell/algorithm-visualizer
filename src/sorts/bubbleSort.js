import { timer, waitForInteraction } from "../utils"
import { shuffleArray } from "../utils"

export default async function bblSort(inputArr, setArr) {
  let arr = Array.from(inputArr)
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        setArr([...arr])
        await timer(100)
      }
    }
  }
}

export function getBblSortData() {
  return {
    array: shuffleArray(Array.from(Array(50).keys())),
    i: 0,
    j: 0,
  }
}

export function getBblSortInfo() {
  return {
    title: "Bubble Sort Algorithm",
    description:
      "Bubble sort is a basic algorithm for arranging a list of numbers or other elements in the correct order. The method works by examining each set of adjacent elements in the list, from left to right, switching their positions if they are out of order.",
    dataInfo: {
      array: {
        type: "array",
        description: "Used to make comparisons and to store the final ouput",
      },
      i: {
        type: "integer",
        description:
          "The outer for loop value. Dont swap the last i items of the array. For each iteration of i, the array is sorted right to left (array.length - i => array.length).",
      },
      j: {
        type: "integer",
        description:
          "The inner for loop value. Compare every value of j with the array item at index j + 1 and swap if the value at j is greater than the value at j + 1.",
      },
    },
  }
}

export async function bblSortV2(data, setData, interactiveMode = false) {
  let arr = Array.from(data.array)
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        setData({ i, j, array: arr })
        await timer(100)
        if (interactiveMode) {
          await waitForInteraction()
        }
      }
    }
  }
}
