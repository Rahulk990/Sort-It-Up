// void selectionSort(int arr[], int n)
// {
//     int i, j, min_idx;

//     // One by one move boundary of unsorted subarray
//     for (i = 0; i < n-1; i++)
//     {
//         // Find the minimum element in unsorted array
//         min_idx = i;
//         for (j = i+1; j < n; j++)
//         if (arr[j] < arr[min_idx])
//             min_idx = j;

//         // Swap the found minimum element with the first element
//         swap(&arr[min_idx], &arr[i]);
//     }
// }

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  selectionSortHelper(array, animations);
  return animations;
}

function selectionSortHelper(arr, animations) {
  var i, j, min_idx;
  var n = arr.length;
  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      animations.push([j, min_idx]);
      animations.push([j, min_idx]);
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    animations.push([i, arr[min_idx], min_idx, arr[i]]);

    // Swap the found minimum element with the first element
    var temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
}
