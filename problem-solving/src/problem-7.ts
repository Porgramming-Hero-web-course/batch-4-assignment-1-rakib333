{
  /*
Problem-7
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
*/

  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    // declaring car age method assuming this year
    getCarAge(): number {
      const thisYear: number = new Date().getFullYear();
      // console.log(thisYear);
      return thisYear - this.year;
    }
  }

  // creating the instance of Car object
  const carAge = new Car("Honda", "Civic", 2010);
  const myCarAge: number = carAge.getCarAge();

  //   console.log(
  //     `${myCarAge}  (assuming current year is ${new Date().getFullYear()})`
  //   ); // output --> 14
}
