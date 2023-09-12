const screen1 = document.querySelector('.screen1')
const screnn2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
})

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#input-number')
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screnn2.querySelector('h2').innerText = `Você acertou em ${xAttemps} tentativas`
  }

  inputNumber.value = ''
  xAttemps++
}

function handleResetClick() {
  toggleScreen()
  xAttemps = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screnn2.classList.toggle('hide')
}