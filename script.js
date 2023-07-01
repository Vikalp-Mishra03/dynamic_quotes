AOS.init();
const quotes = document.getElementById('quotes')
const author = document.getElementById('author')
const newQ = document.getElementById('newQ')
const tweet = document.getElementById('tweet')
let realData = '';
let quotesData = '';
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} Author:  ${quotesData.author}`
    window.open(tweetPost)
    // let tweetauthor = `https://twitter.com/intent/tweet?text=${quotesData.author}`
    // window.open(tweetauthor)
}
const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 30);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author === null
        ? (author.innerText = 'Unknown')
        : (author.innerText = `${quotesData.author}`);
};
const getQuotes = async () => {
    const api = 'https://type.fit/api/quotes';
    try {
        let data = await fetch(api)
        realData = await data.json()
        getNewQuotes();
        // console.log(realData.length)
        // console.log(realData[0].author)
    } catch (error) { }
};

tweet.addEventListener('click', tweetNow)
newQ.addEventListener('click', getNewQuotes)
getQuotes();