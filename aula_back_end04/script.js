const calc = document.getElementById('calc');

calc.addEventListener('submit', (event) => {

    event.preventDefault();

    let produto = document.getElementById('produto').value;
    let valor = Number(document.getElementById('valor').value);

    let euro = (valor / 6.08).toFixed(2);
    let dolar = (valor / 5.44).toFixed(2);
    let libra = (valor / 7.29).toFixed(2);
    let iene = (valor * 27).toFixed(2);

    let texto = document.createElement('h3');

    texto.innerHTML = `- Produto: ${produto} - Valor: R$ ${valor} <br/> 
                       - Em Conversão Direta fica em: <br/> 
                       - Convertido em Euro: € ${euro} <br/>
                       - Convertido em Dólar: $ ${dolar} <br/>
                       - Convertido em Libra: £ ${libra} <br/>
                       - Convertido em Iene: ¥ ${iene}`;

    document.body.appendChild(texto);
});