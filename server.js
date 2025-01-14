const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 10000;

// Route to get list of Render services
app.get('/services', async (req, res) => {
  const apiKey = rnd_JRRLJWOjjHOQ9uWviLpOtqFC0L7s; // API Key of Render
  const url = 'https://api.render.com/v1/services?limit=20';
  
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}` // השתמש במפתח הסביבה
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch services' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);


});
