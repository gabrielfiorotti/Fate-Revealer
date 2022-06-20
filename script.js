/* Ponto de partida (questionamentos a se fazer para
    começar a aplicação):

// Quais são minhas variáveis?

// Quais são meus dados de entrada?
// (pergunta)

// Quais são meus dados de saída?

*/


const result = document.querySelector('#answer')

const inputQuestion = document.querySelector('#inputQuestion')

const askButton = document.querySelector('#askButton')


// estabelecendo variaveis:
const possibleAnswers = [
    "Absolutely!",
    "That's correct!",
    "No doubts: yes!",
    "That's 100% true.",
    "Exactly, I couldn't agree more.",
    "I'm not so sure.",
    "I'm not counting on that.",
    "Ask again later.",
    "It's better not to told you right now.",
    "My answer is no.",    
    "My sources say no.",
    "The perspectives are not that good.",
    "Definely not!",
    "That's a lie!",
]


function revealFate(){

    // possibilidade da pessoa clicar sem apertar nada:
    if(inputQuestion.value == ""){
        alert("You must type your question before asking!")
        return
        /* o return para a aplicação, então se a pessoa 
        nao digitar a pergunta, a aplicação para por aqui */
    }

    // desabilitando botão após clicar uma vez:
    askButton.setAttribute("disabled", true)

    // aparecer a pergunta embaixo antes da resposta:
    const question = "<div>" + inputQuestion.value + "</div>"



    // raciocínio para gerar número aleatório:

    // primeiro eu verei qual é o tamanho do array
    // console.log(possibleAnswers.length)
    // output: 14, ou seja, [0 ao 13]

    const totalOfAnswers = possibleAnswers.length

    // gerando numero aleatorio:

    const randomNumber = Math.floor(Math.random() * totalOfAnswers)
    // output: numero inteiro randômico entre 0 e 13 


    /* OBS:
    Math.random = gera um numero aleatorio entre 0 e 1
    Math.floor = arredonda pro piso, ou seja, pra baixo.
    */

    const finalAnswer = possibleAnswers[randomNumber]

    console.log(finalAnswer)

    result.innerHTML = question + finalAnswer


    result.style.opacity = 1;

    // sumir a resposta depois de 5 segundos:
    setTimeout(function(){
        result.style.opacity = 0;
        // remover atributo de desabilitar para ficar abilitado novamente
        askButton.removeAttribute("disabled")
    }, 4000)

}






