export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(arr, animations) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (arr[j] < arr[i]) {
        animations.push([i, arr[j], j, arr[j]]);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
