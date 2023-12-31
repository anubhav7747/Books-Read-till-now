const myHome = () => {
    location.href = "/index.html";
}


randomQuote1 = () => {
    document.getElementById('quote1').innerHTML = '"One must always be careful of books, and what is inside them, for words have the power to change us."';
    document.getElementById('quote2').innerText = '— Cassandra Clare, Clockwork Angel';
}

randomQuote2 = () => {
    document.getElementById('quote1').innerHTML = '"A book is a gift you can open again and again."';
    document.getElementById('quote2').innerText = '— Garrison Kellorcool';
}

randomQuote3 = () => {
    document.getElementById('quote1').innerHTML = '"Reading is essential for those who seek to rise about the ordinary."';
    document.getElementById('quote2').innerText = '— Jim Rohn';
}

randomQuote4 = () => {
    document.getElementById('quote1').innerHTML = '"A room without books is like a body without a soul.';
    document.getElementById('quote2').innerText = '— Cicero';
}

randomQuote5 = () => {
    document.getElementById('quote1').innerHTML = '"If you would tell me the heart of a man, tell me not what he reads, but what he rereads."';
    document.getElementById('quote2').innerText = '— François Mauriac';
}

randomQuote6 = () => {
    document.getElementById('quote1').innerHTML = '"Books and doors are the same thing. You open them, and you go through into another world."';
    document.getElementById('quote2').innerText = '— Jeanette Winterson';
}


const functionArray = [randomQuote1, randomQuote2, randomQuote3, randomQuote4, randomQuote5, randomQuote6];

getRandomFunction = (array) => {
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * array.length);
  
    // Access and return the function at the random index
    return array[randomIndex];
}
  
callRandomFunctionInLoop = () => {
    const randomFunction = getRandomFunction(functionArray);
    randomFunction();
  
    // Set a timeout to call the function again after a delay (e.g., 4000 milliseconds)
    setTimeout(callRandomFunctionInLoop, 4000);
}
  
// Start the infinite loop
callRandomFunctionInLoop();


// setTimeout(randomQuote1, 4000);
// setTimeout(randomQuote2, 8000);
// setTimeout(randomQuote3, 12000);
// setTimeout(randomQuote4, 16000);
// setTimeout(randomQuote5, 20000);
