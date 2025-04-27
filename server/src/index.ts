// Import required packages
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Create Express app
const app = express();

// Set port from environment or use default
const port = process.env.PORT || 3001;

// Middleware setup
app.use(cors());
app.use(express.json());

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Handle code improvement requests
app.post('/api/improve-code', async (req: any, res: any) => {
  try {
    // Get code and prompt from request
    const code = req.body.code;
    const prompt = req.body.prompt;

    // Check if required fields are present
    if (!code || !prompt) {
      return res.status(400).json({ error: 'Code and prompt are required' });
    }

    // Create messages for OpenAI
    const messages = [
      {
        role: "system",
        content: "You are a helpful code improvement assistant. Please improve the code while keeping its functionality."
      },
      {
        role: "user",
        content: `Here is the code to improve:\n${code}\n\nImprovement request: ${prompt}\n\nPlease provide the improved code with explanations.`
      }
    ];

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      temperature: 0.7,
    });

    // Send response back to client
    res.json({ 
      improvedCode: response.choices[0].message.content,
      success: true 
    });

  } catch (error: any) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Something went wrong while improving the code',
      details: error.message 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 