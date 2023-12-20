const btn = document.querySelectorAll('button')
const input = document.querySelector('.calc')
let num1 
let op
let num2
let calc

function calcular(){
input.innerHTML = ''
btn.forEach((item) => {
  
  item.addEventListener('click', e => {
      e.preventDefault()
   
    input.value += item.textContent
    let conta = input.value.split('')
    
  
    if(item.textContent === ("+")){
      calculo = input.value.split('+')
      input.value = ''
      let calc =  calculo.reduce((itens, acc) => {
          return parseFloat(itens) + parseFloat(acc)
        })
        input.value = calc
        return 
      } if(conta.includes("-")){
        calculo = input.value.split('-')
        let calc =  calculo.reduce((itens, acc) => {
            return parseFloat(itens) - parseFloat(acc)
          })
          input.value = calc
          return calc
        }
  
       if(conta.includes("x")){
       
        calculo= input.value.split('x')
      let calc =  calculo.reduce((itens, acc) => {
          return parseFloat(itens) * parseFloat(acc)
        })
        return input.value = calc
        
  
      }
      
      if(conta.includes("/")){
      calculo = input.value.split('/')
      let calc = calculo.reduce((itens, acc) => {
          return parseFloat(itens) / parseFloat(acc)
        })
        return input.value = calc
      }
      
    
    }

  )})}

  





calcular()

