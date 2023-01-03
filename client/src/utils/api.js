/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import axios from "axios";

const getLatestMatches = async () => {
  try {
    const { data } = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { last: "7", league: "203", season: "2022" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
        },
      }
    );
    const matches = data.response;

    console.log(JSON.stringify(matches));
    return matches;
  } catch (error) {
    console.log("ERROR");
    return [];
  }
};

const getMatches = async (date) => {
  try {
    const { data } = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { date, league: "203", season: "2022" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
        },
      }
    );
    const matches = data.response;

    console.log(JSON.stringify(matches));
    return matches;
    return [
      {
        fixture: {
          id: 884448,
          referee: "A. Bitigen",
          timezone: "UTC",
          date: "2022-11-06T14:00:00+00:00",
          timestamp: 1667743200,
          periods: { first: 1667743200, second: 1667746800 },
          venue: { id: 19220, name: "Corendon Airlines Park", city: "Antalya" },
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        league: {
          id: 203,
          name: "Süper Lig",
          country: "Turkey",
          logo: "https://media.api-sports.io/football/leagues/203.png",
          flag: "https://media.api-sports.io/flags/tr.svg",
          season: 2022,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 1005,
            name: "Antalyaspor",
            logo: "https://media-2.api-sports.io/football/teams/1005.png",
            winner: true,
          },
          away: {
            id: 3589,
            name: "Fatih Karagümrük",
            logo: "https://media-2.api-sports.io/football/teams/3589.png",
            winner: false,
          },
        },
        goals: { home: 4, away: 2 },
        score: {
          halftime: { home: 3, away: 2 },
          fulltime: { home: 4, away: 2 },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null },
        },
      },
      {
        fixture: {
          id: 884451,
          referee: "Z. Küçük",
          timezone: "UTC",
          date: "2022-11-06T17:00:00+00:00",
          timestamp: 1667754000,
          periods: { first: 1667754000, second: 1667757600 },
          venue: {
            id: 19221,
            name: "Şenol Güneş Spor Kompleksi",
            city: "Trabzon",
          },
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        league: {
          id: 203,
          name: "Süper Lig",
          country: "Turkey",
          logo: "https://media.api-sports.io/football/leagues/203.png",
          flag: "https://media.api-sports.io/flags/tr.svg",
          season: 2022,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
            winner: null,
          },
          away: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
            winner: null,
          },
        },
        goals: { home: 2, away: 2 },
        score: {
          halftime: { home: 2, away: 1 },
          fulltime: { home: 2, away: 2 },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null },
        },
      },
      {
        fixture: {
          id: 884452,
          referee: "E. Özdamar",
          timezone: "UTC",
          date: "2022-11-06T11:30:00+00:00",
          timestamp: 1667734200,
          periods: { first: 1667734200, second: 1667737800 },
          venue: { id: 2375, name: "Gaziantep Stadyumu", city: "Gaziantep" },
          status: { long: "Match Finished", short: "FT", elapsed: 90 },
        },
        league: {
          id: 203,
          name: "Süper Lig",
          country: "Turkey",
          logo: "https://media.api-sports.io/football/leagues/203.png",
          flag: "https://media.api-sports.io/flags/tr.svg",
          season: 2022,
          round: "Regular Season - 13",
        },
        teams: {
          home: {
            id: 3573,
            name: "Gazişehir Gaziantep",
            logo: "https://media-2.api-sports.io/football/teams/3573.png",
            winner: false,
          },
          away: {
            id: 1001,
            name: "Kayserispor",
            logo: "https://media-2.api-sports.io/football/teams/1001.png",
            winner: true,
          },
        },
        goals: { home: 1, away: 2 },
        score: {
          halftime: { home: 0, away: 1 },
          fulltime: { home: 1, away: 2 },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null },
        },
      },
    ];
  } catch (error) {
    console.log("ERROR");
    return [];
  }
};

const getMatch = async (matchId) => {
  try {
    const { data } = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      {
        params: { id: matchId },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API_ACCESS_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_FOOTBALL_API_HOST,
        },
      }
    );

    console.log(JSON.stringify(data.response[0]));
    return data.response[0];
    return {
      fixture: {
        id: 884451,
        referee: "Z. Küçük",
        timezone: "UTC",
        date: "2022-11-06T17:00:00+00:00",
        timestamp: 1667754000,
        periods: { first: 1667754000, second: 1667757600 },
        venue: {
          id: 19221,
          name: "Şenol Güneş Spor Kompleksi",
          city: "Trabzon",
        },
        status: { long: "Match Finished", short: "FT", elapsed: 90 },
      },
      league: {
        id: 203,
        name: "Süper Lig",
        country: "Turkey",
        logo: "https://media.api-sports.io/football/leagues/203.png",
        flag: "https://media.api-sports.io/flags/tr.svg",
        season: 2022,
        round: "Regular Season - 13",
      },
      teams: {
        home: {
          id: 998,
          name: "Trabzonspor",
          logo: "https://media-2.api-sports.io/football/teams/998.png",
          winner: null,
        },
        away: {
          id: 607,
          name: "Konyaspor",
          logo: "https://media-2.api-sports.io/football/teams/607.png",
          winner: null,
        },
      },
      goals: { home: 2, away: 2 },
      score: {
        halftime: { home: 2, away: 1 },
        fulltime: { home: 2, away: 2 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null },
      },
      events: [
        {
          time: { elapsed: 13, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 2664, name: "Mahmoud Trezeguet" },
          assist: { id: null, name: null },
          type: "Var",
          detail: "Penalty confirmed",
          comments: null,
        },
        {
          time: { elapsed: 14, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 607, name: "A. Bakasetas" },
          assist: { id: null, name: null },
          type: "Goal",
          detail: "Penalty",
          comments: null,
        },
        {
          time: { elapsed: 14, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 61986, name: "Adil Demirbağ" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 26, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 40452, name: "Konrad Michalak" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Handball",
        },
        {
          time: { elapsed: 27, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 2664, name: "Trézéguet" },
          assist: { id: null, name: null },
          type: "Goal",
          detail: "Penalty",
          comments: null,
        },
        {
          time: { elapsed: 35, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 61810, name: "A. Oğuz" },
          assist: { id: 50141, name: "C. Karayel" },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: { elapsed: 36, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 1486, name: "Bruno Paz" },
          assist: { id: 44877, name: "U. Ikpeazu" },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: { elapsed: 45, extra: 8 },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 19511, name: "M. Diouf" },
          assist: { id: null, name: null },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: { elapsed: 46, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 49883, name: "A. Ömür" },
          assist: { id: 50234, name: "Y. Erdoğan" },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: { elapsed: 54, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 19511, name: "M. Diouf" },
          assist: { id: 50006, name: "A. Hadžiahmetović" },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: { elapsed: 60, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 2615, name: "M. Gómez" },
          assist: { id: 21447, name: "U. Bozok" },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: { elapsed: 60, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 49876, name: "H. Türkmen" },
          assist: { id: 2733, name: "J. Larsen" },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: { elapsed: 67, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 67, name: "S. Denswil" },
          assist: { id: 44448, name: "Djaniny" },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: { elapsed: 70, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 50141, name: "Cebrail Karayel" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 79, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 44877, name: "Uche Ikpeazu" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 81, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 12994, name: "M. Hamšík" },
          assist: { id: 47461, name: "E. Bardhi" },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
        {
          time: { elapsed: 81, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 40452, name: "K. Michalak" },
          assist: { id: 61939, name: "O. Ülgün" },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: { elapsed: 82, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 44877, name: "Uche Ikpeazu" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Red Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 82, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 44877, name: "Uche Ikpeazu" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 85, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 39137, name: "Z. Bytyqi" },
          assist: { id: 50063, name: "U. Yazğılı" },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: { elapsed: 87, extra: null },
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          player: { id: 50063, name: "Uğurcan Yazğılı" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 88, extra: null },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 1561, name: "Marc Bartra" },
          assist: { id: null, name: null },
          type: "Var",
          detail: "Penalty cancelled",
          comments: null,
        },
        {
          time: { elapsed: 90, extra: 3 },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 21447, name: "Umut Bozok" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: { elapsed: 90, extra: 11 },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 2664, name: "Mahmoud Trezeguet" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Argument",
        },
        {
          time: { elapsed: 90, extra: 12 },
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          player: { id: 607, name: "Anastasios Bakasetas" },
          assist: { id: null, name: null },
          type: "Card",
          detail: "Yellow Card",
          comments: "Argument",
        },
      ],
      lineups: [
        {
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
            colors: {
              player: { primary: "00ccff", number: "ffffff", border: "00ccff" },
              goalkeeper: {
                primary: "66ff00",
                number: "000000",
                border: "66ff00",
              },
            },
          },
          coach: {
            id: 1438,
            name: "A. Avcı",
            photo: "https://media-2.api-sports.io/football/coachs/1438.png",
          },
          formation: "4-2-3-1",
          startXI: [
            {
              player: {
                id: 49866,
                name: "U. Çakır",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 30398,
                name: "Vitor Hugo",
                number: 13,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 1561,
                name: "Marc Bartra",
                number: 3,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 67,
                name: "S. Denswil",
                number: 24,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 49876,
                name: "H. Türkmen",
                number: 4,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 12994,
                name: "M. Hamšík",
                number: 17,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 607,
                name: "A. Bakasetas",
                number: 11,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 2664,
                name: "Trézéguet",
                number: 27,
                pos: "M",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 3240,
                name: "J. Gbamin",
                number: 25,
                pos: "M",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 49883,
                name: "A. Ömür",
                number: 10,
                pos: "M",
                grid: "4:1",
              },
            },
            {
              player: {
                id: 2615,
                name: "M. Gómez",
                number: 30,
                pos: "F",
                grid: "5:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 50234,
                name: "Y. Erdoğan",
                number: 32,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 21447,
                name: "U. Bozok",
                number: 9,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 2733,
                name: "J. Larsen",
                number: 19,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 44448,
                name: "Djaniny",
                number: 21,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 47461,
                name: "E. Bardhi",
                number: 29,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 182463,
                name: "M. Lahtimi",
                number: 80,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 37887,
                name: "D. Haspolat",
                number: 34,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 56114,
                name: "E. Siopis",
                number: 6,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 135934,
                name: "T. Tepe",
                number: 54,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 161894,
                name: "N. Ünüvar",
                number: 23,
                pos: "F",
                grid: null,
              },
            },
          ],
        },
        {
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
            colors: {
              player: { primary: "006f00", number: "ffffff", border: "006f00" },
              goalkeeper: {
                primary: "ff9900",
                number: "000000",
                border: "ff9900",
              },
            },
          },
          coach: {
            id: 15478,
            name: "İ. Palut",
            photo: "https://media-2.api-sports.io/football/coachs/15478.png",
          },
          formation: "4-1-4-1",
          startXI: [
            {
              player: {
                id: 50192,
                name: "I. Šehić",
                number: 13,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 40472,
                name: "Guilherme",
                number: 12,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 2830,
                name: "F. Calvo",
                number: 15,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 61810,
                name: "A. Oğuz",
                number: 22,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 61986,
                name: "A. Demirbağ",
                number: 4,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 39137,
                name: "Z. Bytyqi",
                number: 7,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 62915,
                name: "S. Dikmen",
                number: 14,
                pos: "M",
                grid: "4:4",
              },
            },
            {
              player: {
                id: 50006,
                name: "A. Hadžiahmetović",
                number: 18,
                pos: "M",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 1486,
                name: "Bruno Paz",
                number: 80,
                pos: "M",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 40452,
                name: "K. Michalak",
                number: 77,
                pos: "M",
                grid: "4:1",
              },
            },
            {
              player: {
                id: 19511,
                name: "M. Diouf",
                number: 99,
                pos: "F",
                grid: "5:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 50141,
                name: "C. Karayel",
                number: 90,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 44877,
                name: "U. Ikpeazu",
                number: 29,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 61939,
                name: "O. Ülgün",
                number: 35,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 50063,
                name: "U. Yazğılı",
                number: 5,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 14296,
                name: "R. Murić",
                number: 11,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 63225,
                name: "K. Demirtaş",
                number: 20,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 61924,
                name: "E. Erentürk",
                number: 1,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 301582,
                name: "M. Büyüksayar",
                number: 42,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 14288,
                name: "D. Pavičić",
                number: 10,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 49987,
                name: "Amilton",
                number: 93,
                pos: "F",
                grid: null,
              },
            },
          ],
        },
      ],
      statistics: [
        {
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
          },
          statistics: [
            { type: "Shots on Goal", value: 8 },
            { type: "Shots off Goal", value: 5 },
            { type: "Total Shots", value: 21 },
            { type: "Blocked Shots", value: 8 },
            { type: "Shots insidebox", value: 14 },
            { type: "Shots outsidebox", value: 7 },
            { type: "Fouls", value: 13 },
            { type: "Corner Kicks", value: 5 },
            { type: "Offsides", value: 3 },
            { type: "Ball Possession", value: "60%" },
            { type: "Yellow Cards", value: 3 },
            { type: "Red Cards", value: null },
            { type: "Goalkeeper Saves", value: 3 },
            { type: "Total passes", value: 537 },
            { type: "Passes accurate", value: 468 },
            { type: "Passes %", value: "87%" },
          ],
        },
        {
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
          },
          statistics: [
            { type: "Shots on Goal", value: 5 },
            { type: "Shots off Goal", value: 2 },
            { type: "Total Shots", value: 10 },
            { type: "Blocked Shots", value: 3 },
            { type: "Shots insidebox", value: 6 },
            { type: "Shots outsidebox", value: 4 },
            { type: "Fouls", value: 16 },
            { type: "Corner Kicks", value: 3 },
            { type: "Offsides", value: 1 },
            { type: "Ball Possession", value: "40%" },
            { type: "Yellow Cards", value: 6 },
            { type: "Red Cards", value: 1 },
            { type: "Goalkeeper Saves", value: 6 },
            { type: "Total passes", value: 352 },
            { type: "Passes accurate", value: 279 },
            { type: "Passes %", value: "79%" },
          ],
        },
      ],
      players: [
        {
          team: {
            id: 998,
            name: "Trabzonspor",
            logo: "https://media-2.api-sports.io/football/teams/998.png",
            update: "2022-11-15T04:10:16+00:00",
          },
          players: [
            {
              player: {
                id: 49866,
                name: "Uğurcan Çakır",
                photo:
                  "https://media-2.api-sports.io/football/players/49866.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 1,
                    position: "G",
                    rating: "6.5",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: { total: null, conceded: 2, assists: null, saves: 3 },
                  passes: { total: 18, key: null, accuracy: "8" },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: 1, won: 1 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 49876,
                name: "Hüseyin Türkmen",
                photo:
                  "https://media-2.api-sports.io/football/players/49876.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 60,
                    number: 4,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 29, key: null, accuracy: "27" },
                  tackles: { total: 4, blocks: null, interceptions: 3 },
                  duels: { total: 6, won: 5 },
                  dribbles: { attempts: null, success: null, past: 1 },
                  fouls: { drawn: 1, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1561,
                name: "Marc Bartra",
                photo:
                  "https://media-2.api-sports.io/football/players/1561.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 3,
                    position: "D",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: { total: 1, on: 1 },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 64, key: null, accuracy: "58" },
                  tackles: { total: 3, blocks: null, interceptions: 1 },
                  duels: { total: 15, won: 9 },
                  dribbles: { attempts: 1, success: 1, past: 1 },
                  fouls: { drawn: 1, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 30398,
                name: "Vitor Hugo",
                photo:
                  "https://media-2.api-sports.io/football/players/30398.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 13,
                    position: "D",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 58, key: 1, accuracy: "56" },
                  tackles: { total: 4, blocks: 1, interceptions: 1 },
                  duels: { total: 5, won: 4 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 67,
                name: "Stefano Denswil",
                photo: "https://media-2.api-sports.io/football/players/67.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 67,
                    number: 24,
                    position: "D",
                    rating: "6.7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 29, key: 1, accuracy: "26" },
                  tackles: { total: null, blocks: 1, interceptions: null },
                  duels: { total: 2, won: 2 },
                  dribbles: { attempts: 1, success: 1, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 3240,
                name: "Jean-Philippe Gbamin",
                photo:
                  "https://media-2.api-sports.io/football/players/3240.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 25,
                    position: "M",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 62, key: 4, accuracy: "52" },
                  tackles: { total: 3, blocks: null, interceptions: 2 },
                  duels: { total: 16, won: 8 },
                  dribbles: { attempts: 3, success: 3, past: 1 },
                  fouls: { drawn: 1, committed: 3 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 12994,
                name: "Marek Hamšík",
                photo:
                  "https://media-2.api-sports.io/football/players/12994.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 81,
                    number: 17,
                    position: "M",
                    rating: "7.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: 1, on: 1 },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 62, key: 1, accuracy: "58" },
                  tackles: { total: 2, blocks: null, interceptions: null },
                  duels: { total: 3, won: 2 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 49883,
                name: "Abdülkadir Ömür",
                photo:
                  "https://media-2.api-sports.io/football/players/49883.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 45,
                    number: 10,
                    position: "M",
                    rating: "6.5",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 21, key: null, accuracy: "19" },
                  tackles: { total: null, blocks: null, interceptions: 1 },
                  duels: { total: 5, won: 1 },
                  dribbles: { attempts: 1, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 607,
                name: "Anastasios Bakasetas",
                photo: "https://media-2.api-sports.io/football/players/607.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 11,
                    position: "M",
                    rating: "7.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: 4, on: 2 },
                  goals: { total: 1, conceded: 0, assists: null, saves: null },
                  passes: { total: 54, key: 2, accuracy: "47" },
                  tackles: { total: 1, blocks: 1, interceptions: null },
                  duels: { total: 10, won: 7 },
                  dribbles: { attempts: 2, success: 2, past: null },
                  fouls: { drawn: 3, committed: null },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 1,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2664,
                name: "Mahmoud Trezeguet",
                photo:
                  "https://media-2.api-sports.io/football/players/2664.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 27,
                    position: "M",
                    rating: "7.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: { total: 3, on: 3 },
                  goals: { total: 1, conceded: 0, assists: null, saves: null },
                  passes: { total: 36, key: 1, accuracy: "29" },
                  tackles: { total: 2, blocks: null, interceptions: null },
                  duels: { total: 14, won: 8 },
                  dribbles: { attempts: 5, success: 3, past: 2 },
                  fouls: { drawn: 3, committed: 2 },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: 1,
                    commited: null,
                    scored: 1,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2615,
                name: "Maximiliano Gómez",
                photo:
                  "https://media-2.api-sports.io/football/players/2615.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 60,
                    number: 30,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 19, key: null, accuracy: "14" },
                  tackles: { total: 1, blocks: null, interceptions: 1 },
                  duels: { total: 13, won: 6 },
                  dribbles: { attempts: 2, success: null, past: null },
                  fouls: { drawn: 3, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 135934,
                name: "Muhammet Taha Tepe",
                photo:
                  "https://media-2.api-sports.io/football/players/135934.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 54,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2733,
                name: "Jens Stryger Larsen",
                photo:
                  "https://media-2.api-sports.io/football/players/2733.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 30,
                    number: 19,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: 1, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 23, key: null, accuracy: "19" },
                  tackles: { total: 3, blocks: null, interceptions: 3 },
                  duels: { total: 5, won: 3 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 50234,
                name: "Yusuf Erdoğan",
                photo:
                  "https://media-2.api-sports.io/football/players/50234.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 45,
                    number: 32,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: 1, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 34, key: null, accuracy: "30" },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: 9, won: 2 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: 3 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 56114,
                name: "Manolis Siopis",
                photo:
                  "https://media-2.api-sports.io/football/players/56114.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 6,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 47461,
                name: "Enis Bardhi",
                photo:
                  "https://media-2.api-sports.io/football/players/47461.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 9,
                    number: 29,
                    position: "M",
                    rating: "6.5",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 9, key: null, accuracy: "9" },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: 2, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 37887,
                name: "Doğucan Haspolat",
                photo:
                  "https://media-2.api-sports.io/football/players/37887.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 34,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 161894,
                name: "Naci Ünüvar",
                photo:
                  "https://media-2.api-sports.io/football/players/161894.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 23,
                    position: "F",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 44448,
                name: "Djaniny",
                photo:
                  "https://media-2.api-sports.io/football/players/44448.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 23,
                    number: 21,
                    position: "F",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 12, key: 1, accuracy: "11" },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: 3, won: 3 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: 1, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 182463,
                name: "Mountassir Lahtimi",
                photo:
                  "https://media-2.api-sports.io/football/players/182463.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 80,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 21447,
                name: "Umut Bozok",
                photo:
                  "https://media-2.api-sports.io/football/players/21447.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 30,
                    number: 9,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: 1,
                  shots: { total: 2, on: 1 },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 7, key: 1, accuracy: "5" },
                  tackles: { total: 1, blocks: null, interceptions: null },
                  duels: { total: 6, won: 3 },
                  dribbles: { attempts: 1, success: 1, past: null },
                  fouls: { drawn: 1, committed: 2 },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
        {
          team: {
            id: 607,
            name: "Konyaspor",
            logo: "https://media-2.api-sports.io/football/teams/607.png",
            update: "2022-11-15T04:10:16+00:00",
          },
          players: [
            {
              player: {
                id: 50192,
                name: "Ibrahim Šehić",
                photo:
                  "https://media-2.api-sports.io/football/players/50192.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 13,
                    position: "G",
                    rating: "7.5",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: { total: null, conceded: 2, assists: null, saves: 6 },
                  passes: { total: 36, key: null, accuracy: "21" },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 61810,
                name: "Ahmet Oğuz",
                photo:
                  "https://media-2.api-sports.io/football/players/61810.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 35,
                    number: 22,
                    position: "D",
                    rating: "5.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 8, key: null, accuracy: "7" },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: 5, won: null },
                  dribbles: { attempts: null, success: null, past: 1 },
                  fouls: { drawn: null, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 61986,
                name: "Adil Demirbağ",
                photo:
                  "https://media-2.api-sports.io/football/players/61986.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 4,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 50, key: 2, accuracy: "42" },
                  tackles: { total: null, blocks: 2, interceptions: 3 },
                  duels: { total: 11, won: 5 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: 1, committed: 4 },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: null,
                    commited: 1,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2830,
                name: "Francisco Calvo",
                photo:
                  "https://media-2.api-sports.io/football/players/2830.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 15,
                    position: "D",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 48, key: null, accuracy: "41" },
                  tackles: { total: 2, blocks: 2, interceptions: null },
                  duels: { total: 13, won: 7 },
                  dribbles: { attempts: null, success: null, past: 3 },
                  fouls: { drawn: 2, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 40472,
                name: "Guilherme Haubert Sityá",
                photo:
                  "https://media-2.api-sports.io/football/players/40472.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 12,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 33, key: 3, accuracy: "26" },
                  tackles: { total: 2, blocks: null, interceptions: 2 },
                  duels: { total: 11, won: 6 },
                  dribbles: { attempts: null, success: null, past: 1 },
                  fouls: { drawn: 1, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1486,
                name: "Bruno Paz",
                photo:
                  "https://media-2.api-sports.io/football/players/1486.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 36,
                    number: 80,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 8, key: null, accuracy: "7" },
                  tackles: { total: null, blocks: null, interceptions: 1 },
                  duels: { total: 6, won: 2 },
                  dribbles: { attempts: 1, success: null, past: null },
                  fouls: { drawn: 2, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 40452,
                name: "Konrad Michalak",
                photo:
                  "https://media-2.api-sports.io/football/players/40452.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 81,
                    number: 77,
                    position: "M",
                    rating: "6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: 1, on: 1 },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 6, key: null, accuracy: "4" },
                  tackles: { total: 1, blocks: null, interceptions: null },
                  duels: { total: 4, won: 1 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: 2 },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: null,
                    commited: 1,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 62915,
                name: "Soner Dikmen",
                photo:
                  "https://media-2.api-sports.io/football/players/62915.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 14,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: 1, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 25, key: null, accuracy: "21" },
                  tackles: { total: 1, blocks: null, interceptions: 1 },
                  duels: { total: 10, won: 4 },
                  dribbles: { attempts: null, success: null, past: 2 },
                  fouls: { drawn: 2, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 50006,
                name: "Amir Hadžiahmetović",
                photo:
                  "https://media-2.api-sports.io/football/players/50006.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 18,
                    position: "M",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: { total: null, conceded: 0, assists: 1, saves: null },
                  passes: { total: 62, key: 1, accuracy: "54" },
                  tackles: { total: 2, blocks: null, interceptions: 1 },
                  duels: { total: 13, won: 5 },
                  dribbles: { attempts: 2, success: 2, past: 4 },
                  fouls: { drawn: 1, committed: 2 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 39137,
                name: "Zymer Bytyqi",
                photo:
                  "https://media-2.api-sports.io/football/players/39137.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 85,
                    number: 7,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: 1, on: 1 },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 23, key: 1, accuracy: "18" },
                  tackles: { total: 1, blocks: null, interceptions: null },
                  duels: { total: 5, won: 2 },
                  dribbles: { attempts: 2, success: 1, past: null },
                  fouls: { drawn: null, committed: 1 },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19511,
                name: "Mame Biram Diouf",
                photo:
                  "https://media-2.api-sports.io/football/players/19511.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 99,
                    position: "F",
                    rating: "8.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: { total: 4, on: 3 },
                  goals: { total: 2, conceded: 0, assists: null, saves: null },
                  passes: { total: 21, key: null, accuracy: "15" },
                  tackles: { total: 2, blocks: null, interceptions: null },
                  duels: { total: 17, won: 11 },
                  dribbles: { attempts: 1, success: 1, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 61924,
                name: "Erhan Erentürk",
                photo:
                  "https://media-2.api-sports.io/football/players/61924.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 1,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 63225,
                name: "Kahraman Demirtaş",
                photo:
                  "https://media-2.api-sports.io/football/players/63225.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 20,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 50141,
                name: "Cebrail Karayel",
                photo:
                  "https://media-2.api-sports.io/football/players/50141.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 55,
                    number: 90,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 18, key: 1, accuracy: "14" },
                  tackles: { total: 1, blocks: null, interceptions: null },
                  duels: { total: 3, won: 2 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: 1, committed: 1 },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 14296,
                name: "Robert Murić",
                photo:
                  "https://media-2.api-sports.io/football/players/14296.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 11,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 49987,
                name: "Amilton da Silva",
                photo:
                  "https://media-2.api-sports.io/football/players/49987.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 93,
                    position: "F",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 14288,
                name: "Domagoj Pavičić",
                photo:
                  "https://media-2.api-sports.io/football/players/14288.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 10,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 50063,
                name: "Uğurcan Yazğılı",
                photo:
                  "https://media-2.api-sports.io/football/players/50063.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 17,
                    number: 5,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 2, key: null, accuracy: null },
                  tackles: { total: 1, blocks: null, interceptions: null },
                  duels: { total: 2, won: 1 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 1, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 61939,
                name: "Oğulcan Ülgün",
                photo:
                  "https://media-2.api-sports.io/football/players/61939.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 9,
                    number: 35,
                    position: "M",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 1, key: null, accuracy: null },
                  tackles: { total: null, blocks: 1, interceptions: 2 },
                  duels: { total: 2, won: 1 },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 44877,
                name: "Uche Ikpeazu",
                photo:
                  "https://media-2.api-sports.io/football/players/44877.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 46,
                    number: 29,
                    position: "F",
                    rating: "5.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: 1,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: 11, key: null, accuracy: "9" },
                  tackles: { total: 1, blocks: null, interceptions: null },
                  duels: { total: 13, won: 4 },
                  dribbles: { attempts: 3, success: 1, past: null },
                  fouls: { drawn: 2, committed: 2 },
                  cards: { yellow: 2, red: 1 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 301582,
                name: "Mehmet Ali Büyüksayar",
                photo:
                  "https://media-2.api-sports.io/football/players/301582.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 42,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: { total: null, on: null },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: { total: null, key: null, accuracy: null },
                  tackles: { total: null, blocks: null, interceptions: null },
                  duels: { total: null, won: null },
                  dribbles: { attempts: null, success: null, past: null },
                  fouls: { drawn: null, committed: null },
                  cards: { yellow: 0, red: 0 },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  } catch (error) {
    return {};
  }
};

export { getLatestMatches, getMatches, getMatch };
