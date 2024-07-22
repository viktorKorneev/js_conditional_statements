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
  const onSale = true

//   if (inStock === true){
//     if(onSale === true){
//         alert("Buy!!!")
//     }
//   } 

//   if(inStock === true && onSale === true) { // Надо чтобы выполнились все условия одновременно 
//     alert("Buy!!!")
//   }

const price = 100

// if(inStock === true && (onSale === true || price < 80)){
//     alert("Buy!!!")
// }

const temp = 80
const willRain = true
const humid = (willRain === true && temp > 80)

console.log(humid);