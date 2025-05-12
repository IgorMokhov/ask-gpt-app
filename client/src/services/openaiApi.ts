import axios from 'axios';

const BASE_URL = 'http://localhost:5001';

export const fetchAIResponse = async (message: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/messages`, { message });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.error || err.message);
    } else {
      throw new Error(`Unknown error occurred: ${err}`);
    }
  }
};
