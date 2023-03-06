const imges =["배경화면1.jpeg","배경화면2.jpeg","배경화면3.jpeg"];

const changeImg = imges[Math.floor(Math.random()*imges.length)];

const bgImg = document.createElement("img");

bgImg.src=`img/${changeImg}`;
bgImg.classList.add("change-img");

document.body.appendChild(bgImg);