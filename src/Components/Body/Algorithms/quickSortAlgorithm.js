// int partition (int arr[], int low, int high)
// {
//     int pivot = arr[high]; // pivot
//     int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far

//     for (int j = low; j <= high - 1; j++)
//     {
//         // If current element is smaller than the pivot
//         if (arr[j] < pivot)
//         {
//             i++; // increment index of smaller element
//             swap(&arr[i], &arr[j]);
//         }
//     }
//     swap(&arr[i + 1], &arr[high]);
//     return (i + 1);
// }

// /* The main function that implements QuickSort
// arr[] --> Array to be sorted,
// low --> Starting index,
// high --> Ending index */
// void quickSort(int arr[], int low, int high)
// {
//     if (low < high)
//     {
//         /* pi is partitioning index, arr[p] is now
//         at right place */
//         int pi = partition(arr, low, high);

//         // Separately sort elements before
//         // partition and after partition
//         quickSort(arr, low, pi - 1);
//         quickSort(arr, pi + 1, high);
//     }
// }

export function getQuickSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return animations;
  quickSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    /* pi is partitioning index, arr[p] is now
        at right place */

    var pi = partition(arr, low, high, animations);

    // Separately sort elements before
    // partition and after partition
    quickSortHelper(arr, low, pi - 1, animations);
    quickSortHelper(arr, pi + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  var pivot = arr[high]; // pivot
  var i = low - 1; // Index of smaller element and indicates the right position of pivot found so far
  var temp;

  for (var j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot
    animations.push([j, high]);
    animations.push([j, high]);

    if (arr[j] < pivot) {
      i++; // increment index of smaller element
      animations.push([i, arr[j], j, arr[i]]);
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  animations.push([i + 1, arr[high], high, arr[i + 1]]);
  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}
