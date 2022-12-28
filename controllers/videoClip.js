import fetch from 'node-fetch';
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function Tr2En(text){
  var Maps = {
      "İ":"I","Ş":"S","Ç":"C","Ğ":"G","Ü":"U","Ö":"O",
      "ı":"i","ş":"s","ç":"c","ğ":"g","ü":"u","ö":"o"
  };
  Object.keys(Maps).forEach(function(Old){
      text    = text.replace(Old,Maps[Old]);
  });
  return text;
}

function isSame(webPage, bein) {
  webPage = Tr2En(webPage).toLowerCase();
  bein = Tr2En(bein).toLowerCase();
  if (bein.indexOf(webPage)!==-1) {
    return true;
  }
  return false;
}

async function getVideoUrl(vidAPI) {
  let response = await fetch(vidAPI, requestOptions);
  return response.url;
}


async function getMatchWithHighlights(homeTeam, awayTeam, round) {
  let response = await fetch('https://beinsports.com.tr/api/highlights/events?sp=1&o=18&s=3438&r='+round+'&st=0', requestOptions);
  let data = await response.json();
  for (let i = 0; i < data.Data.events.length; i++) {
      const element = data.Data.events[i];
      if (isSame(homeTeam, element.homeTeam.name) && isSame(awayTeam, element.awayTeam.name)) {
        let home = {name: element.homeTeam.name, logo:element.homeTeam.logo, score: element.homeTeam.matchScore};
        let away = {name: element.awayTeam.name, logo:element.awayTeam.logo, score: element.awayTeam.matchScore};
        let match={home: home, away:away, date:element.matchDate};
        let eventsOfMatch = []
        for (let k = 0; k < element.matchEvents.length; k++) {
          const elem = element.matchEvents[k];
          let event = {
            minute: elem.minute,
            videoUrl:elem.videoUrl,
            description:elem.description,
            side:elem.eventTeamSide
          };
          eventsOfMatch.push(event);
        }
        match.events = eventsOfMatch;
        console.log(match);
        return match;
    }
  }
}

// console.log(await getMatchWithHighlights("Kayserispor", "Konyaspor", "14"));

// console.log(isSame("Fatih Karagümrük", "VavaCars Fatih Karagümrük"))

export default {getMatchWithHighlights, getVideoUrl};
// console.log(await getVideoUrl('https://switch.dt.ercdn.com/api/er/Get?ai=636&ar=ligtvcomtr_tauri_haber_22_11_kara_net_13kas_ip&ak=null&switch=castup&customerid=1&format=4&action=redirect&secure=1'));