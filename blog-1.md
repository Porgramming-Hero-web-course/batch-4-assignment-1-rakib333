### The significance of union and intersection types in Typescript.

## Union

---

Union type (|) refers to the value whare one is correct or another is correct. It is very much useful for many times of coding. It works like javascript OR(||) operator. Union type take several value in one variable type. It gives very good fexibility when we write code. It is used when value is more than one type. We can also use union type in string literal. so It is very mush powerful in Typescript coding for logic building. Here are some example :-
//

```union types

   type FrontendDeveloper = "fakibuzDeveloper" | "juniorDeveloper";
   type FullstackDeveloper = "FrontendDeveloper" | "expertDeveloper";

   const newEmployee: FrontendDeveloper = "juniorDeveloper";
   const anotherNewEmployee: FullstackDeveloper = "expertDeveloper";

  type User = {
    id: number;
    roll?: number; // optional
    age: number;
    bloodGroup: "O+"; // object literal
    gender: "male" | "female";  // using union
    email?: string;
  };

```

### Intersection Type

when we use intersection type (&) it means that we use & (and) sign. It takes all the type like common, uncommon and intersect all. It works like javascript and operator. very mush useful when code. Many times we need intersection. Here are some example:-

```Intersection type
type FrontendDeveloper = {
    skills: string[];
    designation1: string;
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: string;
  };

  // get all the value in Developer type
  type Developer = FrontendDeveloper & BackendDeveloper;

  const newEmployee: Developer = {
    skills: ["HTML", "CSS", "JS", "Express"],
    designation1: "Frontend developer",
    designation2: "Backend developer",
  };

```
