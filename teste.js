

const btn = document.querySelectorAll('button')
const input = document.querySelector('.calc')
let erro = 'Erro'
let num1
let num2
let operator
const teclasPermitidas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Enter', 'Backspace', 'Control', 'Shift', 'CapsLock', 'Tab', '.', '=', 'F5', 'Space'];
const teclasEspeciais = ['+', '-', '/', 'x', '=']
function calc2(){
  
btn.forEach((item) => {
 
  item.addEventListener('click', e => {
    
      e.preventDefault()
      
      input.value += item.textContent

      if (item.textContent.includes('DEL')){
        input.value = ''
      }

      if (input.textContent === "="){
        input.value = 'oi'
       }
      
      verifica()
      teclado()
     if (isNaN(input.value) && !input.value.includes('=')){
      input.value = 'Conta não reconhecida'
      e.preventDefault()
      input.value = ''
     }

     if (input.value === "=" || input.value.includes("===")){
      input.value = ''
     }
}

)})
}
  
       
 function verifica() {

 
  if (input.value.includes('+')){
    num1 = input.value.split('+')
    input.value = ''
    operator = '+'
    console.log(operator)
  } else if (input.value.includes('=') && operator === '+'){
    num2 = input.value.split('=')
    num2 = parseFloat(num2)
    num1 = parseFloat(num1)
    input.value = num1 + num2
    operator = ''
    num1 = 0
    num2 = 0
  }

  if (input.value.includes('-')){
    num1 = input.value.split('-')
    input.value = ''
    operator = '-'
    console.log(operator)
  } else if (input.value.includes('=') && operator === '-'){
    num2 = input.value.split('=')
    num2 = parseFloat(num2)
    num1 = parseFloat(num1)
    input.value = num1 - num2
    operator = ''
    num1 = 0
    num2 = 0
  }

  if (input.value.includes('x')){
    num1 = input.value.split('x')
    input.value = ''
    operator = 'x'
    console.log(operator)
  } else if (input.value.includes('=') && operator === 'x'){
    num2 = input.value.split('=')
    num2 = parseFloat(num2)
    num1 = parseFloat(num1)
    input.value = num1 * num2
    operator = ''
    num1 = 0
    num2 = 0
  }

  if (input.value.includes('/')){
    num1 = input.value.split('/')
    input.value = ''
    operator = '/'
    console.log(operator)
  } else if (input.value.includes('=') && operator === '/'){
    num2 = input.value.split('=')
    num2 = parseFloat(num2)
    num1 = parseFloat(num1)
    
    if (num1 / num2 === Infinity){
      console.log('oi')
     return alert('Você não pode dividir por zero')
    } else {
    input.value = num1 / num2
    operator = ''
    num1 = 0
    num2 = 0
    }
    return input.value
  }

  return input.value


}

function teclado(){
  input.addEventListener('keydown', e => {
    
    console.log(e)
    if (!teclasPermitidas.includes(e.key) && !teclasEspeciais.includes(e.key)){

      return e.preventDefault()
    }

    if(teclasEspeciais.includes(e.key)){
      e.preventDefault()
    
    }
   
  })
}





teclado()
calc2()

