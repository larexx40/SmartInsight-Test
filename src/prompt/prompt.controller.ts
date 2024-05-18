import { Request, Response } from 'express';
import { generatePromptResponse } from './prompt.service';

export const generateResponse = async (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await generatePromptResponse(message);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error generating response' });
  }
};
