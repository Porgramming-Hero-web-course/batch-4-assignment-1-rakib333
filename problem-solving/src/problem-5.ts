{
  /*
  problem-5
  -----------
  Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  */

  //declaring Property by interface
  interface Property {
    name: string;
    age: number;
  }

  // get property by using keyof
  const getProperty = <X, Y extends keyof X>(obj: X, property: Y): X[Y] => {
    // return the expected value
    return obj[property];
  };

  const person: Property = { name: "rakib", age: 50 };
  console.log(getProperty(person, "name"));

  //
}
