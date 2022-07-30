function addPar() {
    let div1 = document.getElementById("div1");
    let par = document.getElementsByTagName("p");
    if (par.length < 10) {
        let newP = document.createElement("p");
        newP.innerHTML = "Text-text-textText-text-textText-text-textText-text-textText-text-text";
        div1.appendChild(newP);
    }

    else {
        for (i = 10; i > 0; i--) {
            div1.removeChild(div1.lastChild);
        }
    }
}