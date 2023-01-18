// section 4 -> Higher Oder Functions

/*
1) map() -> its does transform array elements
2) filter() -> filters elements in an array
3) reduce() -> reduce elements of an array to a value
4) every() -> check every elements in an array passes a test.
5) some()-> check if atleast one elements in an array passed a test.
6) sort() -> sort elements in an array
7) forEach() -> loop through array elements.
*/

/*
let circle  = [10, 20, 30];

let areas = []
let area = 0;

// using loop
for(let i = 0; i < circle.length; i++){
   area = Math.floor(Math.PI * circle[i] * circle[i])
   areas.push(area)
}

// using map function
function circles(radius){
    return Math.floor(Math.PI * radius * radius)
}
const result = circle.map(circles)


console.log(result)
console.log(areas)
*/

// filter
// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];

// let bigcities = []

// for(let i = 0; i < cities.length; i++){
//     if(cities[i].population > 3000000){
//         bigcities.push(cities[i])
//     }
// }

// function findCities(cities){
//     return cities.population > 3000000;
// }

// let resultCities = cities.filter(findCities)

// console.log(resultCities)
// console.log(bigcities)

// reduce

// let num = [1,2,3];

// let sum = 0;;
// for(let i = 0 ; i < num.length; i++){
//   sum = sum + num[i]
// }

// let result = num.reduce((previousValue, currentValue)=>{
//    return previousValue + currentValue;
// })

// console.log(result)

// console.log(sum)

// Finding elements

/**
 1) indexOf() -> to find position of an array elements through indexOf method, this method return first occurence element that you want to find, if does not found then return -1.
 --- this method accept two arguments first is search elements and second on fromIndex 
--- 
 */

let arr = [11,22,33,40,50,60,40]

console.log(arr.indexOf(40, -1))


