function bubbleSort(array: number[]): number[] {
  array = array.slice();
  while (true) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

const array = [21, 20, 19, 18];

console.log(bubbleSort(array));
