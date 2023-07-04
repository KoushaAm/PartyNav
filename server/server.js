const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ "users": ["kousha", "sahand", "arta", "nima", "parsa"] });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
