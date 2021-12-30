const ATLAS_URI = `mongodb+srv://ajinkya:BMc%237%26%24bm79p%24zJ6@cluster0.qxkll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const { MongoClient } = require("mongodb");
const client = new MongoClient(ATLAS_URI);

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("rkappa");
            console.log("Successfully connected to MongoDB.");
            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};