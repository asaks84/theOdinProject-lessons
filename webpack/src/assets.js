import showMessage from './newDependance';
import "./style.scss";
import imgLogo from './tictaclogo.png'

const fuck = (e) => {
  console.log(e.target);
}

function component() {
  const elementDiv = document.createElement('div');
  const para = document.createElement('p');

  const logoImg = new Image();
  logoImg.src = imgLogo;


  para.textContent = showMessage('from Assets with webpack --watch');
  para.innerHTML += "<br><br>";

  elementDiv.appendChild(para);
  elementDiv.appendChild(logoImg);

  const packOfDivs = document.createElement('div');

  for (let i = 0; i <= 9; i++) {
    const miniDiv = document.createElement('div');
    miniDiv.addEventListener('click', fuck);
    packOfDivs.appendChild(miniDiv);
  };

  elementDiv.appendChild(packOfDivs);

  return elementDiv;
};


document.body.appendChild(component());