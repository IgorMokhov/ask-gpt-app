import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { fetchAIResponse } from '../../services/openaiApi';

export const AskGPTForm = () => {
  const [userMessage, setUserMessage] = useState<string>('');
  const [AIResponse, setAIResponse] = useState<string | null>();
  const [error, setError] = useState<string | null>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetchAIResponse(userMessage);
      setAIResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error from fetchAIResponse: ${err.message}`);
      }
    } finally {
      setUserMessage('');
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  return (
    <form
      className="max-w-190 border-3 border-blue-600 rounded-2xl pl-10 h-16 flex gap-2 relative"
      onSubmit={onSubmitHandler}
    >
      <input
        className="flex-1 focus:outline-none focus:ring-0 text-2xl placeholder:text-2xl"
        type="text"
        placeholder="Ask whatever you want"
        value={userMessage}
        onChange={onChangeHandler}
      />
      <button className="w-16 bg-blue-500 rounded-2xl flex items-center justify-center">
        <ChevronRight className="w-10 h-10" />
      </button>

      {error && <p className="text-rose-600 absolute top-18 left-9">{error}</p>}
    </form>
  );
};
