const body = document.querySelector('body');
const img = document.createElement('img');

async function getGiphy(word){
  try{
    const url = 'https://api.giphy.com/v1/gifs/';
    const type = 'translate?';
    const key = 'api_key=G5oNi5lR0E7gMlKDhAyudh2dv074xuCG';
    const getWord = '&s='+word;
    const mode = { mode: 'cors' };
    
    const response = await fetch(url+type+key+getWord, mode);
    const catData = await response.json();
    return catData.data.images.original.url;
  } catch(error){
    console.log(error);
  }
}

async function newcat(){
 img.src = await getGiphy('cats'); 
 body.appendChild(img);
}

newcat()