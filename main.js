//let a = document.getElementById("tekst");
let butd = document.querySelector("button[id='dodaj']");
butd.onclick = function() 
{
    let paragraf = document.querySelector('p');
    paragraf.textContent = 'Modyfikacja paragrafu';
}
let butu = document.querySelector("button[id='usun']");
butu.onclick = function() 
{
    let paragraf = document.querySelector('p');
    paragraf.textContent = '';
}