function newToDoTable() {
  let li = document.createElement("li");
  let inputText = document.getElementById("forText").value;
  let finishedText = document.createTextNode(inputText);
  li.appendChild(finishedText);
  if (inputText) {
  	document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("forText").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
let closeButton = document.querySelectorAll('li')
for (let i = 0; i < closeButton.length; i++) {
	let span = document.createElement('span');
	let txt = document.createTextNode("x");
  	span.className = "close";
  	span.appendChild(txt);
  	closeButton[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let table = this.parentElement;
    table.style.display = "none";
  }
}
let list = document.querySelector('ul');
list.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked');
  	}
  }, false)