/**
 * Sorts an array using quick sort
 */
function quickSort(originalArray: number[]): number[] {
  const array = [...originalArray];
  partition(array, 0, array.length);
  return array;
}

/**
 * Partitions the [startOfArray, before) index of the array
 */
function partition(array: number[], startOfArray: number, indexDirectlyBeforePartition: number): void {
  const length = indexDirectlyBeforePartition - startOfArray;

  /** Terminate the recursion */
  if (length <= 1) return;

  /** Randomly select a pivot and move it to the head of the array */
  const pivotIndex = startOfArray + Math.floor(Math.random() * length);
  [array[startOfArray], array[pivotIndex]] = [array[pivotIndex], array[startOfArray]];

  /** The first element is our pivot */
  const pivot = array[startOfArray];
  let pivotRank = startOfArray;

  /** Loop through all the elements, partitioning around the pivot */
  for (let index = startOfArray + 1; index < indexDirectlyBeforePartition; index++) {
    if (array[index] < pivot) {
      pivotRank++;
      [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
    }
  }

  /** Finally put the pivot at its rightfull place */
  if (pivotRank !== startOfArray) {
    [array[pivotRank], array[startOfArray]] = [array[startOfArray], array[pivotRank]];
  }

  /** Partition all the elements less than the pivot */
  partition(array, startOfArray, pivotRank);

  /** Partition all the elements more than the pivot */
  partition(array, pivotRank + 1, indexDirectlyBeforePartition);
}

const unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(quickSort(unsortedArray));
