const memberAlexis = document.querySelector(".al");
const memberLuis = document.querySelector(".lu");
const memberMichelle = document.querySelector(".mi");
const pictureAl = document.querySelector(".imgAl")
const pictureMi = document.querySelector(".imgMi")
const pictureLu = document.querySelector(".imgLu")

memberAlexis.addEventListener("mouseover",(event) => {showPerfil('alexis')}); 
memberAlexis.addEventListener("mouseleave",(event) => {hidePerfil('alexis')});

memberMichelle.addEventListener("mouseover",(event) => {showPerfil('michelle')}); 
memberMichelle.addEventListener("mouseleave",(event) => {hidePerfil('michelle')});

memberLuis.addEventListener("mouseover",(event) => {showPerfil('luis')}); 
memberLuis.addEventListener("mouseleave",(event) => {hidePerfil('luis')});

function showPerfil(member){
    console.log("Capturado show");
    switch (member){
        case 'alexis': {
            pictureAl.classList.remove('ocultar');
            break;}
        case 'michelle':{
            pictureMi.classList.toggle('ocultar');
            break;
        }
        case 'luis':{
            pictureLu.classList.toggle('ocultar');
            break;
        }
    }
    
}

function hidePerfil(member){
    console.log("Capturado hide");
    switch (member){
        case 'alexis': {
            pictureAl.classList.add('ocultar');
            break;}
        case 'michelle':{
            pictureMi.classList.add('ocultar');
            break;
        }
        case 'luis':{
            pictureLu.classList.add('ocultar')
            break;
        }
    }
}