const getUser = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Shams", "age": 13}});
}

module.exports = {
    getUser
}
