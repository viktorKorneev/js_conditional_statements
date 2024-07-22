// const location_1 = 3
// const location_2 = 4
// const location_3 = 5

// const guess = 4
// if (guess === location_1 || guess === location_2 || guess === location_3) { // Надо чтобы выполнилось хотябы одно условие
//     alert("HIT!")
// } else {
//     alert("MISS!")
//   }

//   if(guess === location_1){
//     alert("HIT!")
//   } else if (guess === location_2) {
//     alert("HIT!")
//   } else if (guess === location_3) {
//     alert("HIT!")
//   }

  const inStock = true
  const onSale = false

//   if (inStock === true){
//     if(onSale === true){
//         alert("Buy!!!")
//     }
//   } 

//  Если в переменной лежит булевое значение его можно прочитать сразу
//   if(inStock && onSale) { // Надо чтобы выполнились все условия одновременно 
//     alert("Buy!!!")
//   }

const price = 100

if(inStock && (onSale || price < 80)){
    alert("Buy!!!")
}

const temp = 83
const willRain = true
const humid = (willRain && temp > 80)

console.log(humid);


const buyIt = (onSale && inStock) // true

const buyIt = (onSale && inStock) // false