// void insertionSort(int arr[], int n)
// {
//     int i, key, j;
//     for (i = 1; i < n; i++)
//     {
//         key = arr[i];
//         j = i - 1;

//         /* Move elements of arr[0..i-1], that are
//         greater than key, to one position ahead
//         of their current position */
//         while (j >= 0 && arr[j] > key)
//         {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  InsertionSortHelper(array, animations);
  return animations;
}

function InsertionSortHelper(arr, animations) {
  var i, key, j;
  var n = arr.length;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
    animations.push([i, j]);
    animations.push([i, j]);
    while (j >= 0 && arr[j] > key) {
      animations.push([j + 1, arr[j], j + 1, arr[j]]);
      arr[j + 1] = arr[j];
      j = j - 1;
      if (j >= 0) {
        animations.push([i, j]);
        animations.push([i, j]);
      }
    }
    animations.push([j + 1, key, j + 1, key]);
    arr[j + 1] = key;
  }
}
