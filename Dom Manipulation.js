document.getElementById('container');
document.querySelector('#container');
document.getElementsByClassName('second');
document.querySelector('ol.third');
const container = document.getElementById('container');
container.innerText = "Hello!"
const footer = document.getElementsByClassName('footer');
footer.clasName += ' main';
footer.setAttribute('footer');
const newLi = document.createElement('li');
newLi.innerText = "four";
const ul = querySelector('ul');
ul.append(newLi);
const ol = querySelector('ol');
for (let i = 0; i < ol.length; ol++) {
    ol[i].style.backgroundColor = "green";
}
footer.remove();

