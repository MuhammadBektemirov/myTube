import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY 
const options = {
  url: 'https://youtube-v31.p.rapidapi.com',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'aa4b9ffbb9msh3dbe94cd116646ep13dba9jsndd9c88fd813b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
}

  