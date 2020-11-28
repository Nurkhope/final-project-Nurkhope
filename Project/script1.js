/*Mark-Model car*/
let mark = ["Toyota","Nissan","Honda","Hyundai"];
let model_by_mark = {"Toyota":["RAV4","Camry","Land Cruiser"],"Nissan":["X-Trail","Qashqai","Murano"],"Honda":["CR-V","Civic","Accord"],"Hyundai":["Solaris","Tucson","Creta"]};

let markSelect = document.querySelector('#marks');
let modelSelect = document.querySelector('#models');

for (let i = 0; i < mark.length; i++) {
	markSelect.add(new Option(mark[i]));
}

markSelect.addEventListener('change', function() {
	let model = model_by_mark[this.value];
	modelSelect.length = 0;

	for (let i = 0; i < model.length; i++) {
		modelSelect.add(new Option(model[i]));
	}
});

/*Phone number input*/
window.addEventListener("DOMContentLoaded", function() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

/*Mask for phone number */
function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    var input = document.querySelector("#phone1");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
});

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
