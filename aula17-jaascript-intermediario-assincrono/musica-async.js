const letra = async (banda,musica)=>{
    const resposta = await fetch(`https://api.lyrics.ovh/v1/${banda}/${musica}`);

    const dado = await resposta.json();

    console.log(dado);
}

letra('capital inicial','fogo');