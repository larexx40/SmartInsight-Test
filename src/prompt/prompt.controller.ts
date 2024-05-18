import { Request, Response } from 'express';
import { generatePromptResponse } from './prompt.service';

export const generateResponse = async (req: Request, res: Response) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const response = await generatePromptResponse(question);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error generating response' });
  }
};
