const axios = require('axios');
const API_KEY = '1a664eb124794defb0e6edb92520e056';

const getNews = async (query) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything`, {
        params: {
          q: query,
          apiKey: API_KEY,
          pageSize: 10, // Limit the number of articles to 10
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  };

module.exports = { getNews };

