// Create a function that takes two or more arrays and returns an array of their symmetric difference.
// The returned array must contain only unique values (no duplicates).

// Create a empty array (using reduce method and the empty array is acc) to add unique numbers.
function sym(...args) {
  return [
    ...args.reduce((acc, cur) => {
      // Make current array into a Set to eliminate duplicated values.
      const compare = new Set(cur);

      for (let val of compare) {
        // Delete a value stored in acc if it has match.
        if (acc.has(val)) {
          acc.delete(val);
          // Add a value to acc if there's no matchng value.
        } else {
          acc.add(val);
        }
      }
      return acc;
    }, new Set()),
  ];
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
