var pages = [ 

"https://bayarpedia.blogspot.com/p/bayarpedia.html",
"https://beritanesiya.blogspot.com/p/beritanesiya.html",
"https://bikinmasakan.blogspot.com/p/bikin-masakan.html",
"https://carijandaonline.blogspot.com/p/cari-janda-online.html",
"https://dagelanpedia.blogspot.com/p/dagelanpedia.html",
"https://indonesiwa.blogspot.com/p/indonesiwa.html",
"https://jandacantikkaya.blogspot.com/p/janda-cantik-kaya.html",
"https://jandamudaseksi.blogspot.com/p/janda-muda-seksi.html",
"https://jutaanjanda.blogspot.com/p/jutaan-janda.html",
"https://keepopedia.blogspot.com/p/keepopedia.html",
"https://kuotagram.blogspot.com/p/kuotagram.html",
"https://piniterest.blogspot.com/p/piniterest.html",
"https://pinogram.blogspot.com/p/pinogram.html",
"https://pintergram.blogspot.com/p/pintergram.html",
"https://safetemplates.blogspot.com/p/safetemplates.html",
"https://sejutakita.blogspot.com/p/sejuta-kita.html",
"https://sejutakuota.blogspot.com/p/sejuta-kuota.html",
"https://sejutashare.blogspot.com/p/sejuta-share.html",
"https://setahunbaru.blogspot.com/p/setahun-baru.html",
"https://sijandakembang.blogspot.com/p/sijanda-kembang.html",
"https://surgajanda.blogspot.com/p/surga-janda.html",
"https://viralindongsay.blogspot.com/p/viralindongsay.html",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
