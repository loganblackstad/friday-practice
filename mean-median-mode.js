// Warm-up
// Find the mean, median, and mode of the following array:
// [4, 3, 1 , 2 , 2 , 7, 9, 1 4, 2 , 27, 400, 9, 1 , 8 ]
// Mean: Average of all the numbers
// Median: Number at exact middle of sorted array
// Mode: The number that appears the most times

arr1 = [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8];
// Expected Result:
// Mean:  	34.928571428571
// Median:	5.5
// Mode:  	2

function mmm(arr) {
  var n = arr.length;
  var sum = 0;
  var mean = [];
  var median = [];
  var mode = [];
  var arrOfFrequencies = [];

  // ----------------------------
  // finding the mean -- start --
  // handle mean calc
  for (i of arr) {
    sum += i;
  }
  // finding the mean -- end --

  // ----------------------------
  // finding the median -- start --
  arr.sort(function (a, b) {
    return a - b;
  });
  if (n % 2 == 0) {
    median = (arr[n / 2 - 1] + arr[n / 2]) / 2;
  } else {
    median = arr[Math.floor(n / 2)];
  }
  // finding the median -- end --

  // ----------------------------
  // finding the mode -- start --
  for (i1 of arr) {
    var count = 0;
    for (i2 of arr) {
      if (i1 == i2) {
        count += 1;
      }
    }
    arrOfFrequencies.push(count);
  }
  var mostFreq = arrOfFrequencies.indexOf(Math.max(...arrOfFrequencies));
  mode = arr[mostFreq];
  // finding the mode -- end --

  mean = sum / n;

  console.log(`mean:    ${mean}`);
  console.log(`median:  ${median}`);
  console.log(`mode:    ${mode}`);
  console.log(`length:  ${n}`);
}

mmm(arr1);
