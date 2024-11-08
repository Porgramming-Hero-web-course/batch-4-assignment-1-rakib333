{
  /*
  Problem-6
  ----------
  Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
  
  */

  // Declaring interface type
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // Partial type --> partial make every property optional like (name?: string)
  type ProfilePartial = Partial<Profile>;

  const updateProfile = (
    mainProfile: Profile,
    updated: ProfilePartial
  ): Profile => {
    return {
      ...mainProfile,
      ...updated,
    };
  };

  // input
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  // console.log(updateProfile(myProfile, { age: 60 }));
  // console.log(updateProfile(myProfile, { name: "Rakib" }));
  console.log(
    updateProfile(myProfile, {
      email: "rakib@email.com",
      age: 60,
      name: "Rakib",
    })
  );
  // output --> { name: 'Rakib', age: 60, email: 'rakib@email.com' }
}
