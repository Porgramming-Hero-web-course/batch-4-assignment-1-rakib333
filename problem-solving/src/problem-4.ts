{
  /*
  Problem-4
  Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  */

  //we use object input here so we can use interface for type declaring
  interface Circle {
    shape: "circle";
    radius: number;
  }
  interface Rectangle {
    shape: "rectangle";
    height: number;
    width: number;
  }

  const calculateShapeArea = (shape: Circle | Rectangle): string | number => {
    if (shape.shape === "circle") {
      const area: number = parseFloat(
        (Math.PI * shape.radius * shape.radius).toFixed(2)
      );
      return area;
    } else if (shape.shape === "rectangle") {
      const area: number = shape.height * shape.width;
      return area;
    } else {
      return "wrong input";
    }
  };

  const circleArea: number | string = calculateShapeArea({
    shape: "circle",
    radius: 5,
  });
  const rectangleArea: number | string = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);
}
