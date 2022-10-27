const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Bizon Server Running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log(`Bizon's Learning running on port ${port}`)
})