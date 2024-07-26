const express = require('express');
const router = express.Router();
const { getHolidays } = require('../calendarific');

// Render sync page
router.get('/', (req, res) => {
  res.render('sync');
});

// Import holidays from Calendarific
router.get('/import', async (req, res) => {
  const year = new Date().getFullYear();
  const country = 'US'; // Specify the country code
  const holidays = await getHolidays(year, country);
  const uniqueHolidays = Array.from(new Set(holidays.map(holiday => `${holiday.name}-${holiday.date.iso}`)))
      .map(id => holidays.find(holiday => `${holiday.name}-${holiday.date.iso}` === id))
      .slice(0, 10);
  if (uniqueHolidays.length) {
    console.log(uniqueHolidays);
    res.render('sync', { events: uniqueHolidays });
  } else {
    res.send('No upcoming holidays found.');
  }
});

module.exports = router;
