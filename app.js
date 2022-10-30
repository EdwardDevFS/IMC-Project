let nombres = document.getElementById('validationCustom01')
let apellidos = document.getElementById('validationCustom02')
let telefono = document.getElementById('validationCustomUsername')
let pais = document.getElementById('validationCustom03')
let ciudad = document.getElementById('validationCustom04')
let nacimiento = document.getElementById('validationCustom05')
let email = document.getElementById('validationCustom06')
let talla = document.getElementById('validationCustom07')
let peso = document.getElementById('validationCustom08')
let terminos = document.getElementById('invalidCheck2')
let index = 1;


let botonAleatorio = document.getElementById('aleatorio').addEventListener('click',(e)=>{
    e.preventDefault();
    nombres.value = 'Martin';
    apellidos.value = 'San';
    telefono.value = '987654321';
    pais.value = 'Japón';
    ciudad.value = 'Shibuya';
    nacimiento.value = '2000-01-01';
    email.value = 'aletorio@gmail.com';
    talla.value = '160';
    peso.value = '60';
    
}) 
let bot = document.getElementById('b').addEventListener('click', (e) => {  
    validar()})


function validar(){
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
        }
        else{
            event.preventDefault();
            
            mostrarDatos()
            vaciar();
        }


        form.classList.add('was-validated')
    }, false)
    })
}
    

function vaciar(){
    nombres.value = ''
    apellidos.value = ''
    telefono.value = ''
    pais.value = ''
    ciudad.value = ''
    nacimiento.value = ''
    email.value = ''
    talla.value = ''
    peso.value = ''
    terminos.value = ''
}

function guardar(condicion){
    
    let person = new Personas( 
        id = index,
        nombres.value,
        apellidos.value,
        telefono.value,
        pais.value,
        ciudad.value,
        nacimiento.value,
        email.value,
        talla.value,
        peso.value,
        terminos.value,
        condicion
    )
    
    person = JSON.stringify(person);
    sessionStorage.setItem(`Usuario N°${index}!`, person)
    index++
    
    vaciar()

}


function mostrarDatos (){
    try {
        talla = talla.value / 100;
        let imc = peso.value / (talla * talla);
        let resultado = imc.toFixed(2);
        // TRAYENDO EL NOMBRE
        let name = nombres.value
        let resp = document.getElementById('namae');
        resp.textContent = `¡Hola, ${name}!`;
        document.getElementById('sub').textContent = 'Los resultados del control de Indice de Masa corporal arrojan el siguiente resultado:';
        document.getElementById('image').style.display = 'none';
        calculoPeso(resultado);
    } catch (error) {
        console.log("No se pudo compa")
    }
    
}

function calculoPeso(a) {
    let condition = 'undefined';
    if (a >= 30.00) {
        document.getElementById('obeso').style.display = 'flex';  //OBESIDAD
        condition = 'obeso'
    }
    else if (a >= 25.50) {
        document.getElementById('sobrepeso').style.display = 'flex'; //SOBREPESO
        condition = 'sobrepeso'
    }
    else if (a >= 18.50) {

        document.getElementById('normal').style.display = 'flex'; //NORMAL
        condition = 'normal'
    }
    else if (a > 0.00) {
        
        document.getElementById('delgado').style.display = 'flex'; //BAJO PESO
        condition = 'delgado'
    }

    guardar(condition)
    // else {
    //     alert(a);
    //     alert("Debe rellenar el formulario");
    //     location.reload();
    // }
    // index++;
    // if (index == 2) {
    //     alert("Se recargará la pestaña");
    //     location.reload();
    // }
}
