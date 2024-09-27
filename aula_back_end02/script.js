function cadastrar() {
    let nome = document.getElementById('nome').value;
    let cidade = document.getElementById('cidade').value;

    // alert(nome + " - " + cidade);

    //document.body.innerHTML = `<h3 align="center"> Olá ${nome}, Seja Bem Vindo(a) a Cidade de ${cidade} </h3>`;

    let h3 = document.createElement('h3'); // Criando uma tag
    h3.style.textAlign = "center";
    h3.textContent = `Olá ${nome}, Seja Bem Vindo(a) a Cidade de ${cidade}`;
    document.body.appendChild(h3);

    return false;
}