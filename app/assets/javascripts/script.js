var botaoSobre = document.getElementById('botaoSobre');
var botaoSobre2 = document.getElementById('botaoSobre2');

botaoSobre.addEventListener('click', function() {
	var container = document.getElementById('right-content-id');
	classie.toggle(container, 'hide-right-content');
});

botaoSobre2.addEventListener('click', function() {
	var container = document.getElementById('right-content-id');
	classie.toggle(container, 'hide-right-content');
});
