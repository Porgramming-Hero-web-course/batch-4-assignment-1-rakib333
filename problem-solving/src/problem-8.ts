{
  /*
Problem-8
---------
Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
*/

  interface Key {
    name: string;
    age: number;
    email: string;
  }

  const validateKeys = <T extends object, Q extends keyof T>(
    obj: T,
    keys: Q[]
  ): boolean => {
    // looping through array by for of loop
    for (let key of keys) {
      // console.log(key);
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };

  const person1: Key = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person1, ["name", "age"]));
}
