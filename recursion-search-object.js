

var obj = {
  data1: 21,
  data2: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      },
      morestuff: {
        thing: {
          moreStuff2: {
            magicNumber: 445,
            something: 'foobar'
          }
        }
      },
      evenmore: {
        thing: {
          moreStuff2: {
            magicNumber: [9, 6, 7, 5000],
            something: 'foobar'
          }
        }
      },
    }
  }
}


function contains(obj, query) {
  // if ( === query) {return true}

  var found = false;

  if (!Array.isArray(obj) && obj !== query && typeof obj == 'object') {
    var keysArray = Object.keys(obj);
  }

  // if (!Array.isArray(obj))
  //   var res = false;

  for (let i in keysArray) {
    console.log(obj[keysArray[i]])
    if (obj[keysArray[i]] == query) {
      found = true
      if (found) {
        console.log('FOUND EM!')
        return found
        break
      }
    }
    contains(obj[keysArray[i]], query)
  }
  // contains(obj, query);

}



let hasIt = contains(obj, 44); // true
//let doesntHaveIt = contains(obj, "foo"); // false

console.log(hasIt)
