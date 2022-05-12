
let btncalc = document.querySelector('#btn-calcular')


function imc(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result-calc');

    if( height !== '' && weight !== ''){
        const valueimc = (weight / (height * height)).toFixed(1);
        result.textContent = valueimc;

        let classification = ''

        if(valueimc < 18.5){
            classification = 'abaixo do peso'
        } else if(valueimc < 25){
            classification = 'com o peso ideal'
        } else if (valueimc < 30){
            classification = 'um pouco acima do peso'
        } else if (valueimc < 35){
            classification = 'com obesidade grau I'
        } else if (valueimc < 40){
            classification = 'com obesidade grau II'
        } else {
            classification = 'com obesidade extrema'
        }

        result.textContent = ` seu imc é  ${valueimc} e você está ${classification}`
    } else {
        result.textContent = 'preencha todos os campos'
    }
}

btncalc.addEventListener('click', imc )