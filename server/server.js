const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ "users": ["dummy data"] });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
