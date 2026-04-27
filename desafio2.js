let victory = 101
let loss = 0
let saldoVitotia = diferenca()
let msg1 = "O herói de saldo "
let msg2 = " esta no vível de "
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamente", "Lendário", "Imortal"]

function diferenca(){
  return victory - loss
}

if (saldoVitotia <= 10){
  console.log(msg1 + saldoVitotia + msg2 + nivel[0])
}else if(saldoVitotia > 10 && saldoVitotia <= 20){
  console.log(msg1 + saldoVitotia + msg2 + nivel[1])
}else if(saldoVitotia > 20 && saldoVitotia <= 50){
  console.log(msg1 + saldoVitotia + msg2 + nivel[2])
}else if(saldoVitotia > 50 && saldoVitotia <= 80){
  console.log(msg1 + saldoVitotia + msg2 + nivel[3])
}else if(saldoVitotia > 80 && saldoVitotia <= 90){
  console.log(msg1 + saldoVitotia + msg2 + nivel[4])
}else if(saldoVitotia > 90 && saldoVitotia <= 100){
  console.log(msg1 + saldoVitotia + msg2 + nivel[5])
}else{
  console.log(msg1 + saldoVitotia + msg2 + nivel[6])
}
