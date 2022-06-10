const express = require('express');
const { parse } = require('path/posix');
const app = express()
const port = process.env.PORT || 3000;

const courses = [
  {id: 1, Name: 'Math'},
  {id: 2, Name: 'English'},
  {id: 3, Name: 'Science'}
]

app.get('/api/courses/:id', (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('Course with the given id not found');
  res.send(course);
})

app.post('/api/course', (req, res) => {
  let course = {
    id: courses.length + 1,
    name: res.body.name
  }
  courses.push(course);
  res.send(course);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})