function calcular(){

    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementById('nota2')
    const nota3 = document.getElementById('nota3')
    const aluno = document.getElementById('aluno')
    const result = document.getElementById('result')
    const nome = document.getElementById('nome')
    
    var numeros1 = Number(nota1.value)
    var numeros2 = Number(nota2.value)
    var numeros3 = Number(nota3.value)
    var resultado = numeros1 + numeros2 + numeros3
    var media = (resultado / 3).toFixed(1)

    var pessoa = aluno.value

    nome.innerText = `Aluno : ${pessoa}`

    if(media < 5){
        result.innerText = `Sua media é ${media}, você foi REPROVADO`
    }
    
    if(media > 5){
        result.innerText = `Sua media é ${media}, você foi APROVADO`
    }
}