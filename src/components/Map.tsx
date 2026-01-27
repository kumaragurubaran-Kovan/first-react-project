/* Using foreach() for element squaring */
export function Map(){
   let arrayForSquaredElements = [1, 2, 3, 4];
   arrayForSquaredElements.forEach((element, index) => {
   arrayForSquaredElements[index] = element * element;
});
console.log(arrayForSquaredElements);

   const a = [1, 2, 3];
   const b = a;

   a.forEach((v, i) => a[i] = v * 2);
   
   console.log(a , b);
   console.log(a === b);

}





/* Using map() for element squaring */
export function For(){
   let arrayMappedToSquaredElements = [1, 2, 3, 4];
   arrayMappedToSquaredElements = arrayMappedToSquaredElements.map((element) => element * element);
   console.log(arrayMappedToSquaredElements);

   const a = [1, 2, 3];
   const b = a.map(v => v * 1);

   console.log(a , b);
   console.log(a === b);
}

