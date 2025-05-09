import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const AskGPTForm = () => {
  const [search, setSearch] = useState<string>('');

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(search);

    setSearch('');
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form
      className="max-w-190 border-3 border-blue-600 rounded-2xl pl-10 h-16 flex gap-2"
      onSubmit={onSubmitHandler}
    >
      <input
        className="flex-1 focus:outline-none focus:ring-0 text-2xl placeholder:text-2xl"
        type="text"
        placeholder="Ask whatever you want"
        value={search}
        onChange={onChangeHandler}
      />
      <button className="w-16 bg-blue-500 rounded-2xl flex items-center justify-center">
        <ChevronRight className="w-10 h-10" />
      </button>
    </form>
  );
};
