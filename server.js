const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Route to get list of Render services
app.get('/services', async (req, res) => {
  const apiKey = process.env.RENDER_API_KEY; // API Key of Render
  const url = 'https://api.render.com/v1/services?limit=20';
  
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${rnd_JRRLJWOjjHOQ9uWviLpOtqFC0L7s}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch services' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

