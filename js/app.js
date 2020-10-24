let quotes = [{
	quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
	author: "Viktor E. Frankl"
}, {
	quote: "The last of human freedoms: to choose one's attitude in any given set of circumstances, to choose one's own way.",
	author: "Viktor E. Frankl"
}, {
	quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
	author: "John Kenneth Galbraith"
}, {
	quote: "God save me from my friends. I can protect myself from my enemies.",
	author: "Claude Louis Hector de Villars "
}, {
	quote: "The price of anything is the amount of life you exchange for it.",
	author: "David Thoreau"
}, {
	quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
	author: "Charles Lindbergh"
}, {
	quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
	author: " Tyne Daly"
}, {
	quote: "The ultimate measure of a man is not where he stands in time of comfort and convience, but where he stands at times of challenge and controversy.",
	author: "Martin Luther King jr."
}, {
	quote: "Cowards die many times before their deaths. The valiant never taste of death but once.",
	author: "William Shakespeare"
}, {
	quote: "The journey to greatness often begins the moment that challenge and contribution become important than comfort and ease.",
	author: "Brendon Burchard",
}];
//The quote container and button variables
const button = document.querySelector('button');
const quote = document.querySelector('#quote');
const author = document.querySelector('.author');
let usedQuotes = [];
//A function the returns a random quote
const randomQuoteFunction = () => {
	const randomNum = Math.floor(Math.random() * quotes.length);
    const getQuote = quotes[randomNum];
//Preventing repetition of quotes by slicing called quote and pushing called quote into an empty array for re-population of the quotes array. 
	usedQuotes.push(getQuote);
	quotes.slice(randomNum, 1);
	if (quotes.length === 0) {
		quotes = usedQuotes;
		usedQuotes = []
	}
	return getQuote;
}
//The click eventListener that generates a new quote 
button.addEventListener('click', () => {
	const fullQuote = randomQuoteFunction();
	quote.innerHTML = fullQuote.quote;
	author.innerHTML = '-' + fullQuote.author;
});