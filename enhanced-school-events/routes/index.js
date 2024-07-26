const express = require('express');
const router = express.Router();
const { getNews } = require('../newsAPI');

const db = require("../modules/events/event");



router.get('/', async (req, res) => {
    const news = await getNews('education');
    let events = await db.getEvents();
    // If there's nothing in the events collection, initialize with some content then get the events again
    if (!events.length) {
        await db.initializeEvents();
        events = await db.getEvents();
    }
    res.render('index', { events, news }); // Pass events to the view
});

module.exports = router;
