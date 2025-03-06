# 📌 7DaysOfCode-4dia

## 🧑 Sobre o Autor

👋 Olá! Meu nome é Roberto Gonçalves Conceição Filho e sou um entusiasta da programação. Você pode me encontrar no GitHub clicando [aqui](https://github.com/Betinho1990)!

<img src = "https://avatars.githubusercontent.com/u/194714356?v=4" width="150" height="150">

## 🚀 Descrição do Projeto

Este é um simples **Jogo de Adivinhação de Número** desenvolvido em **JavaScript**. O jogador deve adivinhar um número secreto entre 0 e 10 em até 3 tentativas. Se o jogador acertar o número, ele será parabenizado. Caso contrário, ele verá quantas tentativas restam. Após o fim do jogo, um botão permite reiniciar o jogo.

## ✨ Funcionalidade

O código possui as seguintes funcionalidades:

✅ **Gerar número secreto aleatório** entre 0 e 10  
✅ **Limite de 3 tentativas** para o jogador adivinhar o número  
✅ **Feedback visual** com o número de tentativas restantes e o resultado da tentativa  
✅ **Reinício do jogo** ao clicar no botão de reiniciar

## 📝 Código

```javascript
let numeroSecreto;
let tentativas;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 11);
    tentativas = 3;
    document.getElementById("resultado").textContent = "";
    document.getElementById("palpite").value = "";
    document.getElementById("reiniciar").style.display = "none";
}

function verificarPalpite() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(palpite) || palpite < 0 || palpite > 10) {
        resultado.textContent = "Por favor, insira um número válido entre 0 e 10.";
        return;
    }

    if (palpite === numeroSecreto) {
        resultado.textContent = "Parabéns! Você acertou o número!";
        resultado.style.color = "#00ff00";
        document.getElementById("reiniciar").style.display = "block";
    } else {
        tentativas--;
        if (tentativas > 0) {
            resultado.textContent = `Errado! Você tem mais ${tentativas} tentativas.`;
            resultado.style.color = "#ffcc00";
        } else {
            resultado.textContent = `Suas tentativas acabaram! O número correto era ${numeroSecreto}.`;
            resultado.style.color = "#ff0000";
            document.getElementById("reiniciar").style.display = "block";
        }
    }
}

function reiniciarJogo() {
    iniciarJogo();
}

iniciarJogo();

```
## 📌 Como Usar

1. Clone este repositório ou copie o código.
2. Crie um arquivo HTML com os seguintes elementos:
   - Um campo de input para o palpite do usuário (id="palpite").
   - Um botão para chamar a função verificarPalpite().
   - Um campo para mostrar o resultado da tentativa (id="resultado").
   - Um botão para reiniciar o jogo (id="reiniciar").
3. Execute o código em seu navegador e interaja com o jogo.

## 🎨 Exemplo de Uso

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Adivinhação</title>
</head>
<body>
    <h1>Jogo de Adivinhação de Número</h1>
    <input type="number" id="palpite" min="0" max="10">
    <button onclick="verificarPalpite()">Verificar Palpite</button>
    <p id="resultado"></p>
    <button id="reiniciar" style="display:none;" onclick="reiniciarJogo()">Reiniciar Jogo</button>

    <script src="seu-arquivo.js"></script>
</body>
</html>
```
## 🔗 Tecnologias Utilizadas

- HTML
- CSS (opcional para estilização do formulário)
- JavaScript

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!

Se quiser ver mais projetos meus, acesse meu perfil no GitHub: [Seu GitHub 🚀](https://github.com/Betinho1990)
