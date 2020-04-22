//Data: 
// First array [0,3,4,31]
// Second array [4,6,30]

//Result [0, 3, 4, 6, 30, 31]


//Brute force
function mergeSortedArrays(arr1, arr2) {
  const mergeArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let index = 1;
  let index2= 1;

  // Validating the inputs

  if(array1Item.length === 0) return arr1;
  if(array2Item.length === 0) return arr2;

  while(array1Item || array2Item){
    
    if(!array2Item || array1Item < array2Item || !array1Item ){
      mergeArray.push(array1Item);
      array1Item = arr1[index];
      index++;
    } else{
      mergeArray.push(array2Item);
      array2Item = arr2[index2];
      index2++;
    }
  }
  console.log('mergeArray: ', mergeArray);
  return mergeArray;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
