var pages = [ 

"https://pintergram.blogspot.com",
"https://surgajanda.blogspot.com",
"https://dagelanpedia.blogspot.com",
"https://pinogram.blogspot.com",
"https://pinmotivasi.blogspot.com",
"https://keepopedia.blogspot.com",
"https://sejutashare.blogspot.com",
"https://jandacantikkaya.blogspot.com",
"https://setahunbaru.blogspot.com",
"https://beritanasional6.blogspot.com",
"https://bikinmasakan.blogspot.com",
"https://indonesiwa.blogspot.com",
"https://carijandaonline.blogspot.com",
"https://beritanesiya.blogspot.com",
"https://sejutakuota.blogspot.com",
"https://jutaanjanda.blogspot.com",
"https://sejutakita.blogspot.com",
"https://viralindongsay.blogspot.com",
"https://jandamudaseksi.blogspot.com",
"https://hasdukmerahputih.blogspot.com",
"https://piniterest.blogspot.com",
"https://bayarpedia.blogspot.com",
"https://kuotagram.blogspot.com",
"https://pejuangpramuka.blogspot.com",
"https://spewehascouter.blogspot.com",

];
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
