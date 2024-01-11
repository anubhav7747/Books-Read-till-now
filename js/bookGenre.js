const myHome = () => {
    location.href = "/index.html";
}


const apiKey = "r7xHvkwMFFz7QBEVfyrJqA==JcyAoiMNrE4AqqeW";

const quote1Element = document.getElementById("quote1");
const quote2Element = document.getElementById("quote2");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";

getQuote = async () => {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    quote1Element.innerText = "“" + data[0].quote + "”";
    quote2Element.innerText = "— " + data[0].author;
}

getQuote();

setInterval(getQuote, 5000);