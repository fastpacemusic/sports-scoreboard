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

  getCachedAPI(url: string) {
    if (cache[url]) {
      console.log('cached');
      return cache[url];
    } else {
      return null;
    }
  } 

  setCachedAPI(url: string, value: any) {
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

          if (this.getCachedAPI(options.url)) {
            return Promise.resolve(this.getCachedAPI(options.url));
          } else {

            return axios.request(options).then(response => {
              const result = response.data.response[0];
              this.setCachedAPI(options.url, result);
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



}