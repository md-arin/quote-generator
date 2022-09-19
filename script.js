const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//Show Loading
function loading(){
    loader.hidden= false;
    quoteContainer.hidden=true;
}

//Hide loading

function complete(){
    quoteContainer.hidden = false;
    loader.hideen=true;

}

function newQuote(){
    let randomNUmber = Math.floor(Math.random()* apiQuotes.length);
    let quote = apiQuotes[randomNUmber];
    // authorText.textContent = quote.author;
        function checkAuthor(){
        if(quote.author===null){
            return authorText.textContent = "Unknown";
        } else{
            return authorText.textContent = quote.author;
        }
    }
    checkAuthor();

    // Chechking quote length to determine styling

        if(quote.text.length>80){
            quoteText.classList.add('long-quote')
        } else{
            quoteText.classList.remove('long-quote')
        }

        //set Quote, Hide loader
    quoteText.textContent = quote.text;
}


// Get Quotes From API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        alert(error )
    }
} 

//Tweet Quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);





//On load
 getQuotes();

 







