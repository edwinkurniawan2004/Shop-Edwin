let container = document.getElementById('mainpage'),
screen = document.getElementById('screen');

screen.addEventListener('change', () =>{
	container.classList.toggle('container');
	
})

// const resize = () =>{	
// 	container.classList.toggle('container');
// }

// addEventListener('change', resize, false);
