const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/integrantes', (req, res) => {
  const data = {
    'integrantes': [
      {'nome': 'Huldreich Melo'},
      {'nome': 'Barbara Lima'},
      {'nome': 'Maristela dos Santos'}
    ]
  };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
