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