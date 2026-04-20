let nameHero = "Logan";
let xpHero = 12000;
let nivel = "";
let mensagem_1 = "O héroi de nome ";
let mensagem_2 = " esta com o nível de ";

if (xpHero <= 1000){
  nivel = "Ferro"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else if (xpHero > 1000 && xpHero <= 2000){
  nivel = "Bronze"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else if (xpHero > 2000 && xpHero <= 5000){
  nivel = "Prata"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else if (xpHero > 5000 && xpHero <= 7000){
  nivel = "Ouro"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else if (xpHero > 7000 && xpHero <= 8000){
  nivel = "Platina"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else if (xpHero > 8000 && xpHero <= 9000){
  nivel = "Ascendente"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else if (xpHero > 9000 && xpHero <= 10000){
  nivel = "Imortal"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}else{
  nivel = "Radiante"
  console.log(mensagem_1 + nameHero + mensagem_2 + nivel)
}
