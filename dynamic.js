const express = require('express');
const app = express();

// Route with route parameter and query parameter
app.get('/welcome/:username', (req, res) => {
  const username = req.params.username;
  const role = req.query.role;

  if (role) {
    res.send(`Welcome ${username}, your role is ${role}`);
  } else {
    res.send(`Welcome ${username}, role not specified`);
  }
});

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
