


type Person = {
  name: string;
  age: number
}

let human1 : Person = {
  name: "Haseeb Ahmed",
  age: 20
}

console.log(human1.name);


//stricting array to only numbers

let array1 : number[] = [45,54,65];

console.log(array1[2]);

//stricting array to multiple datatypes and limited indices

let array2 : [number , string , boolean] = [45 , "Hello" , true] 

console.log(array2[0]);

//stricting array to multiple datatypes and unlimited indices

let array : any[] = ["Hello" , 45, false, 0.0012 ]

console.log(array[2]);


//Readonly allows only read but not write

let arr3 : readonly number[] = [45,55,878];

console.log(arr3[2]);

function addNum(a:number , b: number) :number {
  return a+b;
}

console.log(addNum(10,67));

