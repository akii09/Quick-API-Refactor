// Function to extract a specific property from an object
function objProp(obj, prop) {
  return obj[prop];
}

// Function to extract an array of specific properties from an array of objects
function arrProp(arr, prop) {
  return arr.map((obj) => obj[prop]);
}

// Function to create a new object with selected properties from the original object
function objBy(obj, props) {
  return props.reduce((newObj, prop) => {
    newObj[prop] = obj[prop];
    return newObj;
  }, {});
}

// Function to create a new array of objects with selected properties from the original array of objects
function arrBy(arr, props) {
  return arr.map((obj) => selectProperties(obj, props));
}

// Function to flatten an array of objects into an array of values for a specific property
function flattenArr(arr, prop) {
  return arr.map((obj) => obj[prop]);
}

//   Function to filter data by condition
function filterData(data, condition) {
  return data.filter((item) => item.someProperty === condition);
}

//   Function to sort data by condition
function sortData(data, sortBy) {
  return data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });
}

// Export the utility functions for use in other modules
module.exports = {
  objProp,
  arrProp,
  objBy,
  arrBy,
  flattenArr,
  filterData,
};
