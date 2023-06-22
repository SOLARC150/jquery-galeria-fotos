let linhas = ""
let links
const expansao = document.getElementById('button-expansao');
const form = document.getElementById('form');

$(document).ready(function(){

    $('header').click(function () {
        $('form').slideDown();
    })

    $('form').on('reset', function (e) {
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault();
        const link = document.getElementById('url-image')
        links = link.value;
        adicionaImage(links);
        link.value = '';
    })


})

function adicionaImage (link) {

    const novoItem = $('<li style="display: none;"> </li>')

    $(`<img id="ima" src="${link}"/>`).appendTo(novoItem);

    $(`
    <div class="link">
        <a href="${link}" terget="_blank" title="Ver imagem em tamanho real"> 
            Ver imagem em tamanho real
        </a>
    </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);

}