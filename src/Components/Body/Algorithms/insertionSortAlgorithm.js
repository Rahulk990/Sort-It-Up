export default function getInsertionSortAnimations(array) {
  const animations = [];
  InsertionSortHelper(array, animations);
  return animations;
}

function InsertionSortHelper(arr, animations) {
  var i, key, j;
  var n = arr.length;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

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
