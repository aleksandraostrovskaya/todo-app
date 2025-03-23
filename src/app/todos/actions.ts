import apiClient from '@/lib/api';

export const fetchTodos = async () => {
  const { data } = await apiClient.get('/todos?_limit=10');
  return data;
};

export const addTodo = async (title: string) => {
  const { data } = await apiClient.post('/todos', { title, completed: false });
	return data
};

export const deleteTodo = async (id: number) => {
	await apiClient.delete('/todos/{id}')
}