/*sentiment analysis*/

// const Twitter = require('twitter-lite');

// (async function() {
//     const user = new Twitter({
//         consumer_key: "YOUR_API_KEY",
//         consumer_secret: "YOUR_API_SECRET",
//     });

//     try {
//         let response = await user.getBearerToken();
//         const app = new Twitter({
//             bearer_token: response.access_token,
//         });

//         // Search for recent tweets from the twitter API
//         response = await app.get(`/search/tweets`, {
//             q: "Lionel Messi", // The search term
//             lang: "tr",        // Let's only get Turkish tweets
//             count: 100,        // Limit the results to 100 tweets
//         });

//         // Loop over all the tweets and print the text
//         for (tweet of response.statuses) {
//             console.dir(tweet.text);
//         }
//     } catch(e) {
//         console.log("There was an error calling the Twitter API");
//         console.dir(e);
//     }
// })();

/*sentiment analysis*/


const Sentiment = require('sentiment');
const SentTur = require('sentiment-turkish');

sentiment = new Sentiment();

var trLanguage = {
    labels: { 'iyi':2, 'kötü değil':1}
};
sentiment.registerLanguage('tr', trLanguage);
var result = sentiment.analyze('ali kötü değil', { language: 'tr' });
console.log(result);

console.log("diğreri");
result = sentiment.analyze('ali palabıyık iyi', { language: 'tr' });
console.log(result);