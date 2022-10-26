const express = require('express')
const app = express()
const port = 5000

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
    const category_course = course.filter(n => n.category_id === id);
    res.send(category_course);
})
app.get('/course', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log(`Bizon's Learning running on port ${port}`)
})