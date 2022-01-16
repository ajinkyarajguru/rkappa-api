var express = require('express');
const cors = require('cors');
const db = require('./db');
var dbCon = require('./db');
var app = express();
app.use(cors());
app.options('*', cors());

const router = express.Router();

dbCon.connectToServer((err) => {
    if (err) {
        console.error('MongoDB connection failed', err)
    }
})

router.get('/award', async function (req, res) {
    const dbConnect = dbCon.getDb();
    const data = dbConnect
        .collection("people").insert({ name: 'Ajinkya Rajguru' });
    data.then(result => console.log(result))
    res.send("Success")
});

app.get('/award', router);

app.use('/', (req, res) => res.send("Home"))

app.listen(1337, () => {
    console.log('This is the server');
});
