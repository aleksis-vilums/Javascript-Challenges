function ready() {
    spam.onclick = function() {
        console.log("Clicked")
        
        let huz = document.createElement('p');
        huz.innerHTML = "Huzzah!";

        empty.append(huz);
    }
}

document.addEventListener("DOMContentLoaded", ready);