const express = require('express');
const logger = require('./logger');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

const courses = [
  {id: 1, name: 'Math'},
  {id: 2, name: 'English'},
  {id: 3, name: 'Science'}
]

app.get('/api/courses/:id', (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('Course with the given id not found');
  res.send(course);
})

app.post('/api/courses', (req, res) => {
  let course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Course with the given id can not be found.");
  }
  course.name = req.body.name;
  res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if 
    (!course) res.status(404).send("Course with the given id can not be found.");  
  let index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

