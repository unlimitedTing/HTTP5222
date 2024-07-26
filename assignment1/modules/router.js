var express = require("express");
var router = express.Router();
const db = require("../modules/events/event");


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Home page
router.get("/", async (request, response) => {
  try {
    let eventList = await db.getEvents();
    // If there's nothing in the events collection, initialize with some content then get the events again
    if (!eventList.length) {
      await db.initializeEvents();
      eventList = await db.getEvents();
    }
    console.log(eventList);
    response.render("index", { events: eventList });
  } catch (error) {
    console.error('Error rendering home page:', error);
    response.status(500).send('Internal Server Error');
  }
});

// Render add event form
router.get("/add", (request, response) => {
  response.render("add");
});

// Handle form submission for adding a new event
router.post("/add", async (request, response) => {
  try {
    const { name, date, type, description } = request.body;
    await db.addEvent(name, new Date(date), type, description);
    response.redirect("/");
  } catch (error) {
    console.error('Error adding event:', error);
    response.status(500).send('Internal Server Error');
  }
});

// Render update event form
router.get("/update/:id", async (request, response) => {
  try {
    const event = await db.getEventById(request.params.id);
    response.render("update", { event });
  } catch (error) {
    console.error('Error rendering update form:', error);
    response.status(500).send('Internal Server Error');
  }
});

// Handle form submission for updating an event
router.post("/update/:id", async (request, response) => {
  try {
    const { name, date, type, description } = request.body;
    await db.updateEventById(request.params.id, { name, date: new Date(date), type, description });
    response.redirect("/");
  } catch (error) {
    console.error('Error updating event:', error);
    response.status(500).send('Internal Server Error');
  }
});

// Handle delete an event by event id
router.post("/delete/:id", async (request, response) => {
  try {
    await db.deleteEventById(request.params.id);
    response.redirect("/");
  } catch (error) {
    console.error('Error deleting event:', error);
    response.status(500).send('Internal Server Error');
  }
});

module.exports = router;
