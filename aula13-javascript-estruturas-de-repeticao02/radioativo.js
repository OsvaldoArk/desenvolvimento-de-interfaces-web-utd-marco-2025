var massaInicial = 300_000_000
tempo = 0

while(massaInicial >= 0.5){
    tempo+=50
    massaInicial/=2
}

horas = tempo/3600

minutos = (tempo - 3600*Math.floor(horas))/60

segundos = (tempo - 3600*Math.floor(horas) - 60 * Math.floor(minutos))

console.log("massa: ",massaInicial)
console.log("tempo: ",tempo)
console.log("horas: ",Math.floor(horas))
console.log("minutos: ",Math.floor(minutos))
console.log("segundos: ",segundos)