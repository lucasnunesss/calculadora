const btn = document.querySelectorAll('button')
const input = document.querySelector('.calc')

let num1 
let op
let num2
let calc
function  calc1() {
 
btn.forEach((item) => {

  item.addEventListener('click', e => {
    e.preventDefault()
    input.value += item.innerText
    num1 = input.value.split('')
    if(item.innerText === '='){
        input.value = 'a'
    }
    if (input.value = 'a'){
      break
    }
    
  
    
    
   
  })
 
})

}

calc1()