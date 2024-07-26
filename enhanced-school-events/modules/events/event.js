const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(`Connecting to MongoDB at ${dbUrl}`);

// Set up Schema and model
const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  type: String,
  description: String
});
const Event = mongoose.model("Event", EventSchema);

// MONGODB FUNCTIONS
async function connect() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Get all events from the events collection
async function getEvents() {
  try {
    await connect();
    return await Event.find({}); // Return array for find all
  } catch (error) {
    console.error('Error getting events:', error);
    return [];
  }
}

// Initialize events collection with some data
async function initializeEvents() {
  try {
    await connect();
    const eventList = [
      {
        name: 'Registration Opens',
        date: new Date('2024-01-01'),
        type: 'Registration',
        description: 'Registration for the new semester opens.'
      },
      {
        name: 'Classes Start',
        date: new Date('2024-02-01'),
        type: 'Class Start',
        description: 'The first day of classes for the new semester.'
      },
      {
        name: 'Midterm Exams',
        date: new Date('2024-03-15'),
        type: 'Exam',
        description: 'Midterm exams period starts.'
      }
    ];
    await Event.insertMany(eventList);
    console.log('Initialized events collection with sample data');
  } catch (error) {
    console.error('Error initializing events:', error);
  }
}

// Function to add one event
async function addEvent(eventName, eventDate, eventType, eventDescription) {
  try {
    await connect();
    let event = new Event({
      name: eventName,
      date: eventDate,
      type: eventType,
      description: eventDescription
    });
    await event.save(); // This line is the one that saves to the DB
    console.log(`Added event: ${eventName}`);
  } catch (error) {
    console.error('Error adding event:', error);
  }
}

// Get an event by ID
async function getEventById(id) {
    try {
      await connect();
      return await Event.findById(id);
    } catch (error) {
      console.error('Error getting event by ID:', error);
      return null;
    }
  }

// Function to update event by ID
async function updateEventById(id, updateData) {
    try {
      await connect();
      await Event.findByIdAndUpdate(id, updateData);
      console.log(`Updated event with ID: ${id}`);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  }
  
  // Function to update event description
  async function updateDescription(eventName, newDescription) {
    try {
      await connect();
      await Event.updateOne(
        { name: eventName },
        { description: newDescription }
      );
      console.log(`Updated event: ${eventName}`);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  }

// Function to delete event by ID
async function deleteEventById(id) {
    try {
      await connect();
      await Event.findByIdAndDelete(id);
      console.log(`Deleted event with ID: ${id}`);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  }

module.exports = {
  getEvents,
  getEventById,
  initializeEvents,
  addEvent,
  updateEventById,
  updateDescription,
  deleteEventById
};
