let client = require("../dbConnect");
let projectCollection;

setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("pets");
}, 2000)

const insertProject = (project, callback) => {
    projectCollection.insert(project, callback);
}
const getProject = (callback) => {
    projectCollection.find({}).toArray(callback);
}
module.exports = {insertProject, getProject};