var nota01 = 50, nota02 = 90, nota03 = 75,conceito = ""

var me = 70

var ma = (nota01 + nota02 * 2 + nota03 * 3 + me) /7

if(ma >= 90){
    conceito = "A"
}
else if(ma >= 75 && ma < 90){
    conceito = "B"
}
else if(ma >= 60 && ma < 75){

    conceito = "C"
}
else if(ma >= 40 && ma < 60){
    conceito = "D"
}
else if(ma <40){
    conceito = "E"
}

console.log(conceito)