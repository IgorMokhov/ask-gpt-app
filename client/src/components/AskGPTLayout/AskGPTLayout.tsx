import { useState } from 'react';
import { AskGPTForm } from '../AskGPTForm/AskGPTForm';
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage';
import { AIMessage } from '../AIMessage/AIMessage';
import { Loader } from '../../UI/Loader/Loader';

export const AskGPTLayout = () => {
  const [AIResponse, setAIResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section style={{ height: '90vh' }} className="flex flex-col gap-100 relative">
      {isLoading && <Loader />}

      {!isLoading &&
        (AIResponse ? <AIMessage text={AIResponse} /> : <WelcomeMessage />)}

      <AskGPTForm
        isLoading={isLoading}
        onSaveAIResponse={setAIResponse}
        onSaveError={setError}
        setIsLoading={setIsLoading}
      />

      {error && <p className="text-rose-600 absolute -bottom-10 left-10">{error}</p>}
    </section>
  );
};
