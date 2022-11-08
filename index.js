


function writeCards(arr, event) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    newArray.push(message)
  }
  return newArray
}



