const axios = require('axios');

const API_KEY = '22V5QtG2gKUNwSzHaqjbjHtAv77OPcJe';

const getHolidays = async (year, country) => {
  try {
    const response = await axios.get(`https://calendarific.com/api/v2/holidays`, {
      params: {
        api_key: API_KEY,
        country: country,
        year: year
      }
    });
    return response.data.response.holidays;
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
};

module.exports = { getHolidays };
