const quickRefactor = require('./src/apiUtils');

let data = [
    {
      id: 1,
      name: 'Alice',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      }
    },
    {
      id: 2,
      name: 'Bob',
      age: 25,
      address: {
        street: '456 Maple Ave',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      }
    },
    // ...
  ];

  const userData = quickRefactor.flattenArr(data, 'name')
  
  console.log(userData, 'userData');