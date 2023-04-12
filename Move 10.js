/*
DESCRIPTION:
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

function moveTen(s) {
  const str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const arr = s.split("").map(v => (v = str.indexOf(v) + 10));
  return arr.map(v => (v = str[v])).join("");
}

/*
function moveTen(s){
  return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                                ? String.fromCharCode(e.charCodeAt(0) - 16) 
                                : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}
*/
