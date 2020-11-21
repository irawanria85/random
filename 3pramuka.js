var pages = [ 
"https://spewehascouter.blogspot.com/",
"https://pejuangpramuka.blogspot.com/",
"https://www.hasdukmerahputih.com/",
];
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
