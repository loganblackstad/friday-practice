

function countDownToOne(num) {
  console.log(num);
  if (num > 1) {
    countDownToOne(num - 1);
  }
}

countDownToOne(50)
