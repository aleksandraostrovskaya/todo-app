'use client';

import { TodoFormProps } from '@/types/todo';
import { useState } from 'react';

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [input, setInput] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddTodo(input);
    setInput('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-4 p-6 mb-8 bg-[#111] rounded-3xl max-w-3xl w-full shadow-xl'
    >
      <input
        type='text'
        placeholder='What needs to be done?'
        value={input}
        onChange={e => setInput(e.target.value)}
        className='flex-1 p-4 text-white bg-[#222] rounded-2xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#40ffaa] transition-all'
      />
      <button
        type='submit'
        className='px-8 py-3 text-white font-semibold bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-2xl hover:opacity-80 transition-all cursor-pointer'
      >
        Create
      </button>
    </form>
  );
}
