const myHome = () => {
    location.href = "index.html";
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

setTimeout(randomQuote1, 5000);
setTimeout(randomQuote2, 10000);
setTimeout(randomQuote3, 15000);
setTimeout(randomQuote4, 20000);
setTimeout(randomQuote5, 25000);
