console.log("hello word")

let num1 = prompt('Digite um número')
let num2 = prompt('Digite uma frase')

if (Number(num1)) {
  alert("é um numero")
} else {
  alert("não é um numero")
}

if (Number(num2)) {
  alert("não é uma frase")
} else {
  alert("é uma frase")
}

 let Isboolean = Boolean

if(Isboolean == Boolean) {
  alert ("é booleano")
} else {
  alert ("não é booleano")
}

let num3 = prompt('Digite o primeiro número')
let num4 = prompt('Digite o segundo número')

num3 = Number(num3)
num4 = Number(num4)


const sub = num3 - num4
const multi = num3 * num4
const div = num3 / num4

alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)

let ImparOuPar = sub % 2

if(ImparOuPar == 0) {
  alert(`${ImparOuPar} é par`)
} else {
  alert(`${ImparOuPar} é impar`)
}

