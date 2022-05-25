
function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i

    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }

  }
  return arr
}

// test 


let arr = [12, 56, 90, 86, 2, 6, 8, 100]
console.log(selectionSort(arr));