const myHome = () => {
    location.href = "/index.html";
}


const apiKey = "r7xHvkwMFFz7QBEVfyrJqA==JcyAoiMNrE4AqqeW";
// console.log(apiKey);

const quote1Element = document.getElementById("quote1");
const quote2Element = document.getElementById("quote2");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
};

const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=god";

async function getQuote () {
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    quote1Element.innerText = "“" + data[0].quote + "”";
    quote2Element.innerText = "— " + data[0].author;
    // console.log(data[0].quote);
}

getQuote();

setInterval(getQuote, 5000);