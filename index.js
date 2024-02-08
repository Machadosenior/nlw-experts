const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      resposta: [
        "var myVar = 5;",
        "variable myVar = 5;",
        "let myVar = 5;"
      ],
      correta: 2
    },
    {
      pergunta: "Como você faz um comentário de linha em JavaScript?",
      resposta: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "# Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      resposta: [
        "Adiciona um evento ao elemento HTML",
        "Remove um evento do elemento HTML",
        "Atualiza o conteúdo do elemento HTML"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código 'console.log(typeof 'hello');'?",
      resposta: [
        "number",
        "string",
        "undefined"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
      resposta: [
        "+",
        "-",
        "*"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      resposta: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona um elemento pelo seu nome",
        "Seleciona um elemento pelo seletor CSS"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
      resposta: [
        "for (i = 0; i < 5; i++)",
        "for (i = 0; i <= 5; i++)",
        "for (i = 1; i <= 5; i++)"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código 'console.log(3 == '3');'?",
      resposta: [
        "true",
        "false",
        "undefined"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt' faz em JavaScript?",
      resposta: [
        "Converte uma string em um número inteiro",
        "Converte um número em uma string",
        "Converte uma string em um número decimal"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código 'console.log(Math.floor(4.9));'?",
      resposta: [
        "4",
        "5",
        "0"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correta = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent=correta.size + 'de' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value=item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta= event.target.value == item.correta
      correta.delete(item)
     if(estaCorreta) {
       correta.add(item)
  
     }
  
     mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
   }
  
   quizItem.querySelector('dl dt').remove()
  
   quiz.appendChild(quizItem)
  
  
  }