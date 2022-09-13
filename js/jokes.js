const jokesContainer = document.querySelector(".jokes-container");


async function getJokes() {
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";

    const res = await fetch(url);
    const data = await res.json();
    const jokes = data.jokes.slice(0,5)

    jokes.forEach(function (joke) {
        const div = document.createElement("div");
        div.innerHTML = `
                <p>${joke.category}</p>
                <p>${joke.setup}</p>
                <p>${joke.delivery}</p>
        `;

        jokesContainer.appendChild(div);
    });

 
}

getJokes();