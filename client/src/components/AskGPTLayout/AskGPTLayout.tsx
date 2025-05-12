import { useState } from 'react';
import { AskGPTForm } from '../AskGPTForm/AskGPTForm';
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage';
import { AIMessage } from '../AIMessage/AIMessage';

export const AskGPTLayout = () => {
  const [AIResponse, setAIResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <section style={{ height: '90vh' }} className="flex flex-col gap-100 relative">
      {AIResponse ? <AIMessage text={AIResponse} /> : <WelcomeMessage />}
      <AskGPTForm onSaveAIResponse={setAIResponse} onSaveError={setError} />

      {error && <p className="text-rose-600 absolute -bottom-10 left-10">{error}</p>}
    </section>
  );
};
