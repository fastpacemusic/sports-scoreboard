import axios from "axios";

export interface StandingsData {
    league: {
        name: string;
        standings: any[];
        country: string;
        logo: string;
    }
}

let  scoreboardCache: Promise<StandingsData> | undefined;

//league number 2: Champ League, 39: Prem League, 78: Bundesliga, 3: Europa League, 61: Ligue 1, 140: laliga, 253: mls, 135: serie A

export class ApiService {
    getScoreBoard = (): Promise<StandingsData> => {
        if (!scoreboardCache) {
            console.log(111);
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {
              league: '39',
              season: '2024'
            },
            headers: {
              'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          scoreboardCache = axios.request(options).then(response => {
            return response.data.response[0] as StandingsData;
          });
          return scoreboardCache;
        }else {
            return (scoreboardCache);
        }
    }
}