function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 0) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i + 1} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n !== 0) {
    console.log(n);
    n--;
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}

// Provided
function maybeTrue() {
  return Math.random() >= 0.5
}
