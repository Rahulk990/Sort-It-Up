export default function getQuickSortAnimations(arr) {
  const animations = [];
  quickSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    var pi = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pi - 1, animations);
    quickSortHelper(arr, pi + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  var pivot = arr[high];
  var i = low - 1;
  var temp;

  for (var j = low; j <= high - 1; j++) {
    animations.push([j, high]);
    animations.push([j, high]);

    if (arr[j] < pivot) {
      i++;
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
