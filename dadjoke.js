

fetch("https://icanhazdadjoke.com/", {
    headers: {
        "Accept": "application/json"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let bodyElm = document.querySelector("body");
        let listElm = document.createElement("ul")
        listElm.classList.add("dad-joke")

        listElm.innerHTML = `<li>${data.joke}</li>`
       

        bodyElm.append(listElm);

    })






