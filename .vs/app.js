const express = requires ('express');
const app = express();

app.app.get('/', (req, res) => {
  res.send('GET request to the homepage')
});

app.listen(3000, () => console.log('Listening on port 3000...'));