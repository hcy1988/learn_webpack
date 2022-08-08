import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import pic02 from "../img/03.jpg"

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "helo hcy";

//画像を表示する方法１
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

//画像を表示する方法２
const imgEl = document.createElement("img");
imgEl.src = pic02;

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
