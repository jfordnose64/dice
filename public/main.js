let diceRoller = document.querySelector('.dice-roller')
let numberRolled = document.querySelector('.roll-number')
const rollButton = document.querySelector('.roll-button')
// const twentySided = document.querySelector('.20-sided')
// let twelveSided = document.querySelector('.12-sided')
// let tenSided = document.querySelector('.10-sided')
// let eightSided = document.querySelector('.8-sided')
// let fourSided = document.querySelector('.4-sided')
// let hundredSided = document.querySelector('.100-sided')

diceRoller = () => {
  const randomNum = Math.floor(Math.random() * 8) + 1
  console.log(randomNum)
  document.querySelector('.roll-number').textContent = randomNum
}

// const diceRollerTwenty = () => {
//   const randomNum = Math.floor(Math.random() * 20) + 1
//   document.querySelector('.roll-number').textContent = randomNum
// }
rollButton.addEventListener('click', diceRoller)

// twentySided.addEventListener('click', diceRollerTwenty)