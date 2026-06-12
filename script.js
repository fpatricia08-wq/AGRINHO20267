function calcular(){

    let pontos = 0;

    pontos += Number(document.getElementById("soloP").value);
    pontos += Number(document.getElementById("aguaP").value);
    pontos += Number(document.getElementById("bioP").value);
    pontos += Number(document.getElementById("energiaP").value);
    pontos += Number(document.getElementById("residuosP").value);

    const resultado = document.getElementById("resultado");

    if(pontos >= 80){
        resultado.innerHTML =
        "🌱 Fazenda Sustentável! Pontuação: " + pontos;
    }
    else if(pontos >= 50){
        resultado.innerHTML =
        "🌿 Fazenda em Desenvolvimento! Pontuação: " + pontos;
    }
    else{
        resultado.innerHTML =
        "⚠️ Atenção! Sua fazenda precisa melhorar. Pontuação: " + pontos;
    }
}
