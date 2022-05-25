
// function insertionSort(arr) {
//   let len = arr.length;
//   for (let i = 1; i < len; i++) {
//     let position = i, temp_value = arr[position];

//     for (let j = i; j > 0; j--) {
//       if (arr[position - 1] > temp_value) {
//         [arr[position - 1], arr[position]] = [arr[position], arr[position - 1]]
//         position--
//       }
//     }
//     arr[position] = temp_value

//   }
//   return arr
// }


function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let position = i, temp_value = arr[position];

    while (position > 0 && arr[position - 1] > temp_value) {
      [arr[position - 1], arr[position]] = [arr[position], arr[position - 1]]
      position--
    }
    arr[position] = temp_value
  }
  return arr
}

// test 


let arr = [12, 56, 90, 86, 2, 6, 8, 100]
console.log(insertionSort(arr));