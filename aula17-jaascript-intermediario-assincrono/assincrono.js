async function endereco(){

    const dado = await fetch('https://viacep.com.br/ws/60060-390/json/');

    const end = await dado.json();

    console.log(end);
}

endereco();

//síncrona assíncrona