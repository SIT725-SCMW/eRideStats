let client = require("../dbConnect");
let locationAccess ;

setTimeout(() => {
    locationAccess = client.mongoClient.db().collection("EV charging station");
}, 2000)

const getLocation = (callback) => {
    locationAccess.find({}).toArray(callback);
}
module.exports = {getLocation};