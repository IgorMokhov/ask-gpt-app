import { AskGPTForm } from '../AskGPTForm/AskGPTForm';
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage';

export const AskGPTLayout = () => {
  return (
    <section className="flex flex-col gap-100">
      <WelcomeMessage />
      <AskGPTForm />
    </section>
  );
};
