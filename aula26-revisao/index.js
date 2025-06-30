function lastNRevert(text, n) {
  return text.replace(" ","").split("").join("").slice(-n).split("").reverse().join("");  
}

const resposta = lastNRevert("Jon Doe",3)

console.log(resposta);