var produk = {
		"Action-Figure" : [{
			"nama": "Uzumaki Minato",
			"image" : "assets/produk1.jpg",
			"desc" : "Kualitas dari figur ini terjamin dan harga murah meriah.",
			"harga" : 40000
		},
		{
			"nama": "Shinobu Kocho",
			"image" : "assets/produk2.jpg",
			"desc" : "Kualitas dari figur ini terjamin dan harga murah meriah. ",
			"harga" : 50000
		},
		{
			"nama": "Kakashi Hatake",
			"image" : "assets/produk3.jpg",
			"desc" : "Kualitas dari figur ini terjamin dan harga murah meriah.",
			"harga" : 45000
		},
		{
			"nama": "Uzumaki Naruto",
			"image" : "assets/produk4.jpg",
			"desc" : "Kualitas dari figur ini terjamin dan harga murah meriah.",
			"harga" : 70000
		}
	],
		"Manga-Novel" : [{
			"nama": "Kimetsu No Yaiba",
			"image" : "assets/produk5.jpg",
			"desc" : "Merupakan manga dengan jumlah vol 1 - 20.",
			"harga" : 150000
		},
		{
			"nama": "Classroom Elite",
			"image" : "assets/produk6.jpg",
			"desc" : "Merupakan novel dengan jumlah  vol 1 - 11.",
			"harga" : 210000
		},
		{
			"nama": "Tokyo Ravange",
			"image" : "assets/produk7.jpg",
			"desc" : "Merupakan manga dengan jumlah vol 5 - 15.",
			"harga" : 100000
		},
		{
			"nama": "Attack On Titan",
			"image" : "assets/produk8.jpg",
			"desc" : "Merupakan manga dengan jumlah vol 1 - 16.",
			"harga" : 300000
		}
	]
}

for(var key in produk){
	var Judul = document.createElement('h2');
	Judul.className = "mt-3 text-center";
	Judul.innerHTML = key;
	document.getElementById(key).appendChild(Judul);

	var cardGroup = document.createElement('div');
	cardGroup.className = "card-group mt-3 gap-4";
	cardGroup.id = `${key}-produk`;
	document.getElementById(key).appendChild(cardGroup);

	for(var i = 0; i < produk[key].length; i++){
		var namaProduk = produk[key][i].nama;
		var imageProduk = produk[key][i].image;
		var hargaProduk = produk[key][i].harga;
		var descProduk = produk[key][i].desc;

		var card = document.createElement('div');
		card.className = "card text-center";
		card.innerHTML = `
		 <img src=${imageProduk} height="350" class="card-img-top" alt="...">
		 <div class="card-body">
			 <h5 class="card-title">${namaProduk}</h5>
				<p class="card-text">${descProduk}</p>
				<p class="card-text">Harga : Rp.${hargaProduk}</p>
			    <a onclick="chatToAdmin('${namaProduk}', '${descProduk}', '${hargaProduk}')" class="btn btn-primary d-block">Beli Produk</a>
		  </div>`
		document.getElementById(`${key}-produk`).appendChild(card);
	}
}



function chatToAdmin(nama, desc, harga){
	var noHp = "+6281515173887";
	window.open(`https://web.whatsapp.com/send?phone=${noHp}?&text=nama-produk:%20${nama}%0Adeskripsi:%20 ${desc}%0Aharga%20Rp.${harga}%0A%0ATerima%20Kasih%20Sudah%20Membeli`);
}


// JAVASCRIPT CHECKED
let card1 = document.querySelectorAll('.card'),
lightDark = document.getElementById('lightDark'),
navbar = document.querySelector('.navbar'),
alert = document.querySelector('.alert'),
h2 = document.querySelectorAll('h2');

lightDark.addEventListener('change', () => {
		document.body.classList.toggle('colorBody');
		
		navbar.classList.toggle('colorNavbar');

		alert.classList.toggle('colorAlert');
		alert.classList.toggle('text-secondary');
		alert.classList.toggle('text-info');
		
		for(let i = 0; i < card1.length; i++){
		card1[i].classList.toggle('colorCard');
		card1[i].classList.toggle('text-light')
	}
		for(let i = 0; i < h2.length; i++){
			h2[i].classList.toggle('text-info');
		}
	});
