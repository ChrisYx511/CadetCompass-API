const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Success!'));

app.get("/cadets", (req,res) => {
    const cadets = [
    {
      CIN: 1,
      last_name: "Wong",
      first_name: "Arnold",
      preferred_language: "EN",
    },
    {
        CIN: 2,
        last_name: "Yang",
        first_name: "Chris",
        preferred_language: "FR",
    },
    {
        CIN: 3,
        last_name: "Willoughby",
        first_name: "Caleb",
        preferred_language: "EN",
    },
   ];
  
   res.json(cadets);
});

app.use(express.json()); // Use this middleware to parse JSON bodies

app.post("/cadets", (req, res) => {
    const newCadet = req.body;
    res.json({ message: 'Cadet added successfully', cadet: newCadet });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));