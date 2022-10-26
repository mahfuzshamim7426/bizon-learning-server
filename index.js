const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Hello Bizon')
})
app.get('/course-categories', (req, res) => {
    res.send(categories)
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = course.filter(c => courses.category_id === id);
    res.send(category_course);
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