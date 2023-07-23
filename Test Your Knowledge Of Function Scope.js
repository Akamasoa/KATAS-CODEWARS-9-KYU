/*
DESCRIPTION:
Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32
*/

const add = a => b => a + b;

/*
function add(x) {
  return function(y) {
    return x + y
  }
}
*/
