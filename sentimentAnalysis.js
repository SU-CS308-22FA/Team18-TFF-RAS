// const language = require('@google-cloud/language');
import language from '@google-cloud/language';

const languageClient = new language.LanguageServiceClient();

async function getSentimentScore(text) {
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    const [result] = await languageClient.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
    console.log(sentiment.score);
    return sentiment.score;
}
export default {getSentimentScore};