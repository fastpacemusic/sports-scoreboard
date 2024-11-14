import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchLeagueStandings = createAsyncThunk(
    'leagueStanding',
    async () => {
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

          try {
            const response = await axios.request(options);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          } 

    }


);