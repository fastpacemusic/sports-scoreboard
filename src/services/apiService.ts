import axios from "axios";

export interface StandingsData {
    league: {
        name: string;
        standings: any[];
        country: string;
        logo: string;
        id?: any;
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

          const apiLink = window.localStorage.getItem(options.url);

          if (apiLink) {
            console.log('Data retrieved from localStorage');
            return Promise.resolve(JSON.parse(apiLink) as StandingsData);
          } else {

            return axios.request(options).then(response => {
              const result = response.data.response[0];
              console.log('Data fetched from API');
              // this.setCachedAPI(options.url, result);
              window.localStorage.setItem(options.url, JSON.stringify(result));
              return result as StandingsData;
            });

          } 
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

      const apiLink = window.localStorage.getItem(options.url);

      if (apiLink) {
        console.log('Data retrieved from localStorage, top leagues');
        return Promise.resolve(JSON.parse(apiLink) as LeagueData[]);
      } else {
        return axios.request(options).then(response => {
          console.log('Data retrieved from API, top leagues');
          const leagues = response.data.response.map((item: any) => {
            return {
              name: item.league.name,
              logo: item.league.logo,
              country: item.country
            } as LeagueData;
          });
          window.localStorage.setItem(options.url, JSON.stringify(leagues));
          return leagues;
        });
      }

    }

    



}