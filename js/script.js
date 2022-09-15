const jokesContainer = document.querySelector(".container_content");
const container = document.querySelector(".joke_setup");
const featured = document.querySelector(".joke_punchline-media");


const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

async function getList() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log("RESULT", results);

    jokesContainer.innerHTML = "";

    const delivery = results.delivery;
    const category = results.category;
    const joke = results.joke;

    jokesContainer.innerHTML += `<div class="container_content">
                                     <a href="index.html?id=${category}" class="item">
                                              <div>${delivery}</div>
                                              <div class="joke_setup">
                                              <h3>${results.setup}</h3>
                                              
                                              </div>  
                                          </a>
                                      </div>`;
  } catch (error) {
    console.log(error);
  }
}

getList();

