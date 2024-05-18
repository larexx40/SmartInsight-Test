import {OpenAI} from 'openai';
import { GenerateResponse } from './prompt.types';
import dotenv from 'dotenv'

dotenv.config()
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export const generatePromptResponse = async (userInput: string): Promise<GenerateResponse> => {
    const prompt = `User input: ${userInput}\n also suggest 4 follow up questions`;

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: "user", content: prompt }],
    });

    if (!completion.choices || completion.choices.length === 0 || !completion.choices[0].message.content) {
        throw new Error('Failed to generate response from OpenAI');
    }
    const output = completion.choices[0].message.content.trim();
    const [response, ...questions] = output.split('\n').filter((line) => line);

    return {
        response: response,
        follow_up_questions: questions.map((question) => ({ question })),
    };
};
