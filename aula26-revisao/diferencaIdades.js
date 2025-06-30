const input = [
  { name: "John",age: 67 },
  { name: "Mark",age: 56 },
  { name: "Rachel",age: 45 },
  { name: "Nate",age: 13 },
  { name: "Jennifer",age: 65 }
];

const menor = input.reduce((menor, {age},index)=> {
    
    if(index === 0) menor = age;
    
    if(age < menor) menor = age;

    return menor 
},0);

const maior = input.reduce((maior, {age})=> { if(age > maior) maior = age; return maior},0);

const resposta = []

resposta.push(menor);
resposta.push(maior);
resposta.push(maior-menor);

console.log(resposta);