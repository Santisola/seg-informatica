const form = document.getElementById('formulario');
const nombre = document.getElementById('usuario');
const contra = document.getElementById('password');

const img1 = document.getElementById('imagen1');
const img2 = document.getElementById('imagen2');
const img3 = document.getElementById('imagen3');

const imgs = [
    img3,
    img2,
    img1,
];

form.addEventListener('submit', ev => {
    ev.preventDefault()
    alert('Hola ' + nombre.value + ', te acabo de robar tus datos del homebanking, voy a gastarme toda tu plata en combos de Mc Donalds. PD: Como vas a tener de contraseña "' + contra.value + '" jajaja.');
    window.location.replace('bobi.html');
})

let cont = 0

setInterval(() => {
    console.log(cont)

    if (cont === 2){
        imgs[0].style.opacity = 1;
        imgs[1].style.opacity = 1;
    } else{
        imgs[cont].style.opacity = 0;
    }

    cont === 2 ? cont = 0 : cont++;
}, 7000);