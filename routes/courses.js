const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name: 'Math'},
    {id: 2, name: 'English'},
    {id: 3, name: 'Science'}
  ]

router.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello'})
  })
  
  router.get('/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course with the given id not found');
    res.send(course);
  })
  
  router.post('/', (req, res) => {
    let course = {
      id: courses.length + 1,
      name: req.body.name
    }
    courses.push(course);
    res.send(course);
  })
  
  router.put('/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
      res.status(404).send("Course with the given id can not be found.");
    }
    course.name = req.body.name;
    res.send(course)
  })
  
  router.delete('/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if 
      (!course) res.status(404).send("Course with the given id can not be found.");  
    let index = courses.indexOf(course);
    courses.splice(index, 1);
  
    res.send(course);
  })

  module.exports = router;