import { getAIResponse } from '../services/openaiService.js';

export const getMessageHandler = async (req, res) => {
  const { message } = req.body;
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message must be a non-empty string' });
  }

  try {
    const response = await getAIResponse(req.body.message);
    res.json(response);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
};
