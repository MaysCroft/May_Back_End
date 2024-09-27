let btn = document.getElementById('btn');

btn.onclick = function () {
    // alert("Deu BOM!!");
    // document.body.textContent = 'Curioso!!!';  textContent só manda Texto
    document.body.innerHTML = '<h2> Curioso!!! </h2>';
}