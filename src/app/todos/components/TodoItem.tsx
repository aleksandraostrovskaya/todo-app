'use client';

import { TodoItemProps } from '@/types/todo';

export function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <li className='flex items-center justify-between p-4 mb-4 rounded-2xl bg-[#111]'>
      <label className='flex items-center gap-4 cursor-pointer w-full'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className='peer hidden'
        />
        <span
          className='w-6 h-6 border-2 border-white rounded-full flex items-center justify-center
            peer-checked:border-transparent peer-checked:bg-[#40ffaa]
            transition-colors flex-shrink-0'
        >
          {todo.completed && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M5 12l4 4L19 7' />
            </svg>
          )}
        </span>

        <span
          className={`text-lg text-white transition-opacity mr-3 break-all flex-grow ${
            todo.completed ? 'line-through opacity-50' : 'opacity-100'
          }`}
        >
          {todo.title}
        </span>
      </label>

      <button
        onClick={() => onDelete(todo.id)}
        className='text-white hover:text-gray-400 transition-colors cursor-pointer flex-shrink-0'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='w-6 h-6'
        >
          <line x1='18' y1='6' x2='6' y2='18' />
          <line x1='6' y1='6' x2='18' y2='18' />
        </svg>
      </button>
    </li>
  );
}
