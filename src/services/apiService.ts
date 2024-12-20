import axios from "axios";

export interface StandingsData {
    league: {
        name: string;
        standings: any[];
        country: string;
        logo: string;
    }
}

export interface LeagueData {
    country: {
      code: string;
      flag: string;
      name: string;
    }
    name: string;
    logo: string;
}

let  scoreboardCache: Promise<StandingsData> | undefined;

const cache: any = {};



export class ApiService {
    getScoreBoard = (leagueNum: number): Promise<StandingsData> => {
        // if (!scoreboardCache) {
            // console.log(111);
          

          const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {
              league: leagueNum,
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

        

    }

    getAllLeagues = (): Promise<LeagueData[]> => {
      
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        params: {season: '2024'},
        headers: {
          'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
      };
      return axios.request(options).then(response => {
        // console.log(response.data.response);
        return response.data.response.map((item: any) => {
          // console.log(item);
          return {
            name: item.league.name,
            logo: item.league.logo,
            country: item.country
          } as LeagueData;
        });
      });
    }


    getCachedAPI(url: string) {
      if (cache[url]) {
        return cache[url];
      } else {
        return null;
      }
    } 

    setCachedAPI(url: string, value: string) {
      cache[url] = value;
    }
}