import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { fetchAIResponse } from '../../services/openaiApi';

interface IAskGPTFormProps {
  onSaveAIResponse: (res: string | null) => void;
  onSaveError: (err: string | null) => void;
}

export const AskGPTForm = ({ onSaveAIResponse, onSaveError }: IAskGPTFormProps) => {
  const [userMessage, setUserMessage] = useState<string>('');

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveError(null);

    try {
      const response = await fetchAIResponse(userMessage);
      onSaveAIResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        onSaveError(`Error from fetchAIResponse: ${err.message}`);
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
      className="w-190 border-3 border-blue-600 rounded-2xl pl-10 h-16 flex gap-2 absolute bottom-0 left-0"
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
    </form>
  );
};
