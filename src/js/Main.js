const cont = new Contents();
const app = new App();

const root = document.getElementById('root');

const inicio = document.querySelector('.inicio');
const sobre = document.querySelector('.sobre');
const contato = document.querySelector('.contato');
const menuHover = document.querySelector('.menuHover');
const contentHover = document.querySelector('.menuHdiv');
let mainBox = document.querySelector('.mainBox');
let footerI = document.querySelector('footer');
const triadInf = document.querySelector('.t-info');
const triadBtn = document.querySelector('.triad');


const inicioPage = cont.inicioCont();
const sobrePage  = cont.sobreCont();

inicio.classList.add('active');

root.innerHTML = inicioPage;

let numVeriMH = 0;

        menuHover.onclick = () => {
            if (numVeriMH !== 0) {
                numVeriMH--
                contentHover.classList.add('hidden');
            } else {
                numVeriMH++
                contentHover.classList.remove('hidden');
            }
        }

document.addEventListener('click', e => {
    const el = e.target;

/*     if (el.classList.contains('menuHover')) {
        menuHover.classList.remove('hidden');
    } else {
        menuHover.classList.add('hidden');
    } */

    if (el.classList.contains('inicio')) {
        sobre.classList.remove('active');
        contato.classList.remove('active');
        inicio.classList.add('active');
        root.innerHTML = "";
        root.innerHTML = inicioPage;
        mainBox.style.height = 82.5 + 'vh';
        mainBox.style.marginBottom = 0;
    }

    if (el.classList.contains('sobre')) {
        inicio.classList.remove('active');
        contato.classList.remove('active');
        sobre.classList.add('active');
        root.innerHTML = "";
        cont.sobreCont();
        mainBox.style.height = 'auto';
        mainBox.style.marginBottom = 10 + '%';
    }

    if (el.classList.contains('contato')) {
        inicio.classList.remove('active');
        sobre.classList.remove('active');
        contato.classList.add('active');
        root.innerHTML = "";
        cont.contatoCont();
        mainBox.style.height = 82.5 + 'vh';
        mainBox.style.marginBottom = 0;
    }


})



