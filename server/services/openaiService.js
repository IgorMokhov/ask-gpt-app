import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://api.deepseek.com';

const openai = new OpenAI({
  baseURL: BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

export const getAIResponse = async (userMessage) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
      model: 'deepseek-chat',
    });

    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error(error.message);
  }
};
