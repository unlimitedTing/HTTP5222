var express = require("express");
var router = express.Router();
const model = require("./func");

//In order to parse POST body data as JSON, do the following.
//The following lines will convert the form data from query
//string format to JSON format.
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
//PAGE ROUTES
router.get("/", async (request, response) => {
    links = await model.getLinks();
    response.render("index", { title: "Home", menu: links });
});
router.get("/about", async (request, response) => {
    links = await model.getLinks();
    response.render("about", { title: "About", menu: links });
});
router.get("/admin/menu", async (request, response) => {
    links = await model.getLinks();
    //view path has "admin/" because the "menu-list" view was placed in a subdirectory(views / admin /)
    response.render("admin/menu-list", {
        title: "Menu links admin", menu:
            links
    });
});
router.get("/admin/menu/add", async (request, response) => {
    links = await model.getLinks();
    response.render("admin/menu-add", { title: "Add link", menu: links });
});
router.get("/admin/menu/edit", async (request, response) => {
    if (request.query.linkId) {
        let id = request.query.linkId;
        let linkToEdit = await model.getSingleLink(id);
        links = await model.getLinks();
        response.render("admin/menu-edit", {
            title: "Edit link", editLink:
                linkToEdit, menu: links
        });
    }
});
//FORM PROCESSING PATHS
router.post("/admin/menu/add/submit", async (request, response) => {
    //for a POST form, field values are passed in request.body.<field_name>
    //we can do this because of the setting to convert the urlencoded data to
    JSON
    let newLink = {
        weight: request.body.wgt,
        path: request.body.path,
        name: request.body.text
    };
    await model.addLink(newLink);
    response.redirect("/admin/menu");
});
router.get("/admin/menu/delete", async (request, response) => {
    //for a GET form, field values are passed in request.query.<field_name>because we're retrieving from a query string
    let id = request.query.linkId;
    await model.deleteLink(id);
    response.redirect("/admin/menu");
});
router.post("/admin/menu/edit/submit", async (request, response) => {
    //fill out this code
    //get the _id to use this as a filter
    let id = "<fill_out>";
    //get weight/path/name values and build this is your updated document
    let link = {
        weight: "<replace>",
        path: "<replace>",
        name: "<replace>"
    };
    //run editLink()
});
module.exports = router;