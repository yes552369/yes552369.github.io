let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/hehua.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//输入名字
function setUserName() {
  let myName = prompt("请输入你的名字");
  localStorage.setItem("name", myName);
  myHeading.textContent = "nb " + myName;
}

//以前是否存在
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "nb " + storedName;
}

//设置新名字
myButton.onclick = function () {
  setUserName();
};

// 检验是否有值
function setUserName() {
  let myName = prompt("请输入你的名字");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "nb " + myName;
  }
}
