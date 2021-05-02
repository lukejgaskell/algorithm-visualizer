import { timer } from "../utils"

export default async function countingSort(list, setData) {
  const min = Math.min(...list)
  const max = Math.max(...list)
  let i
  let z = 0
  const count = []

  for (i = min; i <= max; i++) {
    count[i] = 0
  }

  for (i = 0; i < list.length; i++) {
    count[list[i]]++
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      list[z++] = i
      setData([...list])
      await timer(100)
    }
  }
  return list
}
