
let talla = document.getElementById('validationDefault07')
let peso = document.getElementById('validationDefault08')

index = 0

const calculoPeso = () => {
    
    talla1 = talla.value/100;
    let imc = peso.value / (talla1 * talla1)
    let resultado = imc.toFixed(2);
    // TRAYENDO EL NOMBRE
    const nombre =  document.querySelector('#validationDefault01').value
    const resp = document.getElementById('namae');
    resp.textContent = '¡Hola, '+nombre+'!';
    document.getElementById('sub').textContent = 'Los resultados del control de Indice de Masa corporal arrojan el siguiente resultado:';
    document.getElementById('image').style.display = 'none';


    if (resultado >= 30.0)
    {

        document.getElementById('obeso').style.display = 'flex'
          //OBESIDAD
    }
    else if(resultado >= 25.5){
       
        document.getElementById('sobrepeso').style.display = 'flex' //SOBREPESO
        
    }
    else if(resultado <= 18.5){
        
        document.getElementById('normal').style.display = 'flex'      //NORMAL
    }
    else if(resultado <= 0){
        
        document.getElementById('delgado').style.display = 'flex'   //BAJO PESO
    }
    else{
        alert("Debe rellenar el formulario")   
        location.reload();
    }
    index++;
    if(index == 2){
        alert("Se recargará la pestaña")
        location.reload();
    }
}

let bot = document.getElementById('b')
bot.addEventListener('click', calculoPeso)

