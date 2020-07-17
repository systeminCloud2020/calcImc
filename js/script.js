// Calculadora

function calculadora() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    var imc = peso / (altura * altura)

    const grauImc = [
        'Baixo peso muito grave',
        'Baixo peso grave',
        'Baixo peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau I',
        'Obesidade grau II',
        'Obesidade grau III',
    ]

    if (altura == "" || peso == "") {
        alert("Informe os valores corretamente para realizar o calculo!!!");
    } else {

        if (altura > 3) {
            alert("A altura não pode ser maior que 3m")
        } else {

            if (peso > 250) {
                alert("O peso não pode ser maior que 250Kg")
            } else {

                if (imc < 16) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[0] + '</p>'
                        + '<button type="button" id="myButton">Click Me!</button>'
                        + '</div>'

                } else if (imc >= 16 && imc <= 16.99) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[1] + '</p>'
                        + '</div>'
                } else if (imc >= 17 && imc <= 18.49) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[2] + '</p>'
                        + '</div>'
                } else if (imc >= 18.50 && imc <= 24.99) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[3] + '</p>'
                        + '</div>'
                } else if (imc >= 25 && imc <= 29.99) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[4] + '</p>'
                        + '</div>'
                } else if (imc >= 30 && imc <= 34.99) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[5] + '</p>'
                        + '</div>'
                } else if (imc >= 35 && imc <= 39.99) {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[6] + '</p>'
                        + '</div>'
                } else {
                    document.getElementById('resultado').innerHTML =
                        '<div>'
                        + '<p>IMC: ' + imc.toFixed(2) + '</p>'
                        + '<p>' + grauImc[7] + '</p>'
                        + '</div>'
                }
            }
        }
    }
}

// Focar resultado calculadora
focusScrollMethod = function getFocus() {          
    document.getElementById("myButton").focus({preventScroll:false});
  }

// Limpar calculadora

function limpar() {
    document.getElementById('resultado').innerHTML = '<div></div>'
}

// Rotação da logo
function rotate() {
    var imagem = window.document.getElementById('logo');
    imagem.style.transition = '1s'
    imagem.style.transform = 'rotate(360deg)'
}

function rotate2() {
  var logo = document.getElementById('logo')
  logo.style.transition = '1s'
  logo.style.transform = 'rotate(0deg)'
}