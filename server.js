require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors");
let dbConnect = require("./dbConnect");
let projectRoute = require("./routes/projectRoute");
let userRoute = require("./routes/userRoute");
let http = require('http').createServer(app);
let io = require('socket.io')(http);

//serve statically from a folder called public
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/project", projectRoute);
app.use("/api/user", userRoute);

const addTwoNumbers = (n1, n2) => {
    let num1 = parseInt(n1)
    let num2 = parseInt(n2)
    let result = (num1 + num2) || null;
    return result;
}

app.get("/addTwoNumbers/:firstNumber/:secondNumber", (req, res) => {
    var n1 = req.params.firstNumber;
    var n2 = req.params.secondNumber;
    var result = addTwoNumbers(n1, n2)
    if (result == null) {
        res.json({ result: result, statusCode: 400 }).status(400)
    }
    else { res.json({ result: result, statusCode: 200 }).status(200) }
})

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', new Date().toISOString());
    }, 1000);

});


var port = process.env.port || 3000;

//has a callback
http.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
  });