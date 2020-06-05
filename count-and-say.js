test1 = 1122112;

function countAndSay(int) {
  let str = int.toString();
  let english = "";
  let numberEnglish = "";
  let unique = str[0];
  let countArr = [1];
  var count = 1;
  for (i = 1; i < str.length; i++) {
    var last = unique[unique.length - 1];
    if (str[i] != last) {
      unique += str[i];
      countArr.push(count);
      console.log("1", unique, countArr);
    } else {
      for (q = i; q < str.length; q++) {
        if (str[q] == last) {
          count += 1;
        } else {
          countArr.push(count);
          break;
        }
      }
    }
    console.log(
      `
      unique: ${unique}
      count: ${count}
      countArr: ${countArr}
      `
    );
  }
  console.log(unique);
  return unique;
}

countAndSay(test1);
