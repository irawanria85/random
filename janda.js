var pages = [ 

"https://carijandaonline.blogspot.com/p/cari-janda-online.html",
"https://carijandasingle.blogspot.com/p/cari-janda-single.html",
"https://infojandacantik.blogspot.com/p/info-janda-cantik.html",
"https://jandacantikkaya.blogspot.com/p/janda-cantik-kaya.html",
"https://jandamudaseksi.blogspot.com/p/janda-muda-seksi.html",
"https://jandasinglecantik.blogspot.com/p/janda-single-cantik.html",
"https://jandasurga.blogspot.com/p/janda-surga.html",
"https://jomblocurhatonline.blogspot.com/p/jomblo-curhat-online.html",
"https://jutaanjanda.blogspot.com/p/jutaan-janda.html",
"https://kasihjanda.blogspot.com/p/kasih-janda.html",
"https://nomerjanda.blogspot.com/p/nomer-janda.html",
"https://sejutajanda.blogspot.com/p/sejuta-janda.html",
"https://sijandacantik.blogspot.com/p/si-janda-cantik.html",
"https://sijandakembang.blogspot.com/p/si-janda-kembang.html",
"https://surgajanda.blogspot.com/p/surga-janda.html",

];
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
