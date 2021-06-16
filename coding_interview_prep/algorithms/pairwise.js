function pairwise(arr, arg) {
  let result = 0;
  const arrIndexArray = new Set();

  arr.forEach((item, index) => {
    // Running the loop with 1st value fixed. eg: [1, 2] , [1, 20], [1, 23]
    for (let i = index + 1; i < arr.length; i++) {
      // If the current value and the next value are the same, only add current index (which is smaller than the next index) and break out of the loop and move on to the next index to prevent using the same number as fixed value.
      if (arr[index] === arr[i]) {
        console.log(`only index ${index}:${arr[index]} ::: ${i}:${arr[i]}`);
        arrIndexArray.add(index);
        break;
      } else if (arr[index] + arr[i] === arg) {
        // If the sum of current value and next value is equal to arg, and the current value and next value are different, add both current index and next index. Then, break out of the loop since it found the value that adds up to arg with lowest index among the array.
        console.log(`both index ${index}:${arr[index]} ::: ${i}:${arr[i]}`);
        arrIndexArray.add(index);
        arrIndexArray.add(i);
        break;
      }
    }
  }, []);
  arrIndexArray.forEach((val) => (result = result + val));
  console.log("arrIndexArray:", arrIndexArray);
  console.log("result:", result);
  return result;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
