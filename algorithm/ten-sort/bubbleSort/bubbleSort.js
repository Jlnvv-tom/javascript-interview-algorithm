
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {

    for (let j = 0; j < len - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }

  }
  return arr
}

// test 


let arr = [12, 56, 90, 86, 2, 6, 8, 100]
console.log(bubbleSort(arr));