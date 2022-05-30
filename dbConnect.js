// Using dotenv to load environment variables from .env file
require("dotenv").config()

// Create a MongoClient instance/class (NodeJS Module) that allows for making Connections to MongoDB
const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cluster0.ycgjk.mongodb.net/SIT725_2022_t1?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useNewUrlParser: true })

// connectClient, show error if MongoDB connection fails
client.connect((err,db) => {
     if(!err){
       console.log("Database Connected");
     }else{
       console.log("[error]",err);
     }
 });
 
exports.mongoClient = client;