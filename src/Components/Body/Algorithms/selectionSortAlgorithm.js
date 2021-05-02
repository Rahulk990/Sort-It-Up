export default function getSelectionSortAnimations(array) {
  const animations = [];
  selectionSortHelper(array, animations);
  return animations;
}

function selectionSortHelper(arr, animations) {
  var i, j, min_idx;
  var n = arr.length;

  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      animations.push([j, min_idx]);
      animations.push([j, min_idx]);
      if (arr[j] < arr[min_idx]) min_idx = j;
    }

    animations.push([i, arr[min_idx], min_idx, arr[i]]);
    var temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
}
