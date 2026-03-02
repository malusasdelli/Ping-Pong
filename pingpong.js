// Criar Bolinha 
let raio = 7.5;
let xBolinha = 100; 
let yBolinha = 200;
let diametro = raio * 2; 

// Velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Minha raquete 
let xRaquete = 5; 
let yRaquete = 150; 

// Raquete Oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// Placar 
let meusPontos = 0;
let pontosOponentes = 0; 

// dificuldades 

let dificuldade = "Normal";
let trilha,ponto,raquetada;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound ("ponto.mp3")
  raquetada = loadSound ("raquetada.mp3")
}

function draw (){
  background(0);
  movimentoBolinha();
  raquetes(xRaquete,yRaquete);
  raquetes(xRaqueteOponente,yRaqueteOponente);
  npc(dificuldades);
  
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10}
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10}
  
  if(xBolinha -raio < xRaquete + 10 &
    yBolinha-raio< yRaquete + 90 &
    yBolinha +raio > yRaquete){
  velocidadeXbolinha *= -1;
  raquete.play()}
  if (xBolinha + raio > xRaqueteOponente &
  yBolinha - raio < yRaqueteOponente + 90 &
  yBolinha + raio > yRaqueteOponente) {
    velocidadeXBolinha *= -1;
    raquetada.play() }
  
}





