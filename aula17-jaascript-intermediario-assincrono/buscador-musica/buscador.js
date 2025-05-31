document.getElementById('buscar').addEventListener('click',async ()=>{

    const banda = document.getElementById('banda').value

    const musica = document.getElementById('musica').value

    const letra = document.getElementById('letra');

    const resposta = await fetch(`https://api.lyrics.ovh/v1/${banda}/${musica}`);

    const dado = await resposta.json();

    letra.innerText = dado.lyrics;
});

