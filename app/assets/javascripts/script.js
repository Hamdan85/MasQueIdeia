var botaoSobre = document.getElementById('botaoSobre');
var botaoSobre2 = document.getElementById('botaoSobre2');
var botaoRegistro = document.getElementById('registro');
var botaoLogin = document.getElementById('login');

botaoSobre.addEventListener('click', function() {
	var container = document.getElementById('right-content-id');
	classie.toggle(container, 'hide-right-content');
});

botaoRegistro.addEventListener('click', function(){
    var modalRegister = document.getElementById('modalRegister');
    if ( modalRegister.style.visibility == "visible" ) {
        modalRegister.style.visibility = "hidden";
    } else {
        modalRegister.style.visibility = "visible";
    }
})
botaoLogin.addEventListener('click', function(){
    var modalLogin = document.getElementById('modalLogin');
    if ( modalLogin.style.visibility == "visible" ) {
        modalLogin.style.visibility = "hidden";
    } else {
        modalLogin.style.visibility = "visible";
    }
})