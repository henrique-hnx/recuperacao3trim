//as funções servem para executar tarefas que são chamadas por algum gatilho, nesse caso é chamada quando clica no botão que está no html
//tudo que ta dentro da função é o que vai acontecer quando o botão que chama ela for clicado
function InscreverEstudante(){ const idade = parseInt(document.getElementById("idade").value)
    //armazena em uma variavel o valor que o usuário digitar na janela de prompt que aparece quando clica no botão
    let idadeDoEstudante = prompt("Qual a idade do estudante?");
    let estudantesClasseA = [ ]
    let estudanteClasseB = [ ]

    if (idade >= 16 && idade <= 17){
        estudantesClasseA.push(idade);
        document.getElementById ("classeAcontador").textContent= estudantesClasseA.length;
    }else if (idade  >= 14 && idade <= 15)
    {
    }   



//LEIA ANTES DE COMEÇAR:
//Como não estamos usando banco de dados, toda vez que o site for recarregado o valor das variáveis volta a ser zero, não se preocupe com isso
//para realizar o calculo de quantos times podem ser feitos, use o parseInt() para forçar o resultado ser um número inteiro e ignorar as sobras do cálculo.
}
