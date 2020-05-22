test0 = [0, 1, 1, 0, 1, 0, 1, 1, 1];
test1 = [1, 0, 1];
test2 = [0, 0, 1, 0, 1, 1, 0, 0, 1, 0];
test3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
test4 = [
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
];

// given an array of 0s and 1s, count the number of "islands of 1s"

function islandsOfOnes(arr) {
  var islands = 0;
  var land = true;
  for (i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i], arr[i + 1], arr[i] == arr[i + 1]);
    if (arr[i] != arr[i + 1] && arr[i] == 1) {
      islands += 1;
      // console.log(islands);
    }
  }
  if (arr[arr.length - 1] == 1) {
    islands += 1;
  }
  console.log(islands);
  return islands;
}

islandsOfOnes(test0);
islandsOfOnes(test1);
islandsOfOnes(test2);
islandsOfOnes(test3);
islandsOfOnes(test4);
