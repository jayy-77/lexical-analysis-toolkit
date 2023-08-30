const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const cors = require('cors')
const fs = require("firebase-admin")

app.use(bodyParser.json());
app.use(cors());

const serviceAccount = require('./secretKey.json')

fs.initializeApp({
    credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();
const documentation_ref = db.collection("Documentation")

router.post('/store', async (req, res) => {
    code_structure = req.body.code_structure
    const reponse = await documentation_ref.add(code_structure)
    res.send(reponse)
})

module.exports = router