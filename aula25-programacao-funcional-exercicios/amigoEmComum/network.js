amigosPaulo = ['Antônio','Larissa','Joaquim','Alisson','Marcos'];

amigosMariana = ['Milena','Geovana','Antônio','Larissa','Lucas'];

const amigosEmComum = amigosPaulo.filter(amigo => amigosMariana.includes(amigo));

console.log(amigosEmComum);

