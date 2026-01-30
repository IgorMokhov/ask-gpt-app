import { useState } from 'react';
import { ChevronRight, Mic, StopCircle } from 'lucide-react';
import { fetchAIResponse } from '../../services/openaiApi';
import { useSpeech } from '../../hooks/useSpeech';

interface IAskGPTFormProps {
  isLoading: boolean;
  onSaveAIResponse: (res: string | null) => void;
  onSaveError: (err: string | null) => void;
  setIsLoading: (value: boolean) => void;
}

export const AskGPTForm = ({
  isLoading,
  onSaveAIResponse,
  onSaveError,
  setIsLoading,
}: IAskGPTFormProps) => {
  const [userMessage, setUserMessage] = useState<string>('');

  const { transcript, finalText, isListening, isSupported, start, stop, reset } =
    useSpeech();

  const liveValue = isListening ? finalText || transcript : userMessage;

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || isListening) return;

    setIsLoading(true);
    onSaveError(null);

    try {
      const response = await fetchAIResponse(userMessage);
      onSaveAIResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        onSaveError(`Error from fetchAIResponse: ${err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const onSpeechHandler = () => {
    if (!isSupported) {
      onSaveError('Browser does not support speech recognition');
      return;
    }

    if (!isListening) {
      reset();
      start();
    } else {
      stop();
      setUserMessage((finalText || transcript).trim());
    }
  };

  return (
    <form
      className="w-190 border-3 border-blue-600 rounded-2xl pl-10 h-16 flex gap-2 absolute bottom-0 left-0"
      onSubmit={onSubmitHandler}
    >
      <button onClick={onSpeechHandler} type="button">
        {isListening ? (
          <StopCircle className="w-8 h-8 text-gray-400" />
        ) : (
          <Mic className="w-8 h-8 text-gray-400" />
        )}
      </button>

      <input
        className="flex-1 focus:outline-none focus:ring-0 text-2xl placeholder:text-2xl"
        type="text"
        placeholder="Ask whatever you want"
        value={liveValue}
        disabled={isListening}
        onChange={onChangeHandler}
      />

      <button
        className="w-16 bg-blue-500 rounded-2xl flex items-center justify-center"
        disabled={isLoading}
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </form>
  );
};
