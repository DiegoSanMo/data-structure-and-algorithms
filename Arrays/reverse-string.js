// Brute force
function reverse(string) {
  let auxArr = string.split('');
  auxArr.reverse();
  let reverseStr = auxArr.toString().replace(/,/g, '');
  return reverseStr;
};

//Optimization of the brute force
const reverseO = string => string.split('').reverse().join('');

//Optimization of the brute force (another option)
const reverseO2 = string => [...string].reverse().join('');

// Function without JS functions
function reverseWf(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Opps, something is not bad'
  }
  let newString = [];
  let totalItems = str.length - 1;
  for (i = totalItems; i >= 0; i--) {
    newString.push(str[i]);
  }
  console.log('newString: ', newString);
  return newString.join('');
}

console.log(reverseO2('Diego is learning'));