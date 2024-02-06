const emociones = { 
    'feliz ': '&#x1F600', 
    'felíz ': '&#x1F600', 
    'enojado ': '&#x1F92C', 
     'mentiroso ':'&#x1F925',
    'loco ':'&#x1F92F',
    'confundido ':'&#x1F615',
    'sorprendido ':'&#x1F632',
    'triste ':'&#x1F62D'
    }
emocionesContinue = 0;
let boxtext = document.getElementsByTagName
    ('textarea')[0];

boxTL = boxtext.value.length;
boxTSS = (a, b) => boxtext.value.substring(a, b);

g = document.createElement('div');
const EmojiSuge = (a) => {
    return a.toLowerCase().replace(/[a-zA-Zá-í-é-ó-ú]+ /g, (e) => {

        if ((a.toLowerCase().lastIndexOf(e) != -1) && (Object.keys(emociones).indexOf(e) != -1)) {
            boxtext.innerHTML = emociones[e];
            
        }
        return emociones[e] || e
    })
}
document.getElementsByTagName
    ('textarea')[0].addEventListener("input", (e) => {
    
       g.innerHTML=EmojiSuge(boxtext.value)
       console.log
        boxtext.value=EmojiSuge(g.textContent)

    })

for(const a of Object.keys(emociones)){
    const li=document.createElement('li');
    li.innerHTML=a+emociones[a];
    document.getElementById('WordsList').appendChild(li)
}
