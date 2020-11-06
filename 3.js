var pages = [ 

"pintergram.blogspot.com",
"surgajanda.blogspot.com",
"dagelanpedia.blogspot.com",
"pinogram.blogspot.com",
"pinmotivasi.blogspot.com",
"keepopedia.blogspot.com",
"sejutashare.blogspot.com",
"jandacantikkaya.blogspot.com",
"setahunbaru.blogspot.com",
"beritanasional6.blogspot.com",
"bikinmasakan.blogspot.com",
"indonesiwa.blogspot.com",
"carijandaonline.blogspot.com",
"beritanesiya.blogspot.com",
"sejutakuota.blogspot.com",
"jutaanjanda.blogspot.com",
"sejutakita.blogspot.com",
"viralindongsay.blogspot.com",
"jandamudaseksi.blogspot.com",
"hasdukmerahputih.blogspot.com",
"piniterest.blogspot.com",
"bayarpedia.blogspot.com",
"kuotagram.blogspot.com",
"pejuangpramuka.blogspot.com",

function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
