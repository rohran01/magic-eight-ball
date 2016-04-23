//MODULE TO SELECT WHICH QUOTE GETS RETURNED AS ANSWER//

var randomQuoteSelector = function(quotesToSelectFrom) {

    var max = quotesToSelectFrom.length;
    var min = 1;

    var randomIndex = Math.floor(Math.random() * (1 + max - min) + min);
    var quoteToSend = {answer: quotesToSelectFrom[randomIndex - 1].answer, quote: quotesToSelectFrom[randomIndex - 1].quote};

    return quoteToSend;
};

module.exports = randomQuoteSelector;
