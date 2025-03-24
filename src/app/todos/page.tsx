'use client';

import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, fetchTodos } from './actions';
import { Todo } from '@/types/todo';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (title: string) => {
    if (!title.trim()) return;
    try {
      const newTodo = await addTodo(title);
      setTodos(prev => [{ ...newTodo, id: Date.now() }, ...prev]);
    } catch (error) {
      console.log('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  const toggleTodoStatus = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main className='flex flex-col items-center justify-start min-h-screen text-center p-4 sm:p-8'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-6 mt-5'>Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul className='mt-6 w-full max-w-xl'>
        {todos.length === 0 && (
          <div className='text-white opacity-50 text-center py-4'>
            No tasks yet. Add your first one!
          </div>
        )}
        <AnimatePresence initial={false}>
          {todos.map(todo => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TodoItem
                todo={todo}
                onDelete={handleDeleteTodo}
                onToggle={toggleTodoStatus}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </main>
  );
}
