import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Using Axios to fetch data
const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: {
    locale: 'en-US',
    pageSize: '20',
    startFrom: '0',
  },
  headers: {
    'x-rapidapi-key': '87f53efaa9msha58d1295878ad5bp148f7ajsn2763c58d5b90',
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
  },
};

const fetchTopCharts = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchTopCharts(); // Call the function to fetch data

// Using Redux Toolkit Query to manage API state
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '87f53efaa9msha58d1295878ad5bp148f7ajsn2763c58d5b90');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/track?locale=en-US&pageSize=20&startFrom=0',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
