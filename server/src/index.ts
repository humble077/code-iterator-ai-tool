// Import required packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import path from 'path';

// Load environment variables
dotenv.config();

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
    const { code, prompt } = req.body;

    // Check if required fields are present
    if (!code || !prompt) {
      return res.status(400).json({ error: 'Code and prompt are required' });
    }

    // Create messages for OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system" as const,
          content: "You are a helpful code improvement assistant. Please improve the code while maintaining its functionality."
        },
        {
          role: "user" as const,
          content: `Here is the code to improve:\n${code}\n\nImprovement request: ${prompt}\n\nPlease provide the improved code with explanations.`
        }
      ],
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