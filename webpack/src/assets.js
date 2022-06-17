import showMessage from './newDependance';
import "./style.scss";
import imgLogo from './tictaclogo.png'

function component() {
  const elementDiv = document.createElement('div');
  const para = document.createElement('p');
  
  const logoImg = new Image();
  logoImg.src = imgLogo;

  para.textContent = showMessage('from Assets with webpack --watch');
  para.innerHTML += "<br><br>";

  elementDiv.appendChild(para);
  elementDiv.appendChild(logoImg)
  return elementDiv;
};


document.body.appendChild(component());