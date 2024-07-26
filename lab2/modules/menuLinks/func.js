const { MongoClient, ObjectId } = require("mongodb");

//Mongo stuff
const dotenv = require("dotenv");
dotenv.config();
const dbUrl = "mongodb://localhost:27017/testdb";
const client = new MongoClient(dbUrl);

// mongodb connection
async function connection() {
    db = client.db("testdb");
    return db;
}



async function getLinks() {
    db = await connection();
    var results = db.collection("menuLinks").find({});
    res = await results.toArray();
    return res;
}

async function addLink(link) {
    db = await connection();
    var status = await db.collection("menuLinks").insertOne(link);
    console.log("link added");
}

async function deleteLink(id) {
    db = await connection();
    const deleteId = { _id: new ObjectId(id) };
    const result = await db.collection("menuLinks").deleteOne(deleteId);
    if (result.deletedCount == 1)
        console.log("delete successful");
}

async function getSingleLink(id) {
    db = await connection();
    const editId = { _id: new ObjectId(id) };
    const result = await db.collection("menuLinks").findOne(editId);
    return result;
}

async function editLink(filter, link) {
    db = await connection();
    //create the update set { $set: <JSON document> }
    const update = { $set: link };
    //execute an updateOne() to update the link as selected via the filter
    const result = await db.collection("menuLinks").updateOne(filter, update);
    if (result.modifiedCount == 1)
        console.log(`edit successful`);
}

module.exports = {
    getLinks,
    addLink,
    deleteLink,
    getSingleLink,
    editLink
};