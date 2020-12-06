/*PAGE ADVERT script for images*/
document.querySelector("#i1").addEventListener('click', click1);
document.querySelector("#i2").addEventListener('click', click2);
document.querySelector("#i3").addEventListener('click', click3);
document.querySelector("#i4").addEventListener('click', click4);
document.querySelector("#i5").addEventListener('click', click5);

function click1(){
	document.querySelector("#bigImage img").src = document.querySelector("#i1").src;
}
function click2(){
	document.querySelector("#bigImage img").src = document.querySelector("#i2").src;
}
function click3(){
	document.querySelector("#bigImage img").src = document.querySelector("#i3").src;
}
function click4(){
	document.querySelector("#bigImage img").src = document.querySelector("#i4").src;
}
function click5(){
	document.querySelector("#bigImage img").src = document.querySelector("#i5").src;
};
