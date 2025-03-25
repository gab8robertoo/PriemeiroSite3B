document.addEventListener('DOMContentLoaded',function ()  {
    const aumnetaFonteBotao = document.getElementById ('aumentar.fonte')
    const diminuiFonteBotao = document.getElementById ('diminui.fonte')

    let tamanhoatualFonte = 1;
    aumnetaFonteBotao.addEventListener('click',function () {
        tamanhoatualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoatualFonte} rem`;

    });

    diminuiFonteBotaoFonteBotao.addEventListener('click',function () {
        tamanhoatualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoatualFonte} rem`;


    )




}





)