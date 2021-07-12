function clicar() { //Criação da função clicar, utilizada no evento onclick do button
    let data = new Date();
    let ano = data.getFullYear(); // ano definido no formato com dia, mês e ano
    let fAno = document.getElementById("nascimento"); //ano de nascimento informado pelo usuário
    let res = document.querySelector("div#resultado");

    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert("#ERRO! Verifique os dados.")
    } 

     let sexo = document.getElementsByName('sexo');
     let idade = ano - Number(fAno.value);
     res.innerHTML = `A idade calculada é ${idade}`;
 
     let genero = ""
     let img = document.createElement('img'); // Criação dinâmica da imagem, aqui criamos o elemento img
     img.setAttribute('id', 'foto'); // Definição do ID e foto no elemento img
 
     if(sexo[0].checked) { // checked é a opção marcada no sexo, que deve possuir o mesmo nome nas 2 opções
         genero = 'Homem'
         if (idade >=0 && idade < 10) {
             img.setAttribute('src', 'imagens/foto-bebe-m.png');
         } else if (idade < 21) {
             img.setAttribute('src', 'imagens/foto-jovem-m.png');
         } else if (idade < 50) {
             img.setAttribute('src', 'imagens/foto-adulto-m.png');
         } else {
             img.setAttribute('src', 'imagens/foto-idoso-m.png');
         }
 
    } else if (sexo[1].checked) {
         genero = 'Mulher'
         if (idade >=0 && idade < 10) {
             img.setAttribute('src', 'imagens/foto-bebe-f.png');
         } else if (idade < 21) {
             img.setAttribute('src', 'imagens/foto-jovem-f.png');
         } else if (idade < 50) {
             img.setAttribute('src', 'imagens/foto-adulto-f.png');
         } else {
             img.setAttribute('src', 'imagens/foto-idoso-f.png');
         }
     }

     res.style.textAlign = 'center'
     res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img); // selecionando a tag img para aparecer a foto no site 
}
 
 