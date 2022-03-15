/*
Add the following elements to the container using ONLY JavaScript
 and the DOM methods shown above.

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the 
   following elements inside of it:
  1. another <h1> that says “I’m in a div”
  2. a <p> that says “ME TOO!”
  3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

function createPara(content, style){
    const para = document.createElement('p');
    para.style.cssText = style;
    para.textContent = content;
    return para;
};

function createH3(content, style){
    const tH3 = document.createElement('h3');
    tH3.textContent = content;
    tH3.style.cssText = style;
    return tH3;
};

function createDiv(content, style){
    const div = document.createElement('div');
    div.style.cssText = style;
    div.innerHTML = content;
    return div;
};

function creatingContent(){
    const body = document.querySelector('body');
    
    body.appendChild(createPara("Hey, I'm red!", 'color:red'));
    body.appendChild(createH3("I'm a blue H3", 'color:blue;'));
    body.appendChild(createDiv("<h1>In the Div</h1><p>ME TOO</p>", 'background:pink; border: 1px solid black;'));
};
window.onload = creatingContent;

/* 1st solution

function createPara(content, style){
    const para = document.createElement('p');
    para.style.cssText = style;
    para.textContent = content;
    return para;
}

function creatingContent(){
    const body = document.querySelector('body');
    const div = document.createElement('div')
    const tH3 = document.createElement('h3');
    const tH1 = document.createElement('h1');
    
    body.appendChild(createPara("Hey, I'm red!", 'color:red'));
    
    tH3.style.cssText = 'color:blue;';
    tH3.textContent = "I'm a blue H3";
    body.appendChild(tH3);

    div.style.cssText = 'background:pink; border: 1px solid black;';

    tH1.textContent = "I'm in div!"
    div.appendChild(tH1);
    div.appendChild(createPara("MEE TOO!"));
    body.appendChild(div);
}
 */