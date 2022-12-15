const mongoose = require('mongoose');
const cron = require('node-cron');
const express = require('express');
const ref = require("./tff-bot-refereeID")
const match = require("./tff-bot-matchID");
const app = express();
const Referee = require('./refShcema')



mongoose.connect("mongodb+srv://cs308team18:BestTeamThereEverWasTeam18@tff-ras.q9epijv.mongodb.net/?retryWrites=true&w=majority");

// cron.schedule('7 * * * *', async() => {
// 	console.log('running for refreshing');
// 	ref.fillRefs();
// });

// cron.schedule('27 * * * *', async() => {
// 	console.log('running for refreshing');
// 	ref.refreshRefs();
// });

app.get('/api/test', async(req, res)=>{
	res.send("helloamk");
	ref.refreshRefs();
	
});


app.get('/api/sentiment', async(req, res)=>{
	res.send("helloamk");
	ref.refreshRefs();
	
});

// testID=["959285","2100056","1621805"]
app.get('/api/delete', async(req, res)=>{
	res.send("hello");
	
});

app.get('/api/match/:id', async(req, res)=>{
	let data  = await match.leechWithMatchID(req.params.id);
	console.log(data);
	res.json(data);
});

app.get('/api/referee/:id', async(req, res)=>{
	let data  = await ref.leechWithRefID(req.params.id);
	console.log(data);
	res.json(data);
});

app.get('/api/filldb/', async(req, res)=>{
	let data  = await ref.fillRefs();
	res.send(data);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening on ${port}`));