import express from 'express';
import cors from 'cors'
const app = express();
const port = 8080;
import { validateAuthToken } from './authvalidate.js';
import {cadets} from './listOfCadets.js';

function returnAuthError(err, res) {
    res.status(err[0])
    res.send(err[1])
    console.log(err[1])
}
const corsOptions = {
    origin: true
}
app.use(cors(corsOptions));

// express.get

app.get('/', (req, res) => res.send('Success!'));

app.get('/cadets', (req, res) => {
    validateAuthToken(req.headers.authorization).then(() => {
        res.json(cadets[req.query.phase][req.query.division])
     }).catch((err) => {
         returnAuthError(err, res)
    })
} )

// express.use

app.use(express.json()); // to parse JSON bodies


// express.post

app.post('/cadets', (req, res) => {
    const newCadet = req.body;
    res.json({ message: 'Cadet added successfully', cadet: newCadet });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
